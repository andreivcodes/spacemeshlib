/* eslint-disable */
import { CallContext, CallOptions } from 'nice-grpc-common'
import {
  AccountDataQueryRequest,
  AccountDataQueryResponse,
  AccountDataStreamRequest,
  AccountDataStreamResponse,
  AccountRequest,
  AccountResponse,
  AppEventStreamRequest,
  AppEventStreamResponse,
  GlobalStateHashRequest,
  GlobalStateHashResponse,
  GlobalStateStreamRequest,
  GlobalStateStreamResponse,
  SmesherDataQueryRequest,
  SmesherDataQueryResponse,
  SmesherRewardStreamRequest,
  SmesherRewardStreamResponse,
} from './global_state_types'

export const protobufPackage = 'spacemesh.v1'

/**
 * Readonly global state data - current and historical.
 * Global state data is data which is not explicitly stored in the mesh.
 * Global state is modified only by the state transition function.
 */
export type GlobalStateServiceDefinition = typeof GlobalStateServiceDefinition
export const GlobalStateServiceDefinition = {
  name: 'GlobalStateService',
  fullName: 'spacemesh.v1.GlobalStateService',
  methods: {
    /** Latest computed global state - layer and its root hash */
    globalStateHash: {
      name: 'GlobalStateHash',
      requestType: GlobalStateHashRequest,
      requestStream: false,
      responseType: GlobalStateHashResponse,
      responseStream: false,
      options: {},
    },
    /** Account info in the current global state. */
    account: {
      name: 'Account',
      requestType: AccountRequest,
      requestStream: false,
      responseType: AccountResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Query for account related data such as rewards, tx receipts and account info
     *
     * Note: it might be too expensive to add a param for layer to get these results from
     * as it may require indexing all global state changes per account by layer.
     * If it is possible to index by layer then we should add param start_layer to
     * AccountDataParams. Currently it will return data from genesis.
     */
    accountDataQuery: {
      name: 'AccountDataQuery',
      requestType: AccountDataQueryRequest,
      requestStream: false,
      responseType: AccountDataQueryResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Query for smesher data. Currently returns smesher rewards.
     * Note: Not supporting start_layer yet as it may require to index all rewards by
     * smesher and by layer id or allow for queries from a layer and later....
     */
    smesherDataQuery: {
      name: 'SmesherDataQuery',
      requestType: SmesherDataQueryRequest,
      requestStream: false,
      responseType: SmesherDataQueryResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Get a stream of account related changes such as account balance change,
     * tx receipts and rewards
     */
    accountDataStream: {
      name: 'AccountDataStream',
      requestType: AccountDataStreamRequest,
      requestStream: false,
      responseType: AccountDataStreamResponse,
      responseStream: true,
      options: {},
    },
    /** Rewards awarded to a smesher id */
    smesherRewardStream: {
      name: 'SmesherRewardStream',
      requestType: SmesherRewardStreamRequest,
      requestStream: false,
      responseType: SmesherRewardStreamResponse,
      responseStream: true,
      options: {},
    },
    /**
     * App Events - emitted by app methods impl code trigged by an
     * app transaction
     */
    appEventStream: {
      name: 'AppEventStream',
      requestType: AppEventStreamRequest,
      requestStream: false,
      responseType: AppEventStreamResponse,
      responseStream: true,
      options: {},
    },
    /** New global state computed for a layer by the STF */
    globalStateStream: {
      name: 'GlobalStateStream',
      requestType: GlobalStateStreamRequest,
      requestStream: false,
      responseType: GlobalStateStreamResponse,
      responseStream: true,
      options: {},
    },
  },
} as const

export interface GlobalStateServiceServiceImplementation<CallContextExt = {}> {
  /** Latest computed global state - layer and its root hash */
  globalStateHash(
    request: GlobalStateHashRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GlobalStateHashResponse>>
  /** Account info in the current global state. */
  account(request: AccountRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AccountResponse>>
  /**
   * Query for account related data such as rewards, tx receipts and account info
   *
   * Note: it might be too expensive to add a param for layer to get these results from
   * as it may require indexing all global state changes per account by layer.
   * If it is possible to index by layer then we should add param start_layer to
   * AccountDataParams. Currently it will return data from genesis.
   */
  accountDataQuery(
    request: AccountDataQueryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AccountDataQueryResponse>>
  /**
   * Query for smesher data. Currently returns smesher rewards.
   * Note: Not supporting start_layer yet as it may require to index all rewards by
   * smesher and by layer id or allow for queries from a layer and later....
   */
  smesherDataQuery(
    request: SmesherDataQueryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SmesherDataQueryResponse>>
  /**
   * Get a stream of account related changes such as account balance change,
   * tx receipts and rewards
   */
  accountDataStream(
    request: AccountDataStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<AccountDataStreamResponse>>
  /** Rewards awarded to a smesher id */
  smesherRewardStream(
    request: SmesherRewardStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<SmesherRewardStreamResponse>>
  /**
   * App Events - emitted by app methods impl code trigged by an
   * app transaction
   */
  appEventStream(
    request: AppEventStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<AppEventStreamResponse>>
  /** New global state computed for a layer by the STF */
  globalStateStream(
    request: GlobalStateStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<GlobalStateStreamResponse>>
}

export interface GlobalStateServiceClient<CallOptionsExt = {}> {
  /** Latest computed global state - layer and its root hash */
  globalStateHash(
    request: DeepPartial<GlobalStateHashRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GlobalStateHashResponse>
  /** Account info in the current global state. */
  account(request: DeepPartial<AccountRequest>, options?: CallOptions & CallOptionsExt): Promise<AccountResponse>
  /**
   * Query for account related data such as rewards, tx receipts and account info
   *
   * Note: it might be too expensive to add a param for layer to get these results from
   * as it may require indexing all global state changes per account by layer.
   * If it is possible to index by layer then we should add param start_layer to
   * AccountDataParams. Currently it will return data from genesis.
   */
  accountDataQuery(
    request: DeepPartial<AccountDataQueryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AccountDataQueryResponse>
  /**
   * Query for smesher data. Currently returns smesher rewards.
   * Note: Not supporting start_layer yet as it may require to index all rewards by
   * smesher and by layer id or allow for queries from a layer and later....
   */
  smesherDataQuery(
    request: DeepPartial<SmesherDataQueryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SmesherDataQueryResponse>
  /**
   * Get a stream of account related changes such as account balance change,
   * tx receipts and rewards
   */
  accountDataStream(
    request: DeepPartial<AccountDataStreamRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<AccountDataStreamResponse>
  /** Rewards awarded to a smesher id */
  smesherRewardStream(
    request: DeepPartial<SmesherRewardStreamRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<SmesherRewardStreamResponse>
  /**
   * App Events - emitted by app methods impl code trigged by an
   * app transaction
   */
  appEventStream(
    request: DeepPartial<AppEventStreamRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<AppEventStreamResponse>
  /** New global state computed for a layer by the STF */
  globalStateStream(
    request: DeepPartial<GlobalStateStreamRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<GlobalStateStreamResponse>
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
