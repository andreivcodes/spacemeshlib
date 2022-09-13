import { createClients, createTransactionClient } from '../src/index'
import { derivePrivateKey, derivePublicKey } from '../src/index'
import { getAccountNonce } from '../src/index'
import { submitTransaction } from '../src/index'

const NETWORK_URL = 'api-devnet226.spacemesh.io'
const NETWORK_PORT = 443
const MNEMONIC: string = process.env.MNEMONIC!
const ADDRESS = '0x38db093ce43fe3db88d89568baaeb68a6b5e74a6'

describe('Transaction', function () {
  it('can create channel', async function () {
    const channel = createTransactionClient(NETWORK_URL, NETWORK_PORT, true)

    expect(channel).not.toBeNull()
  })

  it('can submit transaction', async function () {
    const sk = (await derivePrivateKey(MNEMONIC, 0)) as Uint8Array
    const pk = (await derivePublicKey(MNEMONIC, 0)) as Uint8Array

    await createClients(NETWORK_URL, 443, true)

    const accountNonce = await getAccountNonce(pk)

    const tx = await submitTransaction(accountNonce, ADDRESS.slice(2), 1, 1, 100, sk)
    expect(tx.status?.code).toBe(0)
  })
})
