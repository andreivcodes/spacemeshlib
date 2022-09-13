import { createChannels, createGlobalStateChannel, createTransactionChannel } from '../src/index'

const NETWORK_URL = 'api-devnet226.spacemesh.io'
const NETWORK_PORT = 443

describe('Channels', function () {
  it('can create global state channel', async function () {
    const channel = createGlobalStateChannel(NETWORK_URL, NETWORK_PORT, true)

    expect(channel).not.toBeNull()
  })
  it('can create transaction channel', async function () {
    const channel = createTransactionChannel(NETWORK_URL, NETWORK_PORT, true)

    expect(channel).not.toBeNull()
  })
  it('can create all channels', async function () {
    const channel = createChannels(NETWORK_URL, NETWORK_PORT, true)

    expect(channel).not.toBeNull()
  })
})
