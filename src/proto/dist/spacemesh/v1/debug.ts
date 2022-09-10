/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Empty } from "../../google/protobuf/empty";
import { AccountsResponse, NetworkInfoResponse, Proposal } from "./debug_types";

export const protobufPackage = "spacemesh.v1";

/**
 * DebugService exposes methods used for mostly debugging and tests
 * NOTE: The endpoints in this service are experimental and subject to change without notice.
 * They should not be used in production.
 */
export interface DebugService {
  /**
   * NetworkInfo returns p2p network information. Mostly required for integration with deployment
   * and testing tooling.
   */
  NetworkInfo(request: Empty): Promise<NetworkInfoResponse>;
  /**
   * Accounts returns data for all the accounts currently in the node's current global state.
   * This includes each account's address, nonce and balance but excludes projection of account state.
   */
  Accounts(request: Empty): Promise<AccountsResponse>;
  /** ProposalsStream streams all proposals that are confirmed by hare. */
  ProposalsStream(request: Empty): Observable<Proposal>;
}

export class DebugServiceClientImpl implements DebugService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.NetworkInfo = this.NetworkInfo.bind(this);
    this.Accounts = this.Accounts.bind(this);
    this.ProposalsStream = this.ProposalsStream.bind(this);
  }
  NetworkInfo(request: Empty): Promise<NetworkInfoResponse> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.DebugService", "NetworkInfo", data);
    return promise.then((data) => NetworkInfoResponse.decode(new _m0.Reader(data)));
  }

  Accounts(request: Empty): Promise<AccountsResponse> {
    const data = Empty.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.DebugService", "Accounts", data);
    return promise.then((data) => AccountsResponse.decode(new _m0.Reader(data)));
  }

  ProposalsStream(request: Empty): Observable<Proposal> {
    const data = Empty.encode(request).finish();
    const result = this.rpc.serverStreamingRequest("spacemesh.v1.DebugService", "ProposalsStream", data);
    return result.pipe(map((data) => Proposal.decode(new _m0.Reader(data))));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}
