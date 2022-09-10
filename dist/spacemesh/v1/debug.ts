/* eslint-disable */
import Long from "long";
import { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../google/protobuf/empty";
import { AccountsResponse, NetworkInfoResponse, Proposal } from "./debug_types";

export const protobufPackage = "spacemesh.v1";

/**
 * DebugService exposes methods used for mostly debugging and tests
 * NOTE: The endpoints in this service are experimental and subject to change without notice.
 * They should not be used in production.
 */
export type DebugServiceDefinition = typeof DebugServiceDefinition;
export const DebugServiceDefinition = {
  name: "DebugService",
  fullName: "spacemesh.v1.DebugService",
  methods: {
    /**
     * NetworkInfo returns p2p network information. Mostly required for integration with deployment
     * and testing tooling.
     */
    networkInfo: {
      name: "NetworkInfo",
      requestType: Empty,
      requestStream: false,
      responseType: NetworkInfoResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Accounts returns data for all the accounts currently in the node's current global state.
     * This includes each account's address, nonce and balance but excludes projection of account state.
     */
    accounts: {
      name: "Accounts",
      requestType: Empty,
      requestStream: false,
      responseType: AccountsResponse,
      responseStream: false,
      options: {},
    },
    /** ProposalsStream streams all proposals that are confirmed by hare. */
    proposalsStream: {
      name: "ProposalsStream",
      requestType: Empty,
      requestStream: false,
      responseType: Proposal,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface DebugServiceServiceImplementation<CallContextExt = {}> {
  /**
   * NetworkInfo returns p2p network information. Mostly required for integration with deployment
   * and testing tooling.
   */
  networkInfo(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<NetworkInfoResponse>>;
  /**
   * Accounts returns data for all the accounts currently in the node's current global state.
   * This includes each account's address, nonce and balance but excludes projection of account state.
   */
  accounts(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<AccountsResponse>>;
  /** ProposalsStream streams all proposals that are confirmed by hare. */
  proposalsStream(
    request: Empty,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<Proposal>>;
}

export interface DebugServiceClient<CallOptionsExt = {}> {
  /**
   * NetworkInfo returns p2p network information. Mostly required for integration with deployment
   * and testing tooling.
   */
  networkInfo(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<NetworkInfoResponse>;
  /**
   * Accounts returns data for all the accounts currently in the node's current global state.
   * This includes each account's address, nonce and balance but excludes projection of account state.
   */
  accounts(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<AccountsResponse>;
  /** ProposalsStream streams all proposals that are confirmed by hare. */
  proposalsStream(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): AsyncIterable<Proposal>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
