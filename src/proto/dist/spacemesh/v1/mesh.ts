/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
} from "./mesh_types";

export const protobufPackage = "spacemesh.v1";

/** Readonly API for basic mesh info */
export interface MeshService {
  /** Network genesis time as unix epoch time */
  GenesisTime(request: GenesisTimeRequest): Promise<GenesisTimeResponse>;
  /** Current layer number */
  CurrentLayer(request: CurrentLayerRequest): Promise<CurrentLayerResponse>;
  /** Current epoch number */
  CurrentEpoch(request: CurrentEpochRequest): Promise<CurrentEpochResponse>;
  /** Network ID */
  NetID(request: NetIDRequest): Promise<NetIDResponse>;
  /** Number of layers per epoch (a network parameter) */
  EpochNumLayers(request: EpochNumLayersRequest): Promise<EpochNumLayersResponse>;
  /** Layer duration (a network parameter) */
  LayerDuration(request: LayerDurationRequest): Promise<LayerDurationResponse>;
  /** Number of transactions per second (a network parameter) */
  MaxTransactionsPerSecond(request: MaxTransactionsPerSecondRequest): Promise<MaxTransactionsPerSecondResponse>;
  /** Get account data query */
  AccountMeshDataQuery(request: AccountMeshDataQueryRequest): Promise<AccountMeshDataQueryResponse>;
  /** Layers data query */
  LayersQuery(request: LayersQueryRequest): Promise<LayersQueryResponse>;
  /**
   * A stream of transactions and activations from an account.
   * Includes simple coin transactions with the account as the destination.
   */
  AccountMeshDataStream(request: AccountMeshDataStreamRequest): Observable<AccountMeshDataStreamResponse>;
  /**
   * Layer with blocks, transactions and activations
   * Sent each time layer data changes. Designed for heavy-duty clients.
   */
  LayerStream(request: LayerStreamRequest): Observable<LayerStreamResponse>;
}

export class MeshServiceClientImpl implements MeshService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GenesisTime = this.GenesisTime.bind(this);
    this.CurrentLayer = this.CurrentLayer.bind(this);
    this.CurrentEpoch = this.CurrentEpoch.bind(this);
    this.NetID = this.NetID.bind(this);
    this.EpochNumLayers = this.EpochNumLayers.bind(this);
    this.LayerDuration = this.LayerDuration.bind(this);
    this.MaxTransactionsPerSecond = this.MaxTransactionsPerSecond.bind(this);
    this.AccountMeshDataQuery = this.AccountMeshDataQuery.bind(this);
    this.LayersQuery = this.LayersQuery.bind(this);
    this.AccountMeshDataStream = this.AccountMeshDataStream.bind(this);
    this.LayerStream = this.LayerStream.bind(this);
  }
  GenesisTime(request: GenesisTimeRequest): Promise<GenesisTimeResponse> {
    const data = GenesisTimeRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.MeshService", "GenesisTime", data);
    return promise.then((data) => GenesisTimeResponse.decode(new _m0.Reader(data)));
  }

  CurrentLayer(request: CurrentLayerRequest): Promise<CurrentLayerResponse> {
    const data = CurrentLayerRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.MeshService", "CurrentLayer", data);
    return promise.then((data) => CurrentLayerResponse.decode(new _m0.Reader(data)));
  }

  CurrentEpoch(request: CurrentEpochRequest): Promise<CurrentEpochResponse> {
    const data = CurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.MeshService", "CurrentEpoch", data);
    return promise.then((data) => CurrentEpochResponse.decode(new _m0.Reader(data)));
  }

  NetID(request: NetIDRequest): Promise<NetIDResponse> {
    const data = NetIDRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.MeshService", "NetID", data);
    return promise.then((data) => NetIDResponse.decode(new _m0.Reader(data)));
  }

  EpochNumLayers(request: EpochNumLayersRequest): Promise<EpochNumLayersResponse> {
    const data = EpochNumLayersRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.MeshService", "EpochNumLayers", data);
    return promise.then((data) => EpochNumLayersResponse.decode(new _m0.Reader(data)));
  }

  LayerDuration(request: LayerDurationRequest): Promise<LayerDurationResponse> {
    const data = LayerDurationRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.MeshService", "LayerDuration", data);
    return promise.then((data) => LayerDurationResponse.decode(new _m0.Reader(data)));
  }

  MaxTransactionsPerSecond(request: MaxTransactionsPerSecondRequest): Promise<MaxTransactionsPerSecondResponse> {
    const data = MaxTransactionsPerSecondRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.MeshService", "MaxTransactionsPerSecond", data);
    return promise.then((data) => MaxTransactionsPerSecondResponse.decode(new _m0.Reader(data)));
  }

  AccountMeshDataQuery(request: AccountMeshDataQueryRequest): Promise<AccountMeshDataQueryResponse> {
    const data = AccountMeshDataQueryRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.MeshService", "AccountMeshDataQuery", data);
    return promise.then((data) => AccountMeshDataQueryResponse.decode(new _m0.Reader(data)));
  }

  LayersQuery(request: LayersQueryRequest): Promise<LayersQueryResponse> {
    const data = LayersQueryRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.MeshService", "LayersQuery", data);
    return promise.then((data) => LayersQueryResponse.decode(new _m0.Reader(data)));
  }

  AccountMeshDataStream(request: AccountMeshDataStreamRequest): Observable<AccountMeshDataStreamResponse> {
    const data = AccountMeshDataStreamRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest("spacemesh.v1.MeshService", "AccountMeshDataStream", data);
    return result.pipe(map((data) => AccountMeshDataStreamResponse.decode(new _m0.Reader(data))));
  }

  LayerStream(request: LayerStreamRequest): Observable<LayerStreamResponse> {
    const data = LayerStreamRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest("spacemesh.v1.MeshService", "LayerStream", data);
    return result.pipe(map((data) => LayerStreamResponse.decode(new _m0.Reader(data))));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}
