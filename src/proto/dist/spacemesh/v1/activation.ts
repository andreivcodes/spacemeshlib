/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import { GetRequest, GetResponse } from "./activation_types";

export const protobufPackage = "spacemesh.v1";

/** Exposes services to query activation transactions */
export const ActivationServiceDefinition = {
  name: "ActivationService",
  fullName: "spacemesh.v1.ActivationService",
  methods: {
    /** Get a single activation transaction */
    get: {
      name: "Get",
      requestType: GetRequest,
      requestStream: false,
      responseType: GetResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ActivationServiceImplementation<CallContextExt = {}> {
  /** Get a single activation transaction */
  get(
    request: GetRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<GetResponse>>;
}

export interface ActivationServiceClient<CallOptionsExt = {}> {
  /** Get a single activation transaction */
  get(
    request: DeepPartial<GetRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetResponse>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
