import * as bip39 from "bip39";
import "./wasm/wasm_exec.js";
import { createWalletPath, derivePath } from "./utils/crypto.js";
import { toHexString } from "./utils/hexString.js";
import { file } from "./wasmfile.js";

const loadwasm = async () => {
  // @ts-ignore
  const go = new Go(); // eslint-disable-line no-undef
  // @ts-ignore
  const { instance } = await WebAssembly.instantiate(
    Buffer.from(file),
    go.importObject
  );
  go.run(instance);
  console.log("wasm loaded");
};

const MNEMONIC =
  "wing second among day sun vote nice fortune siren smart holiday video";

const generateKeyPair = (seed: Buffer) => {
  let publicKey = new Uint8Array(32);
  let secretKey = new Uint8Array(64);

  const saveKeys = (pk: Uint8Array, sk: Uint8Array) => {
    if (pk === null || sk === null) {
      throw new Error("key generation failed");
    }
    publicKey = pk;
    secretKey = sk;
  };

  //@ts-ignore
  global.__generateKeyPair(seed, saveKeys);

  return { publicKey, secretKey };
};

const main = async () => {
  await loadwasm();
  const seed = bip39.mnemonicToSeedSync(MNEMONIC);
  const masterKeyPair = generateKeyPair(seed.slice(32));
  const path = createWalletPath(0);
  const masterSeed = masterKeyPair.secretKey.slice(0, 32);
  const keyPair = derivePath(path, masterSeed);

  console.log(toHexString(keyPair.publicKey));
  console.log(toHexString(keyPair.secretKey));
};
main();
