/* eslint-disable */
import _m0 from 'protobufjs/minimal'
import { Status } from '../../google/rpc/status'

export const protobufPackage = 'spacemesh.v1'

export interface BroadcastPoetRequest {
  /** encoded poet proof */
  data: Uint8Array
}

export interface BroadcastPoetResponse {
  status: Status | undefined
}

function createBaseBroadcastPoetRequest(): BroadcastPoetRequest {
  return { data: new Uint8Array() }
}

export const BroadcastPoetRequest = {
  encode(message: BroadcastPoetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastPoetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseBroadcastPoetRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): BroadcastPoetRequest {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array() }
  },

  toJSON(message: BroadcastPoetRequest): unknown {
    const obj: any = {}
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()))
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<BroadcastPoetRequest>, I>>(object: I): BroadcastPoetRequest {
    const message = createBaseBroadcastPoetRequest()
    message.data = object.data ?? new Uint8Array()
    return message
  },
}

function createBaseBroadcastPoetResponse(): BroadcastPoetResponse {
  return { status: undefined }
}

export const BroadcastPoetResponse = {
  encode(message: BroadcastPoetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastPoetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseBroadcastPoetResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): BroadcastPoetResponse {
    return { status: isSet(object.status) ? Status.fromJSON(object.status) : undefined }
  },

  toJSON(message: BroadcastPoetResponse): unknown {
    const obj: any = {}
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined)
    return obj
  },

  fromPartial<I extends Exact<DeepPartial<BroadcastPoetResponse>, I>>(object: I): BroadcastPoetResponse {
    const message = createBaseBroadcastPoetResponse()
    message.status =
      object.status !== undefined && object.status !== null ? Status.fromPartial(object.status) : undefined
    return message
  },
}

declare var self: any | undefined
declare var window: any | undefined
declare var global: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') {
    return globalThis
  }
  if (typeof self !== 'undefined') {
    return self
  }
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }
  throw 'Unable to locate global object'
})()

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'))
  } else {
    const bin = globalThis.atob(b64)
    const arr = new Uint8Array(bin.length)
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i)
    }
    return arr
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString('base64')
  } else {
    const bin: string[] = []
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte))
    })
    return globalThis.btoa(bin.join(''))
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never }

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}
