/* eslint-disable */
import { CallContext, CallOptions } from "nice-grpc-common";
import { VerifyChallengeRequest, VerifyChallengeResponse } from "./gateway_types";

export const protobufPackage = "spacemesh.v1";

/** Exposes poet gateway services */
export type GatewayServiceDefinition = typeof GatewayServiceDefinition;
export const GatewayServiceDefinition = {
  name: "GatewayService",
  fullName: "spacemesh.v1.GatewayService",
  methods: {
    /** Verify a PoET challenge */
    verifyChallenge: {
      name: "VerifyChallenge",
      requestType: VerifyChallengeRequest,
      requestStream: false,
      responseType: VerifyChallengeResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface GatewayServiceServiceImplementation<CallContextExt = {}> {
  /** Verify a PoET challenge */
  verifyChallenge(
    request: VerifyChallengeRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<VerifyChallengeResponse>>;
}

export interface GatewayServiceClient<CallOptionsExt = {}> {
  /** Verify a PoET challenge */
  verifyChallenge(
    request: DeepPartial<VerifyChallengeRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<VerifyChallengeResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
