/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { BroadcastPoetRequest, BroadcastPoetResponse } from "./gateway_types";

export const protobufPackage = "spacemesh.v1";

/** Exposes poet gateway services that can be used by a poet server to broadcast data to the network */
export interface GatewayService {
  /** Submit a poet data packet to the network to broadcast */
  BroadcastPoet(request: BroadcastPoetRequest): Promise<BroadcastPoetResponse>;
}

export class GatewayServiceClientImpl implements GatewayService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.BroadcastPoet = this.BroadcastPoet.bind(this);
  }
  BroadcastPoet(request: BroadcastPoetRequest): Promise<BroadcastPoetResponse> {
    const data = BroadcastPoetRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.GatewayService", "BroadcastPoet", data);
    return promise.then((data) => BroadcastPoetResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
