import { createChannel, ChannelCredentials, createClient } from 'nice-grpc'
import { GlobalStateServiceClient, GlobalStateServiceDefinition } from './proto/dist/spacemesh/v1/global_state'
import { TransactionServiceClient, TransactionServiceDefinition } from './proto/dist/spacemesh/v1/tx'

export let globalStateClient: GlobalStateServiceClient
export let txChannel: TransactionServiceClient

export const createGlobalStateChannel = (channelUrl: string, channelPort: number, secure: boolean) => {
  const channel = createChannel(
    `${channelUrl}:${channelPort}`,
    secure ? ChannelCredentials.createSsl() : ChannelCredentials.createInsecure(),
  )
  globalStateClient = createClient(GlobalStateServiceDefinition, channel)
  return globalStateClient
}

export const createTransactionChannel = (channelUrl: string, channelPort: number, secure: boolean) => {
  const channel = createChannel(
    `${channelUrl}:${channelPort}`,
    secure ? ChannelCredentials.createSsl() : ChannelCredentials.createInsecure(),
  )
  txChannel = createClient(TransactionServiceDefinition, channel)
  return txChannel
}

export const createChannels = (channelUrl: string, channelPort: number, secure: boolean) => {
  createGlobalStateChannel(channelUrl, channelPort, secure)
  createTransactionChannel(channelUrl, channelPort, secure)
}
