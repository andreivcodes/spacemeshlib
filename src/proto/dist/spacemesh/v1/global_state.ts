/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
} from "./global_state_types";

export const protobufPackage = "spacemesh.v1";

/**
 * Readonly global state data - current and historical.
 * Global state data is data which is not explicitly stored in the mesh.
 * Global state is modified only by the state transition function.
 */
export interface GlobalStateService {
  /** Latest computed global state - layer and its root hash */
  GlobalStateHash(request: GlobalStateHashRequest): Promise<GlobalStateHashResponse>;
  /** Account info in the current global state. */
  Account(request: AccountRequest): Promise<AccountResponse>;
  /**
   * Query for account related data such as rewards, tx receipts and account info
   *
   * Note: it might be too expensive to add a param for layer to get these results from
   * as it may require indexing all global state changes per account by layer.
   * If it is possible to index by layer then we should add param start_layer to
   * AccountDataParams. Currently it will return data from genesis.
   */
  AccountDataQuery(request: AccountDataQueryRequest): Promise<AccountDataQueryResponse>;
  /**
   * Query for smesher data. Currently returns smesher rewards.
   * Note: Not supporting start_layer yet as it may require to index all rewards by
   * smesher and by layer id or allow for queries from a layer and later....
   */
  SmesherDataQuery(request: SmesherDataQueryRequest): Promise<SmesherDataQueryResponse>;
  /**
   * Get a stream of account related changes such as account balance change,
   * tx receipts and rewards
   */
  AccountDataStream(request: AccountDataStreamRequest): Observable<AccountDataStreamResponse>;
  /** Rewards awarded to a smesher id */
  SmesherRewardStream(request: SmesherRewardStreamRequest): Observable<SmesherRewardStreamResponse>;
  /**
   * App Events - emitted by app methods impl code trigged by an
   * app transaction
   */
  AppEventStream(request: AppEventStreamRequest): Observable<AppEventStreamResponse>;
  /** New global state computed for a layer by the STF */
  GlobalStateStream(request: GlobalStateStreamRequest): Observable<GlobalStateStreamResponse>;
}

export class GlobalStateServiceClientImpl implements GlobalStateService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GlobalStateHash = this.GlobalStateHash.bind(this);
    this.Account = this.Account.bind(this);
    this.AccountDataQuery = this.AccountDataQuery.bind(this);
    this.SmesherDataQuery = this.SmesherDataQuery.bind(this);
    this.AccountDataStream = this.AccountDataStream.bind(this);
    this.SmesherRewardStream = this.SmesherRewardStream.bind(this);
    this.AppEventStream = this.AppEventStream.bind(this);
    this.GlobalStateStream = this.GlobalStateStream.bind(this);
  }
  GlobalStateHash(request: GlobalStateHashRequest): Promise<GlobalStateHashResponse> {
    const data = GlobalStateHashRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.GlobalStateService", "GlobalStateHash", data);
    return promise.then((data) => GlobalStateHashResponse.decode(new _m0.Reader(data)));
  }

  Account(request: AccountRequest): Promise<AccountResponse> {
    const data = AccountRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.GlobalStateService", "Account", data);
    return promise.then((data) => AccountResponse.decode(new _m0.Reader(data)));
  }

  AccountDataQuery(request: AccountDataQueryRequest): Promise<AccountDataQueryResponse> {
    const data = AccountDataQueryRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.GlobalStateService", "AccountDataQuery", data);
    return promise.then((data) => AccountDataQueryResponse.decode(new _m0.Reader(data)));
  }

  SmesherDataQuery(request: SmesherDataQueryRequest): Promise<SmesherDataQueryResponse> {
    const data = SmesherDataQueryRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.GlobalStateService", "SmesherDataQuery", data);
    return promise.then((data) => SmesherDataQueryResponse.decode(new _m0.Reader(data)));
  }

  AccountDataStream(request: AccountDataStreamRequest): Observable<AccountDataStreamResponse> {
    const data = AccountDataStreamRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest("spacemesh.v1.GlobalStateService", "AccountDataStream", data);
    return result.pipe(map((data) => AccountDataStreamResponse.decode(new _m0.Reader(data))));
  }

  SmesherRewardStream(request: SmesherRewardStreamRequest): Observable<SmesherRewardStreamResponse> {
    const data = SmesherRewardStreamRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest("spacemesh.v1.GlobalStateService", "SmesherRewardStream", data);
    return result.pipe(map((data) => SmesherRewardStreamResponse.decode(new _m0.Reader(data))));
  }

  AppEventStream(request: AppEventStreamRequest): Observable<AppEventStreamResponse> {
    const data = AppEventStreamRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest("spacemesh.v1.GlobalStateService", "AppEventStream", data);
    return result.pipe(map((data) => AppEventStreamResponse.decode(new _m0.Reader(data))));
  }

  GlobalStateStream(request: GlobalStateStreamRequest): Observable<GlobalStateStreamResponse> {
    const data = GlobalStateStreamRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest("spacemesh.v1.GlobalStateService", "GlobalStateStream", data);
    return result.pipe(map((data) => GlobalStateStreamResponse.decode(new _m0.Reader(data))));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}
