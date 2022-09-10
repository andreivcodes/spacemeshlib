/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import { BroadcastPoetRequest, BroadcastPoetResponse } from "./gateway_types";

export const protobufPackage = "spacemesh.v1";

/** Exposes poet gateway services that can be used by a poet server to broadcast data to the network */
export type GatewayServiceDefinition = typeof GatewayServiceDefinition;
export const GatewayServiceDefinition = {
  name: "GatewayService",
  fullName: "spacemesh.v1.GatewayService",
  methods: {
    /** Submit a poet data packet to the network to broadcast */
    broadcastPoet: {
      name: "BroadcastPoet",
      requestType: BroadcastPoetRequest,
      requestStream: false,
      responseType: BroadcastPoetResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface GatewayServiceServiceImplementation<CallContextExt = {}> {
  /** Submit a poet data packet to the network to broadcast */
  broadcastPoet(
    request: BroadcastPoetRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<BroadcastPoetResponse>>;
}

export interface GatewayServiceClient<CallOptionsExt = {}> {
  /** Submit a poet data packet to the network to broadcast */
  broadcastPoet(
    request: DeepPartial<BroadcastPoetRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<BroadcastPoetResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
