import { createChannel, ChannelCredentials, createClient } from 'nice-grpc'
import { GlobalStateServiceClient, GlobalStateServiceDefinition } from './proto/dist/spacemesh/v1/global_state'
import { MeshServiceClient, MeshServiceDefinition } from './proto/dist/spacemesh/v1/mesh'
import { TransactionServiceClient, TransactionServiceDefinition } from './proto/dist/spacemesh/v1/tx'

/** @ignore */
export let globalStateClient: GlobalStateServiceClient
/** @ignore */
export let txClient: TransactionServiceClient
/** @ignore */
export let meshClient: MeshServiceClient

export const createGlobalStateClient = (channelUrl: string, channelPort: number, secure: boolean) => {
  const channel = createChannel(
    `${channelUrl}:${channelPort}`,
    secure ? ChannelCredentials.createSsl() : ChannelCredentials.createInsecure(),
  )
  globalStateClient = createClient(GlobalStateServiceDefinition, channel)
  return globalStateClient
}

export const createTransactionClient = (channelUrl: string, channelPort: number, secure: boolean) => {
  const channel = createChannel(
    `${channelUrl}:${channelPort}`,
    secure ? ChannelCredentials.createSsl() : ChannelCredentials.createInsecure(),
  )
  txClient = createClient(TransactionServiceDefinition, channel)
  return txClient
}

export const createMeshClient = (channelUrl: string, channelPort: number, secure: boolean) => {
  const channel = createChannel(
    `${channelUrl}:${channelPort}`,
    secure ? ChannelCredentials.createSsl() : ChannelCredentials.createInsecure(),
  )
  meshClient = createClient(MeshServiceDefinition, channel)
  return meshClient
}

export const createClients = (channelUrl: string, channelPort: number, secure: boolean) => {
  const gsc = createGlobalStateClient(channelUrl, channelPort, secure)
  const txc = createTransactionClient(channelUrl, channelPort, secure)
  const msc = createMeshClient(channelUrl, channelPort, secure)
  return { gsc, txc, msc }
}
