// @generated by protobuf-ts 2.8.1
// @generated from protobuf file "spacemesh/v1/mesh.proto" (package "spacemesh.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { MeshService } from "./mesh";
import type { LayerStreamResponse } from "./mesh_types";
import type { LayerStreamRequest } from "./mesh_types";
import type { AccountMeshDataStreamResponse } from "./mesh_types";
import type { AccountMeshDataStreamRequest } from "./mesh_types";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { LayersQueryResponse } from "./mesh_types";
import type { LayersQueryRequest } from "./mesh_types";
import type { AccountMeshDataQueryResponse } from "./mesh_types";
import type { AccountMeshDataQueryRequest } from "./mesh_types";
import type { MaxTransactionsPerSecondResponse } from "./mesh_types";
import type { MaxTransactionsPerSecondRequest } from "./mesh_types";
import type { LayerDurationResponse } from "./mesh_types";
import type { LayerDurationRequest } from "./mesh_types";
import type { EpochNumLayersResponse } from "./mesh_types";
import type { EpochNumLayersRequest } from "./mesh_types";
import type { NetIDResponse } from "./mesh_types";
import type { NetIDRequest } from "./mesh_types";
import type { CurrentEpochResponse } from "./mesh_types";
import type { CurrentEpochRequest } from "./mesh_types";
import type { CurrentLayerResponse } from "./mesh_types";
import type { CurrentLayerRequest } from "./mesh_types";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GenesisTimeResponse } from "./mesh_types";
import type { GenesisTimeRequest } from "./mesh_types";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Readonly API for basic mesh info
 *
 * @generated from protobuf service spacemesh.v1.MeshService
 */
export interface IMeshServiceClient {
    /**
     * Network genesis time as unix epoch time
     *
     * @generated from protobuf rpc: GenesisTime(spacemesh.v1.GenesisTimeRequest) returns (spacemesh.v1.GenesisTimeResponse);
     */
    genesisTime(input: GenesisTimeRequest, options?: RpcOptions): UnaryCall<GenesisTimeRequest, GenesisTimeResponse>;
    /**
     * Current layer number
     *
     * @generated from protobuf rpc: CurrentLayer(spacemesh.v1.CurrentLayerRequest) returns (spacemesh.v1.CurrentLayerResponse);
     */
    currentLayer(input: CurrentLayerRequest, options?: RpcOptions): UnaryCall<CurrentLayerRequest, CurrentLayerResponse>;
    /**
     * Current epoch number
     *
     * @generated from protobuf rpc: CurrentEpoch(spacemesh.v1.CurrentEpochRequest) returns (spacemesh.v1.CurrentEpochResponse);
     */
    currentEpoch(input: CurrentEpochRequest, options?: RpcOptions): UnaryCall<CurrentEpochRequest, CurrentEpochResponse>;
    /**
     * Network ID
     *
     * @generated from protobuf rpc: NetID(spacemesh.v1.NetIDRequest) returns (spacemesh.v1.NetIDResponse);
     */
    netID(input: NetIDRequest, options?: RpcOptions): UnaryCall<NetIDRequest, NetIDResponse>;
    /**
     * Number of layers per epoch (a network parameter)
     *
     * @generated from protobuf rpc: EpochNumLayers(spacemesh.v1.EpochNumLayersRequest) returns (spacemesh.v1.EpochNumLayersResponse);
     */
    epochNumLayers(input: EpochNumLayersRequest, options?: RpcOptions): UnaryCall<EpochNumLayersRequest, EpochNumLayersResponse>;
    /**
     * Layer duration (a network parameter)
     *
     * @generated from protobuf rpc: LayerDuration(spacemesh.v1.LayerDurationRequest) returns (spacemesh.v1.LayerDurationResponse);
     */
    layerDuration(input: LayerDurationRequest, options?: RpcOptions): UnaryCall<LayerDurationRequest, LayerDurationResponse>;
    /**
     * Number of transactions per second (a network parameter)
     *
     * @generated from protobuf rpc: MaxTransactionsPerSecond(spacemesh.v1.MaxTransactionsPerSecondRequest) returns (spacemesh.v1.MaxTransactionsPerSecondResponse);
     */
    maxTransactionsPerSecond(input: MaxTransactionsPerSecondRequest, options?: RpcOptions): UnaryCall<MaxTransactionsPerSecondRequest, MaxTransactionsPerSecondResponse>;
    // //////// Queries
    // Queries return paginated, historical data.

