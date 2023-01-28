package main

import (
	"bytes"
	"syscall/js"

	"fmt"
	"reflect"
	"runtime"

	"github.com/spacemeshos/ed25519"

	"unsafe"
)

var c chan bool

func init() {
	c = make(chan bool)
}

func TypedArrayToByteSlice(arg js.Value) []byte {
	length := arg.Length()
	bytesToReturn := make([]byte, length)
	for i := 0; i < length; i++ {
		bytesToReturn[i] = byte(arg.Index(i).Int())
	}
	return bytesToReturn
}


 func Uint8ArrayToSlice(value js.Value) []byte {
 	s := make([]byte, value.Get("byteLength").Int())
 	js.CopyBytesToGo(s, value)
 	return s
 }

 func ArrayBufferToSlice(value js.Value) []byte {
 	return Uint8ArrayToSlice(js.Global().Get("Uint8Array").New(value))
 }

 func sliceToByteSlice(s interface{}) []byte {
 	switch s := s.(type) {
 	case []int8:
 		h := (*reflect.SliceHeader)(unsafe.Pointer(&s))
 		return *(*[]byte)(unsafe.Pointer(h))
 	case []int16:
 		h := (*reflect.SliceHeader)(unsafe.Pointer(&s))
 		h.Len *= 2
 		h.Cap *= 2
 		return *(*[]byte)(unsafe.Pointer(h))
 	case []int32:
 		h := (*reflect.SliceHeader)(unsafe.Pointer(&s))
 		h.Len *= 4
 		h.Cap *= 4
 		return *(*[]byte)(unsafe.Pointer(h))
 	case []int64:
 		h := (*reflect.SliceHeader)(unsafe.Pointer(&s))
 		h.Len *= 8
 		h.Cap *= 8
 		return *(*[]byte)(unsafe.Pointer(h))
 	case []uint8:
 		return s
 	case []uint16:
 		h := (*reflect.SliceHeader)(unsafe.Pointer(&s))
 		h.Len *= 2
 		h.Cap *= 2
 		return *(*[]byte)(unsafe.Pointer(h))
 	case []uint32:
 		h := (*reflect.SliceHeader)(unsafe.Pointer(&s))
 		h.Len *= 4
 		h.Cap *= 4
 		return *(*[]byte)(unsafe.Pointer(h))
 	case []uint64:
 		h := (*reflect.SliceHeader)(unsafe.Pointer(&s))
 		h.Len *= 8
 		h.Cap *= 8
 		return *(*[]byte)(unsafe.Pointer(h))
 	case []float32:
 		h := (*reflect.SliceHeader)(unsafe.Pointer(&s))
 		h.Len *= 4
 		h.Cap *= 4
 		return *(*[]byte)(unsafe.Pointer(h))
 	case []float64:
 		h := (*reflect.SliceHeader)(unsafe.Pointer(&s))
 		h.Len *= 8
 		h.Cap *= 8
 		return *(*[]byte)(unsafe.Pointer(h))
 	default:
 		panic(fmt.Sprintf("jsutil: unexpected value at sliceToBytesSlice: %T", s))
 	}
 }

 func SliceToTypedArray(s interface{}) (js.Value) {
 	switch s := s.(type) {
 	case []int8:
 		a := js.Global().Get("Uint8Array").New(len(s))
 		js.CopyBytesToJS(a, sliceToByteSlice(s))
 		runtime.KeepAlive(s)
 		buf := a.Get("buffer")
 		return js.Global().Get("Int8Array").New(buf, a.Get("byteOffset"), a.Get("byteLength"))
 	case []int16:
 		a := js.Global().Get("Uint8Array").New(len(s) * 2)
 		js.CopyBytesToJS(a, sliceToByteSlice(s))
 		runtime.KeepAlive(s)
 		buf := a.Get("buffer")
 		return js.Global().Get("Int16Array").New(buf, a.Get("byteOffset"), a.Get("byteLength").Int()/2)
 	case []int32:
 		a := js.Global().Get("Uint8Array").New(len(s) * 4)
 		js.CopyBytesToJS(a, sliceToByteSlice(s))
 		runtime.KeepAlive(s)
 		buf := a.Get("buffer")
 		return js.Global().Get("Int32Array").New(buf, a.Get("byteOffset"), a.Get("byteLength").Int()/4)
 	case []uint8:
 		a := js.Global().Get("Uint8Array").New(len(s))
 		js.CopyBytesToJS(a, s)
 		runtime.KeepAlive(s)
 		return a
 	case []uint16:
 		a := js.Global().Get("Uint8Array").New(len(s) * 2)
 		js.CopyBytesToJS(a, sliceToByteSlice(s))
 		runtime.KeepAlive(s)
 		buf := a.Get("buffer")
 		return js.Global().Get("Uint16Array").New(buf, a.Get("byteOffset"), a.Get("byteLength").Int()/2)
 	case []uint32:
 		a := js.Global().Get("Uint8Array").New(len(s) * 4)
 		js.CopyBytesToJS(a, sliceToByteSlice(s))
 		runtime.KeepAlive(s)
 		buf := a.Get("buffer")
 		return js.Global().Get("Uint32Array").New(buf, a.Get("byteOffset"), a.Get("byteLength").Int()/4)
 	case []float32:
 		a := js.Global().Get("Uint8Array").New(len(s) * 4)
 		js.CopyBytesToJS(a, sliceToByteSlice(s))
 		runtime.KeepAlive(s)
 		buf := a.Get("buffer")
 		return js.Global().Get("Float32Array").New(buf, a.Get("byteOffset"), a.Get("byteLength").Int()/4)
 	case []float64:
 		a := js.Global().Get("Uint8Array").New(len(s) * 8)
 		js.CopyBytesToJS(a, sliceToByteSlice(s))
 		runtime.KeepAlive(s)
 		buf := a.Get("buffer")
 		return js.Global().Get("Float64Array").New(buf, a.Get("byteOffset"), a.Get("byteLength").Int()/8)
 	default:
 		panic(fmt.Sprintf("jsutil: unexpected value at SliceToTypedArray: %T", s))
 	}
 }

