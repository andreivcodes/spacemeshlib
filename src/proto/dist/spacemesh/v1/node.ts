/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
  UpdatePoetServerRequest,
  UpdatePoetServerResponse,
  VersionResponse,
} from "./node_types";

export const protobufPackage = "spacemesh.v1";

/** Readonly basic node data */
export interface NodeService {
  /** A simple test endpoint */
  Echo(request: EchoRequest): Promise<EchoResponse>;
  /** Returns the version of the node software as a semver string */
  Version(request: Empty): Promise<VersionResponse>;
  /** Returns the github commit hash used to build the node */
  Build(request: Empty): Promise<BuildResponse>;
  /** Current node status (net and sync) */
  Status(request: StatusRequest): Promise<StatusResponse>;
  /** Request that the node start syncing the mesh */
  SyncStart(request: SyncStartRequest): Promise<SyncStartResponse>;
  /** Request that the node initiate graceful shutdown */
  Shutdown(request: ShutdownRequest): Promise<ShutdownResponse>;
  /** UpdatePoetServer updates poet server */
  UpdatePoetServer(request: UpdatePoetServerRequest): Promise<UpdatePoetServerResponse>;
  /** Node status events (sync and net) */
  StatusStream(request: StatusStreamRequest): Observable<StatusStreamResponse>;
  /** Node error events */
  ErrorStream(request: ErrorStreamRequest): Observable<ErrorStreamResponse>;
}

export class NodeServiceClientImpl implements NodeService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Echo = this.Echo.bind(this);
    this.Version = this.Version.bind(this);
    this.Build = this.Build.bind(this);
    this.Status = this.Status.bind(this);
    this.SyncStart = this.SyncStart.bind(this);
    this.Shutdown = this.Shutdown.bind(this);
    this.UpdatePoetServer = this.UpdatePoetServer.bind(this);
    this.StatusStream = this.StatusStream.bind(this);
    this.ErrorStream = this.ErrorStream.bind(this);
  }
  Echo(request: EchoRequest): Promise<EchoResponse> {
    const data = EchoRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.NodeService", "Echo", data);
    return promise.then((data) => EchoResponse.decode(new _m0.Reader(data)));
  }

  Version(request: Empty): Promise<VersionResponse> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.NodeService", "Version", data);
    return promise.then((data) => VersionResponse.decode(new _m0.Reader(data)));
  }

  Build(request: Empty): Promise<BuildResponse> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.NodeService", "Build", data);
    return promise.then((data) => BuildResponse.decode(new _m0.Reader(data)));
  }

  Status(request: StatusRequest): Promise<StatusResponse> {
    const data = StatusRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.NodeService", "Status", data);
    return promise.then((data) => StatusResponse.decode(new _m0.Reader(data)));
  }

  SyncStart(request: SyncStartRequest): Promise<SyncStartResponse> {
    const data = SyncStartRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.NodeService", "SyncStart", data);
    return promise.then((data) => SyncStartResponse.decode(new _m0.Reader(data)));
  }

  Shutdown(request: ShutdownRequest): Promise<ShutdownResponse> {
    const data = ShutdownRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.NodeService", "Shutdown", data);
    return promise.then((data) => ShutdownResponse.decode(new _m0.Reader(data)));
  }

  UpdatePoetServer(request: UpdatePoetServerRequest): Promise<UpdatePoetServerResponse> {
    const data = UpdatePoetServerRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.NodeService", "UpdatePoetServer", data);
    return promise.then((data) => UpdatePoetServerResponse.decode(new _m0.Reader(data)));
  }

  StatusStream(request: StatusStreamRequest): Observable<StatusStreamResponse> {
    const data = StatusStreamRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest("spacemesh.v1.NodeService", "StatusStream", data);
    return result.pipe(map((data) => StatusStreamResponse.decode(new _m0.Reader(data))));
  }

  ErrorStream(request: ErrorStreamRequest): Observable<ErrorStreamResponse> {
    const data = ErrorStreamRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest("spacemesh.v1.NodeService", "ErrorStream", data);
    return result.pipe(map((data) => ErrorStreamResponse.decode(new _m0.Reader(data))));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}
