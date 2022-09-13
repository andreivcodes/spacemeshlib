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
createClients(networkUrl, 443, true)

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
    console.log(`just 💸  transferred funds to ${RECIPIENT}.`)
    console.log(`Tx ID: 0x${toHexString(response.txstate?.id?.id!)}`)
  })
  .catch((err: any) => {
    console.log(`could not transfer :( submitTransaction failed`)
    console.log(err)
  })
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

# Tests

[![CodeQL](https://github.com/andreivcodes/spacemeshlib/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/andreivcodes/spacemeshlib/actions/workflows/codeql-analysis.yml)

| Tests | Skipped | Failures | Errors | Time |
| ----- | ------- | -------- | -------- | ------------------ |
| 19 | 0 :zzz: | 0 :x: | 0 :fire: | 16.487s :stopwatch: |


| Lines | Statements | Branches | Functions |
| ----- | ------- | -------- | -------- |
| <a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/README.md"><img alt="Coverage: 94%" src="https://img.shields.io/badge/Coverage-94%25-brightgreen.svg" /></a><br/> | 94.14% (177/188) | 63.33% (19/30) | 84.05% (58/69) |


<details><summary>Coverage Report (<b>94%</b>)</summary><table><tr><th>File</th><th>% Stmts</th><th>% Branch</th><th>% Funcs</th><th>% Lines</th><th>Uncovered Line #s</th></tr><tbody><tr><td><b>All files</b></td><td><b>94.14</b></td><td><b>63.33</b></td><td><b>84.05</b></td><td><b>94.92</b></td><td></td></tr><tr><td><!-- Jest Coverage Comment --> <a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/clients.ts">clients.ts</a></td><td>100</td><td>50</td><td>100</td><td>100</td><td><a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/clients.ts#L13-L22">1322</a></td></tr><tr><td><!-- Jest Coverage Comment --> <a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/crypto.ts">crypto.ts</a></td><td>91.86</td><td>100</td><td>80</td><td>90.41</td><td><a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/crypto.ts#L32">32</a>, <a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/crypto.ts#L47">47</a>, <a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/crypto.ts#L64">64</a>, <a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/crypto.ts#L81">81</a>, <a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/crypto.ts#L99">99</a>, <a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/crypto.ts#L118">118</a>, <a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/crypto.ts#L175">175</a></td></tr><tr><td><!-- Jest Coverage Comment --> <a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/global_state.ts">global_state.ts</a></td><td>90.32</td><td>65.21</td><td>100</td><td>100</td><td><a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/global_state.ts#L10-L67">10<!-- Jest Coverage Comment -->67</a></td></tr><tr><td><!-- Jest Coverage Comment --> <a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/index.ts">index.ts</a></td><td>100</td><td>100</td><td>80</td><td>100</td><td><!-- Jest Coverage Comment --></td></tr><tr><td> <!-- Jest Coverage Comment --><a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/tx.ts">tx.ts</a></td><td>90</td><td>0</td><td>100</td><td>100</td><td><a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/tx.ts#L20">20</a></td></tr><tr><td> <!-- Jest Coverage Comment --><a href="https://github.com/andreivcodes/spacemeshlib/blob/410a820c039d518dbc56f9d1c4300f789f94b70b/utils.ts">utils.ts</a></td><td>100</td><td>100</td><td>100</td><td>100</td><td></td></tr></tbody></table></details>