var GenerateKeyCallback = js.FuncOf(func(this js.Value, args []js.Value) interface{} {
	seed := TypedArrayToByteSlice(args[0])
	seedBuffer := bytes.NewReader(seed)
	var publicKey, privateKey, err = ed25519.GenerateKey(seedBuffer)
	callback := args[1]
	if err != nil {
		callback.Invoke(js.Null(), js.Null())
		return nil
	}
	callback.Invoke(SliceToTypedArray([]byte(publicKey)), SliceToTypedArray([]byte(privateKey)))
	return nil
})

var DerivePrivateKeyCallback = js.FuncOf(func(this js.Value, args []js.Value) interface{} {
	seed := TypedArrayToByteSlice(args[0])
	index := uint64(args[1].Int())
	salt := TypedArrayToByteSlice(args[2])
	callback := args[3]
	var privateKey = ed25519.NewDerivedKeyFromSeed(seed, index, salt)
	publicKey := make([]byte, ed25519.PublicKeySize)
	copy(publicKey, privateKey[32:])
	callback.Invoke(SliceToTypedArray([]byte(publicKey)), SliceToTypedArray([]byte(privateKey)))
	return nil
})

var Sign2Callback = js.FuncOf(func(this js.Value, args []js.Value) interface{} {
	var sk ed25519.PrivateKey = TypedArrayToByteSlice(args[0])
	var message = TypedArrayToByteSlice(args[1])
	callback := args[len(args)-1:][0]
	signature := ed25519.Sign2(sk, message)
	callback.Invoke(SliceToTypedArray(signature))
	return nil
})

var Verify2Callback = js.FuncOf(func(this js.Value, args []js.Value) interface{} {
	var pk ed25519.PublicKey = TypedArrayToByteSlice(args[0])
	var message = TypedArrayToByteSlice(args[1])
	var signature = TypedArrayToByteSlice(args[2])
	isValid := ed25519.Verify2(pk, message, signature)
	callback := args[len(args)-1:][0]
	callback.Invoke(isValid)
	return nil
})

var ShutdownCallback = js.FuncOf(func(this js.Value, args []js.Value) interface{} {
	c <- true
	return nil
})

func RegisterCallbacks() {
	js.Global().Set("__generateKeyPair", GenerateKeyCallback)
	js.Global().Set("__deriveNewKeyPair", DerivePrivateKeyCallback)
	js.Global().Set("__signTransaction", Sign2Callback)
	js.Global().Set("__verifyTransaction", Verify2Callback)
	js.Global().Set("__stopAndCleanUp", ShutdownCallback)
}

func CleanUp() {
	js.Global().Set("__generateKeyPair", js.Undefined())
	js.Global().Set("__deriveNewKeyPair", js.Undefined())
	js.Global().Set("__signTransaction", js.Undefined())
	js.Global().Set("__verifyTransaction", js.Undefined())
	js.Global().Set("__stopAndCleanUp", js.Undefined())
}

func main() {
	RegisterCallbacks()

	<-c

	CleanUp()
	GenerateKeyCallback.Release()
	DerivePrivateKeyCallback.Release()
	Sign2Callback.Release()
	Verify2Callback.Release()
	ShutdownCallback.Release()
}