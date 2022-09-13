import { createClients, createGlobalStateClient, createTransactionClient } from './../src/index'

const NETWORK_URL = 'api-devnet226.spacemesh.io'
const NETWORK_PORT = 443

describe('Channels', function () {
  it('can create global state channel', async function () {
    const channel = createGlobalStateClient(NETWORK_URL, NETWORK_PORT, true)

    expect(channel).not.toBeNull()
  })
  it('can create transaction channel', async function () {
    const channel = createTransactionClient(NETWORK_URL, NETWORK_PORT, true)

    expect(channel).not.toBeNull()
  })
  it('can create all channels', async function () {
    const channel = createClients(NETWORK_URL, NETWORK_PORT, true)

    expect(channel).not.toBeNull()
  })
})
