import fs from 'fs'

export function loadWasm(path: any) {
  const go = new Go()
  return new Promise((resolve, reject) => {
    //@ts-ignore
    WebAssembly.instantiate(fs.readFileSync(path), go.importObject)
      .then((result: any) => {
        go.run(result.instance)
        resolve(result.instance)
      })
      .catch((error: any) => {
        reject(error)
      })
  })
}
