import fs from "fs";

export function loadWasm(path) {
  const go = new Go();
  return new Promise((resolve, reject) => {
    WebAssembly.instantiate(fs.readFileSync(path), go.importObject)
      .then((result) => {
        go.run(result.instance);
        resolve(result.instance);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
