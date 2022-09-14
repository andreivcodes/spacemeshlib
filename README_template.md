# spacemeshlib

spacemeshlib is a typescript library for the [Spacemesh network](https://spacemesh.io).

## Installation

```bash
npm install @andreivcodes/spacemeshlib
```

```bash
yarn add @andreivcodes/spacemeshlib
```

## Usage

```typescript
import {
  toHexString,
  derivePrivateKey,
  derivePublicKey,
  getAccountBalance,
  getAccountNonce,
  submitTransaction,
  createClients,
  SubmitTransactionResponse,
} from '@andreivcodes/spacemeshlib'

const NETWORK_URL = 'https://api-devnet226.spacemesh.io/'

const SEED: string = process.env.SEEDPHRASE!

const RECIPIENT: string = '0x38DB093Ce43Fe3dB88D89568bAAeB68A6b5E74a6'.slice(2)

//loads public key from seed
const pk = (await derivePublicKey(SEED, 0)) as Uint8Array

//connects to network and returns nice-grpc clients
createClients(NETWORK_URL, 443, true)

//gets account nonce and balance
const accountNonce = await getAccountNonce(pk)
const accountBalance = await getAccountBalance(pk)

if (accountBalance < amount) {
  console.log('I am out of funds :(')
  return
}

//changing state of the mesh requires a private key, so we load that
//same as we did with public key, but using derivePrivateKey
const pk = (await derivePrivateKey(SEED, 0)) as Uint8Array

//submit a transaction
submitTransaction({
  accountNonce: accountNonce,
  receiver: RECIPIENT
  gasLimit: 1,
  fee: 1,
  amount: 100,
  secretKey: sk,
})
  //and get a response back
  .then((response: SubmitTransactionResponse) => {
    console.log(`💸 just transferred funds to ${RECIPIENT}.`)
    console.log(`Tx ID: 0x${toHexString(response.txstate?.id?.id!)}`)
  })
  .catch((err: any) => {
    console.log(`could not transfer :( submitTransaction failed`)
    console.log(err)
  })
```

## Docs

Typedoc generated docs are available [here](https://andreivcodes.github.io/spacemeshlib/).

## Build

### Requirements

- protobuf

---

```bash
yarn
```

Installs all dependencies

---

```bash
yarn build:all
```

Cleans old files, compiles new proto files, generates new index files, lints and builds

ESM build is stored in `/dist/esm`

CommonJS build is stored in `/dist/cjs`

Types are stored in `/dist/types`

---

```bash
yarn build:all:withwasm
```

`build:all` but in addition it compiles a new `ed25519.wasm` from `/src/wasm/ed25519-WASM`

go1.19.1 is required!

---

```bash
yarn gen-index
```

Generates index.js for exports automatically using [ctix](https://imjuni.github.io/ctix/)

---

```bash
yarn proto:compile
```

Compiles proto files from `/src/proto/api` and stores result in `/src/proto/dist`

```bash
yarn proto:watch
```

Compiles proto files on any file change

---

```bash
yarn lint
```

Runs ESLint

---

```bash
yarn prettier
```

Runs prettier

---

```bash
yarn docs
```

Generates docs using [Typedoc](https://typedoc.org) and stores results in `/docs`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests and docs as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Tests

[![CodeQL](https://github.com/andreivcodes/spacemeshlib/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/andreivcodes/spacemeshlib/actions/workflows/codeql-analysis.yml)

<!-- Jest Junit Comment -->

<!-- Jest Summary Comment -->

<!-- Jest Coverage Comment -->
