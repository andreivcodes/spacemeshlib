import { loadWasm } from './wasm/wasm_loader';
// @ts-ignore
import { exec } from './wasm/wasm_exec.js';
import * as bip39 from 'bip39';
// @ts-ignore
import * as xdr from 'js-xdr';
const { config, UnsignedHyper } = xdr;

import path from 'path';
import fs from 'fs';

exec();
declare global {
  var Go: any;
}

const wasmFile = path.join(path.dirname(fs.realpathSync(__filename)), './wasm/ed25519.wasm');

export const generatePrivateKey = async (mnemonic: string) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  return new Promise(async (resolve) => {
    await loadWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        resolve(__generatePrivateKey(seed));
      })
      .catch((e: any) => {
        throw e;
      });
  });
};

export const generatePublicKey = async (mnemonic: string) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  return new Promise(async (resolve) => {
    await loadWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        resolve(__generatePublicKey(seed));
      })
      .catch((e: any) => {
        throw e;
      });
  });
};

export const derivePrivateKey = async (mnemonic: string, index: number) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const enc = new TextEncoder();
  const saltAsUint8Array = enc.encode('Spacemesh blockmesh');
  return new Promise(async (resolve) => {
    await loadWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        resolve(__derivePrivateKey(seed.slice(32), index, saltAsUint8Array));
      })
      .catch((e: any) => {
        throw e;
      });
  });
};

export const derivePublicKey = async (mnemonic: string, index: number) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const enc = new TextEncoder();
  const saltAsUint8Array = enc.encode('Spacemesh blockmesh');
  return new Promise(async (resolve) => {
    await loadWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        resolve(__derivePublicKey(seed.slice(32), index, saltAsUint8Array));
      })
      .catch((e: any) => {
        throw e;
      });
  });
};

export const signMessage = async (message: string, secretKey: string) => {
  const sk = fromHexString(secretKey);
  return new Promise(async (resolve) => {
    const enc = new TextEncoder();
    const messageAsUint8Array = enc.encode(message);

    await loadWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        let sig = __signTransaction(sk, messageAsUint8Array);
        resolve(sig);
      })
      .catch((e: any) => {
        throw e;
      });
  });
};

export const verifyMessage = async (publicKey: string, message: string, signature: string) => {
  const pk = fromHexString(publicKey);
  const sig = fromHexString(signature);
  return new Promise(async (resolve) => {
    const enc = new TextEncoder();
    const messageAsUint8Array = enc.encode(message);

    await loadWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        let verify = __verifyTransaction(pk, messageAsUint8Array, sig);
        resolve(verify);
      })
      .catch((e: any) => {
        throw e;
      });
  });
};

export const signTransaction = ({
  accountNonce,
  receiver,
  gasLimit,
  fee,
  amount,
  secretKey,
}: {
  accountNonce: number;
  receiver: string;
  gasLimit: number;
  fee: number;
  amount: number;
  secretKey: string;
}) => {
  const sk = fromHexString(secretKey);
  const types = config((xdr1: any) => {
    xdr1.struct('InnerSerializableSignedTransaction', [
      ['AccountNonce', xdr1.uhyper()],
      ['Recipient', xdr1.opaque(20)],
      ['GasLimit', xdr1.uhyper()],
      ['Fee', xdr1.uhyper()],
      ['Amount', xdr1.uhyper()],
    ]);
    xdr1.struct('SerializableSignedTransaction', [
      ['InnerSerializableSignedTransaction', xdr1.lookup('InnerSerializableSignedTransaction')],
      ['Signature', xdr1.opaque(64)],
    ]);
  });
  const message = new types.InnerSerializableSignedTransaction({
    AccountNonce: UnsignedHyper.fromString(`${accountNonce}`),
    Recipient: fromHexString(receiver),
    GasLimit: UnsignedHyper.fromString(`${gasLimit}`),
    Fee: UnsignedHyper.fromString(`${fee}`),
    Amount: UnsignedHyper.fromString(`${amount}`),
  });
  const bufMessage = message.toXDR();
  return new Promise(async (resolve) => {
    const bufMessageAsUint8Array = new Uint8Array(bufMessage);

    await loadWasm(wasmFile)
      .then(() => {
        let sig =
          // @ts-ignore
          __signTransaction(sk, bufMessageAsUint8Array);
        const tx = new types.SerializableSignedTransaction({
          InnerSerializableSignedTransaction: message,
          Signature: sig,
        });
        resolve(tx.toXDR());
      })
      .catch((e: any) => {
        throw e;
      });
  });
};

export const toHexString = (bytes: Uint8Array) =>
  bytes instanceof Buffer
    ? bytes.toString('hex')
    : bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');

export const fromHexString = (hexString: string) => {
  const bytes = [];
  for (let i = 0; i < hexString.length; i += 2) {
    bytes.push(parseInt(hexString.slice(i, i + 2), 16));
  }
  return Uint8Array.from(bytes);
};

export default {
  generatePrivateKey,
  generatePublicKey,
  signMessage,
  verifyMessage,
  signTransaction,
  derivePrivateKey,
  derivePublicKey,
  toHexString,
  fromHexString,
};
