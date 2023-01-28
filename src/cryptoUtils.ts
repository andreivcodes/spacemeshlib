import * as bip39 from "bip39";
import "./wasm/wasm_exec.js";
import { createWalletPath, derivePath, genKeyPair } from "./utils/crypto.js";

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

export const generateKeyPair = async (mnemonic: string, index: number) => {
  await loadwasm();
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const masterKeyPair = genKeyPair(seed.slice(32));
  const path = createWalletPath(index);
  const masterSeed = masterKeyPair.secretKey.slice(0, 32);
  const keyPair = derivePath(path, masterSeed);

  return keyPair;
};
