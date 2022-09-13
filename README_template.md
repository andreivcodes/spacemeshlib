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

submitTransaction(accountNonce, to, 1, 1, 100, sk)
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

<!-- Jest Junit Comment -->

<!-- Jest Summary Comment -->

<!-- Jest Coverage Comment -->
