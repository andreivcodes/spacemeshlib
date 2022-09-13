import { createGlobalStateClient } from '../src/index'
import { derivePublicKey } from '../src/index'
import { accountDataQuery, getAccountBalance, getAccountNonce } from '../src/index'
import { AccountDataFlag } from '../src/index'

const NETWORK_URL = 'api-devnet226.spacemesh.io'
const NETWORK_PORT = 443
const MNEMONIC: string = process.env.MNEMONIC!

describe('Global State', function () {
  it('can create channel', async function () {
    const channel = createGlobalStateClient(NETWORK_URL, NETWORK_PORT, true)

    expect(channel).not.toBeNull()
  })
  it('should return account data query result', async function () {
    const pubk = (await derivePublicKey(MNEMONIC, 0)) as Uint8Array

    createGlobalStateClient(NETWORK_URL, NETWORK_PORT, true)
    const result = await accountDataQuery(pubk, AccountDataFlag.ACCOUNT_DATA_FLAG_ACCOUNT)

    expect(result).not.toBeNull()
    expect(result.totalResults).not.toBeNull()
  })

  it('should return account nonce', async function () {
    const pubk = (await derivePublicKey(MNEMONIC, 0)) as Uint8Array

    createGlobalStateClient(NETWORK_URL, NETWORK_PORT, true)
    const result = await getAccountNonce(pubk)

    expect(result).not.toBeNull()
    expect(result).toBeGreaterThanOrEqual(0)
  })

  it('should return account balance', async function () {
    const pubk = (await derivePublicKey(MNEMONIC, 0)) as Uint8Array

    createGlobalStateClient(NETWORK_URL, NETWORK_PORT, true)
    const result = await getAccountBalance(pubk)

    expect(result).not.toBeNull()
    expect(result).toBeGreaterThanOrEqual(0)
  })
})