    /**
     * Get account data query
     *
     * @generated from protobuf rpc: AccountMeshDataQuery(spacemesh.v1.AccountMeshDataQueryRequest) returns (spacemesh.v1.AccountMeshDataQueryResponse);
     */
    accountMeshDataQuery(input: AccountMeshDataQueryRequest, options?: RpcOptions): UnaryCall<AccountMeshDataQueryRequest, AccountMeshDataQueryResponse>;
    /**
     * Layers data query
     *
     * @generated from protobuf rpc: LayersQuery(spacemesh.v1.LayersQueryRequest) returns (spacemesh.v1.LayersQueryResponse);
     */
    layersQuery(input: LayersQueryRequest, options?: RpcOptions): UnaryCall<LayersQueryRequest, LayersQueryResponse>;
    // //////// Streams
    // Streams return live, new data as it becomes available to the node and not
    // historical data.

    /**
     * A stream of transactions and activations from an account.
     * Includes simple coin transactions with the account as the destination.
     *
     * @generated from protobuf rpc: AccountMeshDataStream(spacemesh.v1.AccountMeshDataStreamRequest) returns (stream spacemesh.v1.AccountMeshDataStreamResponse);
     */
    accountMeshDataStream(input: AccountMeshDataStreamRequest, options?: RpcOptions): ServerStreamingCall<AccountMeshDataStreamRequest, AccountMeshDataStreamResponse>;
    /**
     * Layer with blocks, transactions and activations
     * Sent each time layer data changes. Designed for heavy-duty clients.
     *
     * @generated from protobuf rpc: LayerStream(spacemesh.v1.LayerStreamRequest) returns (stream spacemesh.v1.LayerStreamResponse);
     */
    layerStream(input: LayerStreamRequest, options?: RpcOptions): ServerStreamingCall<LayerStreamRequest, LayerStreamResponse>;
}
/**
 * Readonly API for basic mesh info
 *
 * @generated from protobuf service spacemesh.v1.MeshService
 */
