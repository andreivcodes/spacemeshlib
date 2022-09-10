import { loadWasm } from "./wasm/wasm_loader.js";
import * as wasmExec from "./wasm/wasm_exec.js";
import * as bip39 from "bip39";

import * as xdr from "js-xdr";
const { config, UnsignedHyper } = xdr;

const wasmFile = "./src/wasm/ed25519.wasm";

wasmExec;

export const generatePrivateKey = async ({ mnemonic }) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  return new Promise(async (resolve) => {
    await loadWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        resolve(__generatePrivateKey(seed));
      })
      .catch((error) => {
        console.log("ouch", error);
      });
  });
};

export const generatePublicKey = async ({ mnemonic }) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  return new Promise(async (resolve) => {
    await loadWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        resolve(__generatePublicKey(seed));
      })
      .catch((error) => {
        console.log("ouch", error);
      });
  });
};

export const derivePrivateKey = async (mnemonic, index) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const enc = new TextEncoder();
  const saltAsUint8Array = enc.encode("Spacemesh blockmesh");
  return new Promise(async (resolve) => {
    await loadWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        resolve(__derivePrivateKey(seed.slice(32), index, saltAsUint8Array));
      })
      .catch((error) => {
        console.log("ouch", error);
      });
  });
};

export const derivePublicKey = async (mnemonic, index) => {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const enc = new TextEncoder();
  const saltAsUint8Array = enc.encode("Spacemesh blockmesh");
  return new Promise(async (resolve) => {
    await loadWasm(wasmFile)
      .then(() => {
        // @ts-ignore
        resolve(__derivePublicKey(seed.slice(32), index, saltAsUint8Array));
      })
      .catch((error) => {
        console.log("ouch", error);
      });
  });
};

export const signMessage = async (message, secretKey) => {
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
      .catch((error) => {
        console.log("ouch", error);
      });
  });
};

export const verifyMessage = async (publicKey, message, signature) => {
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
      .catch((error) => {
        console.log("ouch", error);
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
}) => {
  const sk = fromHexString(secretKey);
  const types = config((xdr1) => {
    xdr1.struct("InnerSerializableSignedTransaction", [
      ["AccountNonce", xdr1.uhyper()],
      ["Recipient", xdr1.opaque(20)],
      ["GasLimit", xdr1.uhyper()],
      ["Fee", xdr1.uhyper()],
      ["Amount", xdr1.uhyper()],
    ]);
    xdr1.struct("SerializableSignedTransaction", [
      [
        "InnerSerializableSignedTransaction",
        xdr1.lookup("InnerSerializableSignedTransaction"),
      ],
      ["Signature", xdr1.opaque(64)],
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
      .catch((error) => {
        console.log("ouch", error);
      });
  });
};

export const toHexString = (bytes) =>
  bytes instanceof Buffer
    ? bytes.toString("hex")
    : bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");

export const fromHexString = (hexString) => {
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
