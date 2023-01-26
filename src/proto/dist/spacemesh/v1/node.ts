/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import { Empty } from "../../google/protobuf/empty";
import {
  BuildResponse,
  EchoRequest,
  EchoResponse,
  ErrorStreamRequest,
  ErrorStreamResponse,
  ShutdownRequest,
  ShutdownResponse,
  StatusRequest,
  StatusResponse,
  StatusStreamRequest,
  StatusStreamResponse,
  SyncStartRequest,
  SyncStartResponse,
  UpdatePoetServersRequest,
  UpdatePoetServersResponse,
  VersionResponse,
} from "./node_types";

export const protobufPackage = "spacemesh.v1";

/** Readonly basic node data */
export type NodeServiceDefinition = typeof NodeServiceDefinition;
export const NodeServiceDefinition = {
  name: "NodeService",
  fullName: "spacemesh.v1.NodeService",
  methods: {
    /** A simple test endpoint */
    echo: {
      name: "Echo",
      requestType: EchoRequest,
      requestStream: false,
      responseType: EchoResponse,
      responseStream: false,
      options: {},
    },
    /** Returns the version of the node software as a semver string */
    version: {
      name: "Version",
      requestType: Empty,
      requestStream: false,
      responseType: VersionResponse,
      responseStream: false,
      options: {},
    },
    /** Returns the github commit hash used to build the node */
    build: {
      name: "Build",
      requestType: Empty,
      requestStream: false,
      responseType: BuildResponse,
      responseStream: false,
      options: {},
    },
    /** Current node status (net and sync) */
    status: {
      name: "Status",
      requestType: StatusRequest,
      requestStream: false,
      responseType: StatusResponse,
      responseStream: false,
      options: {},
    },
    /** Request that the node start syncing the mesh */
    syncStart: {
      name: "SyncStart",
      requestType: SyncStartRequest,
      requestStream: false,
      responseType: SyncStartResponse,
      responseStream: false,
      options: {},
    },
    /** Request that the node initiate graceful shutdown */
    shutdown: {
      name: "Shutdown",
      requestType: ShutdownRequest,
      requestStream: false,
      responseType: ShutdownResponse,
      responseStream: false,
      options: {},
    },
    /**
     * UpdatePoetServers updates poet servers
     * All existing PoET servers will be substituted with this new list
     */
    updatePoetServers: {
      name: "UpdatePoetServers",
      requestType: UpdatePoetServersRequest,
      requestStream: false,
      responseType: UpdatePoetServersResponse,
      responseStream: false,
      options: {},
    },
    /** Node status events (sync and net) */
    statusStream: {
      name: "StatusStream",
      requestType: StatusStreamRequest,
      requestStream: false,
      responseType: StatusStreamResponse,
      responseStream: true,
      options: {},
    },
    /** Node error events */
    errorStream: {
      name: "ErrorStream",
      requestType: ErrorStreamRequest,
      requestStream: false,
      responseType: ErrorStreamResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface NodeServiceImplementation<CallContextExt = {}> {
  /** A simple test endpoint */
  echo(request: EchoRequest, context: CallContext & CallContextExt): Promise<DeepPartial<EchoResponse>>;
  /** Returns the version of the node software as a semver string */
  version(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<VersionResponse>>;
  /** Returns the github commit hash used to build the node */
  build(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<BuildResponse>>;
  /** Current node status (net and sync) */
  status(request: StatusRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StatusResponse>>;
  /** Request that the node start syncing the mesh */
  syncStart(request: SyncStartRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SyncStartResponse>>;
  /** Request that the node initiate graceful shutdown */
  shutdown(request: ShutdownRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ShutdownResponse>>;
  /**
   * UpdatePoetServers updates poet servers
   * All existing PoET servers will be substituted with this new list
   */
  updatePoetServers(
    request: UpdatePoetServersRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UpdatePoetServersResponse>>;
  /** Node status events (sync and net) */
  statusStream(
    request: StatusStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<StatusStreamResponse>>;
  /** Node error events */
  errorStream(
    request: ErrorStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<ErrorStreamResponse>>;
}

export interface NodeServiceClient<CallOptionsExt = {}> {
  /** A simple test endpoint */
  echo(request: DeepPartial<EchoRequest>, options?: CallOptions & CallOptionsExt): Promise<EchoResponse>;
  /** Returns the version of the node software as a semver string */
  version(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<VersionResponse>;
  /** Returns the github commit hash used to build the node */
  build(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<BuildResponse>;
  /** Current node status (net and sync) */
  status(request: DeepPartial<StatusRequest>, options?: CallOptions & CallOptionsExt): Promise<StatusResponse>;
  /** Request that the node start syncing the mesh */
  syncStart(request: DeepPartial<SyncStartRequest>, options?: CallOptions & CallOptionsExt): Promise<SyncStartResponse>;
  /** Request that the node initiate graceful shutdown */
  shutdown(request: DeepPartial<ShutdownRequest>, options?: CallOptions & CallOptionsExt): Promise<ShutdownResponse>;
  /**
   * UpdatePoetServers updates poet servers
   * All existing PoET servers will be substituted with this new list
   */
  updatePoetServers(
    request: DeepPartial<UpdatePoetServersRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UpdatePoetServersResponse>;
  /** Node status events (sync and net) */
  statusStream(
    request: DeepPartial<StatusStreamRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<StatusStreamResponse>;
  /** Node error events */
  errorStream(
    request: DeepPartial<ErrorStreamRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<ErrorStreamResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
