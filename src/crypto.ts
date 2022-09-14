import { execWasm } from './wasm/wasm_executor'
// @ts-ignore
import { loadWasm } from './wasm/wasm_loader'
import * as bip39 from 'bip39'
// @ts-ignore
import * as xdr from 'js-xdr'
const { config, UnsignedHyper } = xdr

import path from 'path'
import fs from 'fs'
import { TextEncoder } from 'util'
import { fromHexString } from '.'

loadWasm()
declare global {
  // eslint-disable-next-line no-var
  var Go: any
}

const wasmFile = path.join(path.dirname(fs.realpathSync(__filename)), './wasm/ed25519.wasm')

/** @throws error if wasm does not execute __generatePrivateKey */
export const generatePrivateKey = async (mnemonic: string) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic)
  return new Promise((resolve) => {
    execWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        resolve(__generatePrivateKey(seed))
      })
      .catch((e: any) => {
        throw e
      })
  })
}

/** @throws error if wasm does not execute __generatePublicKey */
export const generatePublicKey = async (mnemonic: string) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic)
  return new Promise((resolve) => {
    execWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        resolve(__generatePublicKey(seed))
      })
      .catch((e: any) => {
        throw e
      })
  })
}

/** @throws error if wasm does not execute __derivePrivateKey */
export const derivePrivateKey = async (mnemonic: string, index: number) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic)
  const enc = new TextEncoder()
  const saltAsUint8Array = enc.encode('Spacemesh blockmesh')
  return new Promise((resolve) => {
    execWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        resolve(__derivePrivateKey(seed.slice(32), index, saltAsUint8Array))
      })
      .catch((e: any) => {
        throw e
      })
  })
}

/** @throws error if wasm does not execute __derivePublicKey */
export const derivePublicKey = async (mnemonic: string, index: number) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic)
  const enc = new TextEncoder()
  const saltAsUint8Array = enc.encode('Spacemesh blockmesh')
  return new Promise((resolve) => {
    execWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        resolve(__derivePublicKey(seed.slice(32), index, saltAsUint8Array))
      })
      .catch((e: any) => {
        throw e
      })
  })
}

/** @throws error if wasm does not execute __sign */
export const signMessage = async (message: string, secretKey: string) => {
  const sk = fromHexString(secretKey)
  return new Promise((resolve) => {
    const enc = new TextEncoder()
    const messageAsUint8Array = enc.encode(message)
    execWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        const sig = __sign(sk, messageAsUint8Array)
        resolve(sig)
      })
      .catch((e: any) => {
        throw e
      })
  })
}

/** @throws error if wasm does not execute __verify */
export const verifyMessage = async (publicKey: string, message: string, signature: string) => {
  const pk = fromHexString(publicKey)
  const sig = fromHexString(signature)
  return new Promise((resolve) => {
    const enc = new TextEncoder()
    const messageAsUint8Array = enc.encode(message)
    execWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        const verify = __verify(pk, messageAsUint8Array, sig)
        resolve(verify)
      })
      .catch((e: any) => {
        throw e
      })
  })
}

/** @throws error if wasm does not execute __sign */
export const signTransaction = ({
  accountNonce,
  receiver,
  gasLimit,
  fee,
  amount,
  secretKey,
}: {
  accountNonce: number
  receiver: string
  gasLimit: number
  fee: number
  amount: number
  secretKey: string
}) => {
  const sk = fromHexString(secretKey)
  const types = config((xdr1: any) => {
    xdr1.struct('InnerSerializableSignedTransaction', [
      ['AccountNonce', xdr1.uhyper()],
      ['Recipient', xdr1.opaque(20)],
      ['GasLimit', xdr1.uhyper()],
      ['Fee', xdr1.uhyper()],
      ['Amount', xdr1.uhyper()],
    ])
    xdr1.struct('SerializableSignedTransaction', [
      ['InnerSerializableSignedTransaction', xdr1.lookup('InnerSerializableSignedTransaction')],
      ['Signature', xdr1.opaque(64)],
    ])
  })
  const message = new types.InnerSerializableSignedTransaction({
    AccountNonce: UnsignedHyper.fromString(`${accountNonce}`),
    Recipient: fromHexString(receiver),
    GasLimit: UnsignedHyper.fromString(`${gasLimit}`),
    Fee: UnsignedHyper.fromString(`${fee}`),
    Amount: UnsignedHyper.fromString(`${amount}`),
  })
  const bufMessage = message.toXDR()
  return new Promise((resolve) => {
    const bufMessageAsUint8Array = new Uint8Array(bufMessage)
    execWasm(wasmFile)
      .then(() => {
        const sig =
          // @ts-ignore
          __sign(sk, bufMessageAsUint8Array)
        const tx = new types.SerializableSignedTransaction({
          InnerSerializableSignedTransaction: message,
          Signature: sig,
        })
        resolve(tx.toXDR())
      })
      .catch((e: any) => {
        throw e
      })
  })
}

/** @ignore */
export default {
  generatePrivateKey,
  generatePublicKey,
  signMessage,
  verifyMessage,
  signTransaction,
  derivePrivateKey,
  derivePublicKey,
}
