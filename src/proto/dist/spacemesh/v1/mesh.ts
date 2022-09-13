/* eslint-disable */
import { CallContext, CallOptions } from 'nice-grpc-common'
import {
  AccountMeshDataQueryRequest,
  AccountMeshDataQueryResponse,
  AccountMeshDataStreamRequest,
  AccountMeshDataStreamResponse,
  CurrentEpochRequest,
  CurrentEpochResponse,
  CurrentLayerRequest,
  CurrentLayerResponse,
  EpochNumLayersRequest,
  EpochNumLayersResponse,
  GenesisTimeRequest,
  GenesisTimeResponse,
  LayerDurationRequest,
  LayerDurationResponse,
  LayersQueryRequest,
  LayersQueryResponse,
  LayerStreamRequest,
  LayerStreamResponse,
  MaxTransactionsPerSecondRequest,
  MaxTransactionsPerSecondResponse,
  NetIDRequest,
  NetIDResponse,
} from './mesh_types'

export const protobufPackage = 'spacemesh.v1'

/** Readonly API for basic mesh info */
export type MeshServiceDefinition = typeof MeshServiceDefinition
export const MeshServiceDefinition = {
  name: 'MeshService',
  fullName: 'spacemesh.v1.MeshService',
  methods: {
    /** Network genesis time as unix epoch time */
    genesisTime: {
      name: 'GenesisTime',
      requestType: GenesisTimeRequest,
      requestStream: false,
      responseType: GenesisTimeResponse,
      responseStream: false,
      options: {},
    },
    /** Current layer number */
    currentLayer: {
      name: 'CurrentLayer',
      requestType: CurrentLayerRequest,
      requestStream: false,
      responseType: CurrentLayerResponse,
      responseStream: false,
      options: {},
    },
    /** Current epoch number */
    currentEpoch: {
      name: 'CurrentEpoch',
      requestType: CurrentEpochRequest,
      requestStream: false,
      responseType: CurrentEpochResponse,
      responseStream: false,
      options: {},
    },
    /** Network ID */
    netID: {
      name: 'NetID',
      requestType: NetIDRequest,
      requestStream: false,
      responseType: NetIDResponse,
      responseStream: false,
      options: {},
    },
    /** Number of layers per epoch (a network parameter) */
    epochNumLayers: {
      name: 'EpochNumLayers',
      requestType: EpochNumLayersRequest,
      requestStream: false,
      responseType: EpochNumLayersResponse,
      responseStream: false,
      options: {},
    },
    /** Layer duration (a network parameter) */
    layerDuration: {
      name: 'LayerDuration',
      requestType: LayerDurationRequest,
      requestStream: false,
      responseType: LayerDurationResponse,
      responseStream: false,
      options: {},
    },
    /** Number of transactions per second (a network parameter) */
    maxTransactionsPerSecond: {
      name: 'MaxTransactionsPerSecond',
      requestType: MaxTransactionsPerSecondRequest,
      requestStream: false,
      responseType: MaxTransactionsPerSecondResponse,
      responseStream: false,
      options: {},
    },
    /** Get account data query */
    accountMeshDataQuery: {
      name: 'AccountMeshDataQuery',
      requestType: AccountMeshDataQueryRequest,
      requestStream: false,
      responseType: AccountMeshDataQueryResponse,
      responseStream: false,
      options: {},
    },
    /** Layers data query */
    layersQuery: {
      name: 'LayersQuery',
      requestType: LayersQueryRequest,
      requestStream: false,
      responseType: LayersQueryResponse,
      responseStream: false,
      options: {},
    },
    /**
     * A stream of transactions and activations from an account.
     * Includes simple coin transactions with the account as the destination.
     */
    accountMeshDataStream: {
      name: 'AccountMeshDataStream',
      requestType: AccountMeshDataStreamRequest,
      requestStream: false,
      responseType: AccountMeshDataStreamResponse,
      responseStream: true,
      options: {},
    },
    /**
     * Layer with blocks, transactions and activations
     * Sent each time layer data changes. Designed for heavy-duty clients.
     */
    layerStream: {
      name: 'LayerStream',
      requestType: LayerStreamRequest,
      requestStream: false,
      responseType: LayerStreamResponse,
      responseStream: true,
      options: {},
    },
  },
} as const