export class MeshServiceClient implements IMeshServiceClient, ServiceInfo {
    typeName = MeshService.typeName;
    methods = MeshService.methods;
    options = MeshService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Network genesis time as unix epoch time
     *
     * @generated from protobuf rpc: GenesisTime(spacemesh.v1.GenesisTimeRequest) returns (spacemesh.v1.GenesisTimeResponse);
     */
    genesisTime(input: GenesisTimeRequest, options?: RpcOptions): UnaryCall<GenesisTimeRequest, GenesisTimeResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GenesisTimeRequest, GenesisTimeResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Current layer number
     *
     * @generated from protobuf rpc: CurrentLayer(spacemesh.v1.CurrentLayerRequest) returns (spacemesh.v1.CurrentLayerResponse);
     */
    currentLayer(input: CurrentLayerRequest, options?: RpcOptions): UnaryCall<CurrentLayerRequest, CurrentLayerResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<CurrentLayerRequest, CurrentLayerResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Current epoch number
     *
     * @generated from protobuf rpc: CurrentEpoch(spacemesh.v1.CurrentEpochRequest) returns (spacemesh.v1.CurrentEpochResponse);
     */
    currentEpoch(input: CurrentEpochRequest, options?: RpcOptions): UnaryCall<CurrentEpochRequest, CurrentEpochResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<CurrentEpochRequest, CurrentEpochResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Network ID
     *
     * @generated from protobuf rpc: NetID(spacemesh.v1.NetIDRequest) returns (spacemesh.v1.NetIDResponse);
     */
    netID(input: NetIDRequest, options?: RpcOptions): UnaryCall<NetIDRequest, NetIDResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<NetIDRequest, NetIDResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Number of layers per epoch (a network parameter)
     *
     * @generated from protobuf rpc: EpochNumLayers(spacemesh.v1.EpochNumLayersRequest) returns (spacemesh.v1.EpochNumLayersResponse);
     */
    epochNumLayers(input: EpochNumLayersRequest, options?: RpcOptions): UnaryCall<EpochNumLayersRequest, EpochNumLayersResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<EpochNumLayersRequest, EpochNumLayersResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Layer duration (a network parameter)
     *
     * @generated from protobuf rpc: LayerDuration(spacemesh.v1.LayerDurationRequest) returns (spacemesh.v1.LayerDurationResponse);
     */
    layerDuration(input: LayerDurationRequest, options?: RpcOptions): UnaryCall<LayerDurationRequest, LayerDurationResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<LayerDurationRequest, LayerDurationResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Number of transactions per second (a network parameter)
     *
     * @generated from protobuf rpc: MaxTransactionsPerSecond(spacemesh.v1.MaxTransactionsPerSecondRequest) returns (spacemesh.v1.MaxTransactionsPerSecondResponse);
     */
    maxTransactionsPerSecond(input: MaxTransactionsPerSecondRequest, options?: RpcOptions): UnaryCall<MaxTransactionsPerSecondRequest, MaxTransactionsPerSecondResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<MaxTransactionsPerSecondRequest, MaxTransactionsPerSecondResponse>("unary", this._transport, method, opt, input);
    }
    // //////// Queries
    // Queries return paginated, historical data.

    /**
     * Get account data query
     *
     * @generated from protobuf rpc: AccountMeshDataQuery(spacemesh.v1.AccountMeshDataQueryRequest) returns (spacemesh.v1.AccountMeshDataQueryResponse);
     */
    accountMeshDataQuery(input: AccountMeshDataQueryRequest, options?: RpcOptions): UnaryCall<AccountMeshDataQueryRequest, AccountMeshDataQueryResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccountMeshDataQueryRequest, AccountMeshDataQueryResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Layers data query
     *
     * @generated from protobuf rpc: LayersQuery(spacemesh.v1.LayersQueryRequest) returns (spacemesh.v1.LayersQueryResponse);
     */
    layersQuery(input: LayersQueryRequest, options?: RpcOptions): UnaryCall<LayersQueryRequest, LayersQueryResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<LayersQueryRequest, LayersQueryResponse>("unary", this._transport, method, opt, input);
    }
    // //////// Streams
    // Streams return live, new data as it becomes available to the node and not
    // historical data.

    /**
     * A stream of transactions and activations from an account.
     * Includes simple coin transactions with the account as the destination.
     *
     * @generated from protobuf rpc: AccountMeshDataStream(spacemesh.v1.AccountMeshDataStreamRequest) returns (stream spacemesh.v1.AccountMeshDataStreamResponse);
     */
    accountMeshDataStream(input: AccountMeshDataStreamRequest, options?: RpcOptions): ServerStreamingCall<AccountMeshDataStreamRequest, AccountMeshDataStreamResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<AccountMeshDataStreamRequest, AccountMeshDataStreamResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * Layer with blocks, transactions and activations
     * Sent each time layer data changes. Designed for heavy-duty clients.
     *
     * @generated from protobuf rpc: LayerStream(spacemesh.v1.LayerStreamRequest) returns (stream spacemesh.v1.LayerStreamResponse);
     */
    layerStream(input: LayerStreamRequest, options?: RpcOptions): ServerStreamingCall<LayerStreamRequest, LayerStreamResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<LayerStreamRequest, LayerStreamResponse>("serverStreaming", this._transport, method, opt, input);
    }
}