export interface MeshServiceServiceImplementation<CallContextExt = {}> {
  /** Network genesis time as unix epoch time */
  genesisTime(
    request: GenesisTimeRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GenesisTimeResponse>>
  /** Current layer number */
  currentLayer(
    request: CurrentLayerRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CurrentLayerResponse>>
  /** Current epoch number */
  currentEpoch(
    request: CurrentEpochRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CurrentEpochResponse>>
  /** Network ID */
  netID(request: NetIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<NetIDResponse>>
  /** Number of layers per epoch (a network parameter) */
  epochNumLayers(
    request: EpochNumLayersRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<EpochNumLayersResponse>>
  /** Layer duration (a network parameter) */
  layerDuration(
    request: LayerDurationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<LayerDurationResponse>>
  /** Number of transactions per second (a network parameter) */
  maxTransactionsPerSecond(
    request: MaxTransactionsPerSecondRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<MaxTransactionsPerSecondResponse>>
  /** Get account data query */
  accountMeshDataQuery(
    request: AccountMeshDataQueryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AccountMeshDataQueryResponse>>
  /** Layers data query */
  layersQuery(
    request: LayersQueryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<LayersQueryResponse>>
  /**
   * A stream of transactions and activations from an account.
   * Includes simple coin transactions with the account as the destination.
   */
  accountMeshDataStream(
    request: AccountMeshDataStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<AccountMeshDataStreamResponse>>
  /**
   * Layer with blocks, transactions and activations
   * Sent each time layer data changes. Designed for heavy-duty clients.
   */
  layerStream(
    request: LayerStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<LayerStreamResponse>>
}

export interface MeshServiceClient<CallOptionsExt = {}> {
  /** Network genesis time as unix epoch time */
  genesisTime(
    request: DeepPartial<GenesisTimeRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GenesisTimeResponse>
  /** Current layer number */
  currentLayer(
    request: DeepPartial<CurrentLayerRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CurrentLayerResponse>
  /** Current epoch number */
  currentEpoch(
    request: DeepPartial<CurrentEpochRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CurrentEpochResponse>
  /** Network ID */
  netID(request: DeepPartial<NetIDRequest>, options?: CallOptions & CallOptionsExt): Promise<NetIDResponse>
  /** Number of layers per epoch (a network parameter) */
  epochNumLayers(
    request: DeepPartial<EpochNumLayersRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<EpochNumLayersResponse>
  /** Layer duration (a network parameter) */
  layerDuration(
    request: DeepPartial<LayerDurationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<LayerDurationResponse>
  /** Number of transactions per second (a network parameter) */
  maxTransactionsPerSecond(
    request: DeepPartial<MaxTransactionsPerSecondRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<MaxTransactionsPerSecondResponse>
  /** Get account data query */
  accountMeshDataQuery(
    request: DeepPartial<AccountMeshDataQueryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AccountMeshDataQueryResponse>
  /** Layers data query */
  layersQuery(
    request: DeepPartial<LayersQueryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<LayersQueryResponse>
  /**
   * A stream of transactions and activations from an account.
   * Includes simple coin transactions with the account as the destination.
   */
  accountMeshDataStream(
    request: DeepPartial<AccountMeshDataStreamRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<AccountMeshDataStreamResponse>
  /**
   * Layer with blocks, transactions and activations
   * Sent each time layer data changes. Designed for heavy-duty clients.
   */
  layerStream(
    request: DeepPartial<LayerStreamRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<LayerStreamResponse>
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> }
