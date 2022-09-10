/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status } from "../../google/rpc/status";
import { AccountId, Amount, SimpleInt } from "./types";

export const protobufPackage = "spacemesh.v1";

export interface IsSmeshingResponse {
  isSmeshing: boolean;
}

export interface StartSmeshingRequest {
  /** Coinbase account for rewards accumulation. */
  coinbase:
    | AccountId
    | undefined;
  /** The Post setup options. */
  opts: PostSetupOpts | undefined;
}

export interface StartSmeshingResponse {
  status: Status | undefined;
}

/** Param passed to methods to indicate a request to delete data files */
export interface StopSmeshingRequest {
  deleteFiles: boolean;
}

export interface StopSmeshingResponse {
  status: Status | undefined;
}

export interface SetCoinbaseRequest {
  id: AccountId | undefined;
}

export interface SetCoinbaseResponse {
  status: Status | undefined;
}

export interface MinGasResponse {
  mingas: SimpleInt | undefined;
}

export interface SetMinGasRequest {
  mingas: SimpleInt | undefined;
}

export interface SetMinGasResponse {
  status: Status | undefined;
}

export interface SmesherIDResponse {
  accountId: AccountId | undefined;
}

export interface CoinbaseResponse {
  accountId: AccountId | undefined;
}

export interface EstimatedRewardsRequest {
}

/**
 * Estimated rewards for the next epoch. Note that this is a global value that will be the
 * same for all smeshers, and is based on the default minimum commitment size and fixed
 * epoch length, both of which are network params.
 */
export interface EstimatedRewardsResponse {
  /** The amount of the total estimated reward in the next upcoming epoch */
  amount:
    | Amount
    | undefined;
  /** The number of Post data commitment units that this estimated reward corresponds to (part of global config) */
  numUnits: number;
}

export interface PostSetupComputeProvidersRequest {
  /** Whether to run a short benchmarking session for each provider to evaluate its performance */
  benchmark: boolean;
}

export interface PostSetupComputeProvidersResponse {
  providers: PostSetupComputeProvider[];
}

export interface PostSetupStatusResponse {
  status: PostSetupStatus | undefined;
}

export interface PostSetupStatusStreamResponse {
  status: PostSetupStatus | undefined;
}

export interface PostConfigResponse {
  bitsPerLabel: number;
  labelsPerUnit: number;
  minNumUnits: number;
  maxNumUnits: number;
}

export interface PostSetupComputeProvider {
  /** 0, 1, 2... */
  id: number;
  /** e.g. Nvidia GTX 2700 */
  model: string;
  /** A provided compute api */
  computeApi: PostSetupComputeProvider_ComputeApiClass;
  /** Estimated performance in hashes per second */
  performance: number;
}

export enum PostSetupComputeProvider_ComputeApiClass {
  COMPUTE_API_CLASS_UNSPECIFIED = 0,
  /** COMPUTE_API_CLASS_CPU - useful for testing on systems without a cuda or vulkan GPU */
  COMPUTE_API_CLASS_CPU = 1,
  COMPUTE_API_CLASS_CUDA = 2,
  COMPUTE_API_CLASS_VULKAN = 3,
  UNRECOGNIZED = -1,
}

export function postSetupComputeProvider_ComputeApiClassFromJSON(
  object: any,
): PostSetupComputeProvider_ComputeApiClass {
  switch (object) {
    case 0:
    case "COMPUTE_API_CLASS_UNSPECIFIED":
      return PostSetupComputeProvider_ComputeApiClass.COMPUTE_API_CLASS_UNSPECIFIED;
    case 1:
    case "COMPUTE_API_CLASS_CPU":
      return PostSetupComputeProvider_ComputeApiClass.COMPUTE_API_CLASS_CPU;
    case 2:
    case "COMPUTE_API_CLASS_CUDA":
      return PostSetupComputeProvider_ComputeApiClass.COMPUTE_API_CLASS_CUDA;
    case 3:
    case "COMPUTE_API_CLASS_VULKAN":
      return PostSetupComputeProvider_ComputeApiClass.COMPUTE_API_CLASS_VULKAN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostSetupComputeProvider_ComputeApiClass.UNRECOGNIZED;
  }
}

export function postSetupComputeProvider_ComputeApiClassToJSON(
  object: PostSetupComputeProvider_ComputeApiClass,
): string {
  switch (object) {
    case PostSetupComputeProvider_ComputeApiClass.COMPUTE_API_CLASS_UNSPECIFIED:
      return "COMPUTE_API_CLASS_UNSPECIFIED";
    case PostSetupComputeProvider_ComputeApiClass.COMPUTE_API_CLASS_CPU:
      return "COMPUTE_API_CLASS_CPU";
    case PostSetupComputeProvider_ComputeApiClass.COMPUTE_API_CLASS_CUDA:
      return "COMPUTE_API_CLASS_CUDA";
    case PostSetupComputeProvider_ComputeApiClass.COMPUTE_API_CLASS_VULKAN:
      return "COMPUTE_API_CLASS_VULKAN";
    case PostSetupComputeProvider_ComputeApiClass.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Post setup options, used to define the setup requirements. */
export interface PostSetupOpts {
  /** User provided path to create the setup data files at */
  dataDir: string;
  /** Number of Post data units to generate */
  numUnits: number;
  /** Number of files to equally distribute the data among */
  numFiles: number;
  /** A `PostSetupComputeProvider` id */
  computeProviderId: number;
  /** Throttle down setup phase computations while user is interactive on system */
  throttle: boolean;
}

export interface PostSetupStatus {
  state: PostSetupStatus_State;
  /** Number of labels (hashes) written to the data files */
  numLabelsWritten: number;
  /** setup options previously set by the user */
  opts:
    | PostSetupOpts
    | undefined;
  /** The error message, if the state is STATE_ERROR */
  errorMessage: string;
}

export enum PostSetupStatus_State {
  /** STATE_UNSPECIFIED - Lane's favorite impossible value */
  STATE_UNSPECIFIED = 0,
  /** STATE_NOT_STARTED - Setup not started */
  STATE_NOT_STARTED = 1,
  /** STATE_IN_PROGRESS - Setup in progress */
  STATE_IN_PROGRESS = 2,
  /** STATE_COMPLETE - Setup is complete */
  STATE_COMPLETE = 3,
  /** STATE_ERROR - Setup last session ended with an error */
  STATE_ERROR = 4,
  UNRECOGNIZED = -1,
}

export function postSetupStatus_StateFromJSON(object: any): PostSetupStatus_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return PostSetupStatus_State.STATE_UNSPECIFIED;
    case 1:
    case "STATE_NOT_STARTED":
      return PostSetupStatus_State.STATE_NOT_STARTED;
    case 2:
    case "STATE_IN_PROGRESS":
      return PostSetupStatus_State.STATE_IN_PROGRESS;
    case 3:
    case "STATE_COMPLETE":
      return PostSetupStatus_State.STATE_COMPLETE;
    case 4:
    case "STATE_ERROR":
      return PostSetupStatus_State.STATE_ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PostSetupStatus_State.UNRECOGNIZED;
  }
}

export function postSetupStatus_StateToJSON(object: PostSetupStatus_State): string {
  switch (object) {
    case PostSetupStatus_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case PostSetupStatus_State.STATE_NOT_STARTED:
      return "STATE_NOT_STARTED";
    case PostSetupStatus_State.STATE_IN_PROGRESS:
      return "STATE_IN_PROGRESS";
    case PostSetupStatus_State.STATE_COMPLETE:
      return "STATE_COMPLETE";
    case PostSetupStatus_State.STATE_ERROR:
      return "STATE_ERROR";
    case PostSetupStatus_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseIsSmeshingResponse(): IsSmeshingResponse {
  return { isSmeshing: false };
}

export const IsSmeshingResponse = {
  encode(message: IsSmeshingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isSmeshing === true) {
      writer.uint32(8).bool(message.isSmeshing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IsSmeshingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsSmeshingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isSmeshing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IsSmeshingResponse {
    return { isSmeshing: isSet(object.isSmeshing) ? Boolean(object.isSmeshing) : false };
  },

  toJSON(message: IsSmeshingResponse): unknown {
    const obj: any = {};
    message.isSmeshing !== undefined && (obj.isSmeshing = message.isSmeshing);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IsSmeshingResponse>, I>>(object: I): IsSmeshingResponse {
    const message = createBaseIsSmeshingResponse();
    message.isSmeshing = object.isSmeshing ?? false;
    return message;
  },
};

function createBaseStartSmeshingRequest(): StartSmeshingRequest {
  return { coinbase: undefined, opts: undefined };
}

export const StartSmeshingRequest = {
  encode(message: StartSmeshingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coinbase !== undefined) {
      AccountId.encode(message.coinbase, writer.uint32(10).fork()).ldelim();
    }
    if (message.opts !== undefined) {
      PostSetupOpts.encode(message.opts, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartSmeshingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartSmeshingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinbase = AccountId.decode(reader, reader.uint32());
          break;
        case 2:
          message.opts = PostSetupOpts.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartSmeshingRequest {
    return {
      coinbase: isSet(object.coinbase) ? AccountId.fromJSON(object.coinbase) : undefined,
      opts: isSet(object.opts) ? PostSetupOpts.fromJSON(object.opts) : undefined,
    };
  },

  toJSON(message: StartSmeshingRequest): unknown {
    const obj: any = {};
    message.coinbase !== undefined &&
      (obj.coinbase = message.coinbase ? AccountId.toJSON(message.coinbase) : undefined);
    message.opts !== undefined && (obj.opts = message.opts ? PostSetupOpts.toJSON(message.opts) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartSmeshingRequest>, I>>(object: I): StartSmeshingRequest {
    const message = createBaseStartSmeshingRequest();
    message.coinbase = (object.coinbase !== undefined && object.coinbase !== null)
      ? AccountId.fromPartial(object.coinbase)
      : undefined;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PostSetupOpts.fromPartial(object.opts)
      : undefined;
    return message;
  },
};

function createBaseStartSmeshingResponse(): StartSmeshingResponse {
  return { status: undefined };
}

export const StartSmeshingResponse = {
  encode(message: StartSmeshingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartSmeshingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartSmeshingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartSmeshingResponse {
    return { status: isSet(object.status) ? Status.fromJSON(object.status) : undefined };
  },

  toJSON(message: StartSmeshingResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartSmeshingResponse>, I>>(object: I): StartSmeshingResponse {
    const message = createBaseStartSmeshingResponse();
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseStopSmeshingRequest(): StopSmeshingRequest {
  return { deleteFiles: false };
}

export const StopSmeshingRequest = {
  encode(message: StopSmeshingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deleteFiles === true) {
      writer.uint32(8).bool(message.deleteFiles);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopSmeshingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopSmeshingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deleteFiles = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopSmeshingRequest {
    return { deleteFiles: isSet(object.deleteFiles) ? Boolean(object.deleteFiles) : false };
  },

  toJSON(message: StopSmeshingRequest): unknown {
    const obj: any = {};
    message.deleteFiles !== undefined && (obj.deleteFiles = message.deleteFiles);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopSmeshingRequest>, I>>(object: I): StopSmeshingRequest {
    const message = createBaseStopSmeshingRequest();
    message.deleteFiles = object.deleteFiles ?? false;
    return message;
  },
};

function createBaseStopSmeshingResponse(): StopSmeshingResponse {
  return { status: undefined };
}

export const StopSmeshingResponse = {
  encode(message: StopSmeshingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopSmeshingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopSmeshingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopSmeshingResponse {
    return { status: isSet(object.status) ? Status.fromJSON(object.status) : undefined };
  },

  toJSON(message: StopSmeshingResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StopSmeshingResponse>, I>>(object: I): StopSmeshingResponse {
    const message = createBaseStopSmeshingResponse();
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseSetCoinbaseRequest(): SetCoinbaseRequest {
  return { id: undefined };
}

export const SetCoinbaseRequest = {
  encode(message: SetCoinbaseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      AccountId.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCoinbaseRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCoinbaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = AccountId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetCoinbaseRequest {
    return { id: isSet(object.id) ? AccountId.fromJSON(object.id) : undefined };
  },

  toJSON(message: SetCoinbaseRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? AccountId.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetCoinbaseRequest>, I>>(object: I): SetCoinbaseRequest {
    const message = createBaseSetCoinbaseRequest();
    message.id = (object.id !== undefined && object.id !== null) ? AccountId.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseSetCoinbaseResponse(): SetCoinbaseResponse {
  return { status: undefined };
}

export const SetCoinbaseResponse = {
  encode(message: SetCoinbaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetCoinbaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetCoinbaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetCoinbaseResponse {
    return { status: isSet(object.status) ? Status.fromJSON(object.status) : undefined };
  },

  toJSON(message: SetCoinbaseResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetCoinbaseResponse>, I>>(object: I): SetCoinbaseResponse {
    const message = createBaseSetCoinbaseResponse();
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseMinGasResponse(): MinGasResponse {
  return { mingas: undefined };
}

export const MinGasResponse = {
  encode(message: MinGasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mingas !== undefined) {
      SimpleInt.encode(message.mingas, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinGasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinGasResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mingas = SimpleInt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MinGasResponse {
    return { mingas: isSet(object.mingas) ? SimpleInt.fromJSON(object.mingas) : undefined };
  },

  toJSON(message: MinGasResponse): unknown {
    const obj: any = {};
    message.mingas !== undefined && (obj.mingas = message.mingas ? SimpleInt.toJSON(message.mingas) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MinGasResponse>, I>>(object: I): MinGasResponse {
    const message = createBaseMinGasResponse();
    message.mingas = (object.mingas !== undefined && object.mingas !== null)
      ? SimpleInt.fromPartial(object.mingas)
      : undefined;
    return message;
  },
};

function createBaseSetMinGasRequest(): SetMinGasRequest {
  return { mingas: undefined };
}

export const SetMinGasRequest = {
  encode(message: SetMinGasRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mingas !== undefined) {
      SimpleInt.encode(message.mingas, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMinGasRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMinGasRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mingas = SimpleInt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetMinGasRequest {
    return { mingas: isSet(object.mingas) ? SimpleInt.fromJSON(object.mingas) : undefined };
  },

  toJSON(message: SetMinGasRequest): unknown {
    const obj: any = {};
    message.mingas !== undefined && (obj.mingas = message.mingas ? SimpleInt.toJSON(message.mingas) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetMinGasRequest>, I>>(object: I): SetMinGasRequest {
    const message = createBaseSetMinGasRequest();
    message.mingas = (object.mingas !== undefined && object.mingas !== null)
      ? SimpleInt.fromPartial(object.mingas)
      : undefined;
    return message;
  },
};

function createBaseSetMinGasResponse(): SetMinGasResponse {
  return { status: undefined };
}

export const SetMinGasResponse = {
  encode(message: SetMinGasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetMinGasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetMinGasResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetMinGasResponse {
    return { status: isSet(object.status) ? Status.fromJSON(object.status) : undefined };
  },

  toJSON(message: SetMinGasResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetMinGasResponse>, I>>(object: I): SetMinGasResponse {
    const message = createBaseSetMinGasResponse();
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseSmesherIDResponse(): SmesherIDResponse {
  return { accountId: undefined };
}

export const SmesherIDResponse = {
  encode(message: SmesherIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== undefined) {
      AccountId.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SmesherIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmesherIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = AccountId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SmesherIDResponse {
    return { accountId: isSet(object.accountId) ? AccountId.fromJSON(object.accountId) : undefined };
  },

  toJSON(message: SmesherIDResponse): unknown {
    const obj: any = {};
    message.accountId !== undefined &&
      (obj.accountId = message.accountId ? AccountId.toJSON(message.accountId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SmesherIDResponse>, I>>(object: I): SmesherIDResponse {
    const message = createBaseSmesherIDResponse();
    message.accountId = (object.accountId !== undefined && object.accountId !== null)
      ? AccountId.fromPartial(object.accountId)
      : undefined;
    return message;
  },
};

function createBaseCoinbaseResponse(): CoinbaseResponse {
  return { accountId: undefined };
}

export const CoinbaseResponse = {
  encode(message: CoinbaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== undefined) {
      AccountId.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinbaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinbaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = AccountId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CoinbaseResponse {
    return { accountId: isSet(object.accountId) ? AccountId.fromJSON(object.accountId) : undefined };
  },

  toJSON(message: CoinbaseResponse): unknown {
    const obj: any = {};
    message.accountId !== undefined &&
      (obj.accountId = message.accountId ? AccountId.toJSON(message.accountId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CoinbaseResponse>, I>>(object: I): CoinbaseResponse {
    const message = createBaseCoinbaseResponse();
    message.accountId = (object.accountId !== undefined && object.accountId !== null)
      ? AccountId.fromPartial(object.accountId)
      : undefined;
    return message;
  },
};

function createBaseEstimatedRewardsRequest(): EstimatedRewardsRequest {
  return {};
}

export const EstimatedRewardsRequest = {
  encode(_: EstimatedRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimatedRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimatedRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): EstimatedRewardsRequest {
    return {};
  },

  toJSON(_: EstimatedRewardsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimatedRewardsRequest>, I>>(_: I): EstimatedRewardsRequest {
    const message = createBaseEstimatedRewardsRequest();
    return message;
  },
};

function createBaseEstimatedRewardsResponse(): EstimatedRewardsResponse {
  return { amount: undefined, numUnits: 0 };
}

export const EstimatedRewardsResponse = {
  encode(message: EstimatedRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Amount.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.numUnits !== 0) {
      writer.uint32(16).uint32(message.numUnits);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EstimatedRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEstimatedRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Amount.decode(reader, reader.uint32());
          break;
        case 2:
          message.numUnits = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimatedRewardsResponse {
    return {
      amount: isSet(object.amount) ? Amount.fromJSON(object.amount) : undefined,
      numUnits: isSet(object.numUnits) ? Number(object.numUnits) : 0,
    };
  },

  toJSON(message: EstimatedRewardsResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Amount.toJSON(message.amount) : undefined);
    message.numUnits !== undefined && (obj.numUnits = Math.round(message.numUnits));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EstimatedRewardsResponse>, I>>(object: I): EstimatedRewardsResponse {
    const message = createBaseEstimatedRewardsResponse();
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Amount.fromPartial(object.amount)
      : undefined;
    message.numUnits = object.numUnits ?? 0;
    return message;
  },
};

function createBasePostSetupComputeProvidersRequest(): PostSetupComputeProvidersRequest {
  return { benchmark: false };
}

export const PostSetupComputeProvidersRequest = {
  encode(message: PostSetupComputeProvidersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.benchmark === true) {
      writer.uint32(8).bool(message.benchmark);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostSetupComputeProvidersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostSetupComputeProvidersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.benchmark = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostSetupComputeProvidersRequest {
    return { benchmark: isSet(object.benchmark) ? Boolean(object.benchmark) : false };
  },

  toJSON(message: PostSetupComputeProvidersRequest): unknown {
    const obj: any = {};
    message.benchmark !== undefined && (obj.benchmark = message.benchmark);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostSetupComputeProvidersRequest>, I>>(
    object: I,
  ): PostSetupComputeProvidersRequest {
    const message = createBasePostSetupComputeProvidersRequest();
    message.benchmark = object.benchmark ?? false;
    return message;
  },
};

function createBasePostSetupComputeProvidersResponse(): PostSetupComputeProvidersResponse {
  return { providers: [] };
}

export const PostSetupComputeProvidersResponse = {
  encode(message: PostSetupComputeProvidersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      PostSetupComputeProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostSetupComputeProvidersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostSetupComputeProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(PostSetupComputeProvider.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostSetupComputeProvidersResponse {
    return {
      providers: Array.isArray(object?.providers)
        ? object.providers.map((e: any) => PostSetupComputeProvider.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PostSetupComputeProvidersResponse): unknown {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map((e) => e ? PostSetupComputeProvider.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostSetupComputeProvidersResponse>, I>>(
    object: I,
  ): PostSetupComputeProvidersResponse {
    const message = createBasePostSetupComputeProvidersResponse();
    message.providers = object.providers?.map((e) => PostSetupComputeProvider.fromPartial(e)) || [];
    return message;
  },
};

function createBasePostSetupStatusResponse(): PostSetupStatusResponse {
  return { status: undefined };
}

export const PostSetupStatusResponse = {
  encode(message: PostSetupStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      PostSetupStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostSetupStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostSetupStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = PostSetupStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostSetupStatusResponse {
    return { status: isSet(object.status) ? PostSetupStatus.fromJSON(object.status) : undefined };
  },

  toJSON(message: PostSetupStatusResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? PostSetupStatus.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostSetupStatusResponse>, I>>(object: I): PostSetupStatusResponse {
    const message = createBasePostSetupStatusResponse();
    message.status = (object.status !== undefined && object.status !== null)
      ? PostSetupStatus.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBasePostSetupStatusStreamResponse(): PostSetupStatusStreamResponse {
  return { status: undefined };
}

export const PostSetupStatusStreamResponse = {
  encode(message: PostSetupStatusStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      PostSetupStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostSetupStatusStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostSetupStatusStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = PostSetupStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostSetupStatusStreamResponse {
    return { status: isSet(object.status) ? PostSetupStatus.fromJSON(object.status) : undefined };
  },

  toJSON(message: PostSetupStatusStreamResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? PostSetupStatus.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostSetupStatusStreamResponse>, I>>(
    object: I,
  ): PostSetupStatusStreamResponse {
    const message = createBasePostSetupStatusStreamResponse();
    message.status = (object.status !== undefined && object.status !== null)
      ? PostSetupStatus.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBasePostConfigResponse(): PostConfigResponse {
  return { bitsPerLabel: 0, labelsPerUnit: 0, minNumUnits: 0, maxNumUnits: 0 };
}

export const PostConfigResponse = {
  encode(message: PostConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bitsPerLabel !== 0) {
      writer.uint32(8).uint32(message.bitsPerLabel);
    }
    if (message.labelsPerUnit !== 0) {
      writer.uint32(16).uint64(message.labelsPerUnit);
    }
    if (message.minNumUnits !== 0) {
      writer.uint32(24).uint32(message.minNumUnits);
    }
    if (message.maxNumUnits !== 0) {
      writer.uint32(32).uint32(message.maxNumUnits);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitsPerLabel = reader.uint32();
          break;
        case 2:
          message.labelsPerUnit = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.minNumUnits = reader.uint32();
          break;
        case 4:
          message.maxNumUnits = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostConfigResponse {
    return {
      bitsPerLabel: isSet(object.bitsPerLabel) ? Number(object.bitsPerLabel) : 0,
      labelsPerUnit: isSet(object.labelsPerUnit) ? Number(object.labelsPerUnit) : 0,
      minNumUnits: isSet(object.minNumUnits) ? Number(object.minNumUnits) : 0,
      maxNumUnits: isSet(object.maxNumUnits) ? Number(object.maxNumUnits) : 0,
    };
  },

  toJSON(message: PostConfigResponse): unknown {
    const obj: any = {};
    message.bitsPerLabel !== undefined && (obj.bitsPerLabel = Math.round(message.bitsPerLabel));
    message.labelsPerUnit !== undefined && (obj.labelsPerUnit = Math.round(message.labelsPerUnit));
    message.minNumUnits !== undefined && (obj.minNumUnits = Math.round(message.minNumUnits));
    message.maxNumUnits !== undefined && (obj.maxNumUnits = Math.round(message.maxNumUnits));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostConfigResponse>, I>>(object: I): PostConfigResponse {
    const message = createBasePostConfigResponse();
    message.bitsPerLabel = object.bitsPerLabel ?? 0;
    message.labelsPerUnit = object.labelsPerUnit ?? 0;
    message.minNumUnits = object.minNumUnits ?? 0;
    message.maxNumUnits = object.maxNumUnits ?? 0;
    return message;
  },
};

function createBasePostSetupComputeProvider(): PostSetupComputeProvider {
  return { id: 0, model: "", computeApi: 0, performance: 0 };
}

export const PostSetupComputeProvider = {
  encode(message: PostSetupComputeProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.model !== "") {
      writer.uint32(18).string(message.model);
    }
    if (message.computeApi !== 0) {
      writer.uint32(24).int32(message.computeApi);
    }
    if (message.performance !== 0) {
      writer.uint32(32).uint64(message.performance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostSetupComputeProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostSetupComputeProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.model = reader.string();
          break;
        case 3:
          message.computeApi = reader.int32() as any;
          break;
        case 4:
          message.performance = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostSetupComputeProvider {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      model: isSet(object.model) ? String(object.model) : "",
      computeApi: isSet(object.computeApi) ? postSetupComputeProvider_ComputeApiClassFromJSON(object.computeApi) : 0,
      performance: isSet(object.performance) ? Number(object.performance) : 0,
    };
  },

  toJSON(message: PostSetupComputeProvider): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.model !== undefined && (obj.model = message.model);
    message.computeApi !== undefined &&
      (obj.computeApi = postSetupComputeProvider_ComputeApiClassToJSON(message.computeApi));
    message.performance !== undefined && (obj.performance = Math.round(message.performance));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostSetupComputeProvider>, I>>(object: I): PostSetupComputeProvider {
    const message = createBasePostSetupComputeProvider();
    message.id = object.id ?? 0;
    message.model = object.model ?? "";
    message.computeApi = object.computeApi ?? 0;
    message.performance = object.performance ?? 0;
    return message;
  },
};

function createBasePostSetupOpts(): PostSetupOpts {
  return { dataDir: "", numUnits: 0, numFiles: 0, computeProviderId: 0, throttle: false };
}

export const PostSetupOpts = {
  encode(message: PostSetupOpts, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataDir !== "") {
      writer.uint32(10).string(message.dataDir);
    }
    if (message.numUnits !== 0) {
      writer.uint32(16).uint32(message.numUnits);
    }
    if (message.numFiles !== 0) {
      writer.uint32(24).uint32(message.numFiles);
    }
    if (message.computeProviderId !== 0) {
      writer.uint32(32).uint32(message.computeProviderId);
    }
    if (message.throttle === true) {
      writer.uint32(40).bool(message.throttle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostSetupOpts {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostSetupOpts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataDir = reader.string();
          break;
        case 2:
          message.numUnits = reader.uint32();
          break;
        case 3:
          message.numFiles = reader.uint32();
          break;
        case 4:
          message.computeProviderId = reader.uint32();
          break;
        case 5:
          message.throttle = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostSetupOpts {
    return {
      dataDir: isSet(object.dataDir) ? String(object.dataDir) : "",
      numUnits: isSet(object.numUnits) ? Number(object.numUnits) : 0,
      numFiles: isSet(object.numFiles) ? Number(object.numFiles) : 0,
      computeProviderId: isSet(object.computeProviderId) ? Number(object.computeProviderId) : 0,
      throttle: isSet(object.throttle) ? Boolean(object.throttle) : false,
    };
  },

  toJSON(message: PostSetupOpts): unknown {
    const obj: any = {};
    message.dataDir !== undefined && (obj.dataDir = message.dataDir);
    message.numUnits !== undefined && (obj.numUnits = Math.round(message.numUnits));
    message.numFiles !== undefined && (obj.numFiles = Math.round(message.numFiles));
    message.computeProviderId !== undefined && (obj.computeProviderId = Math.round(message.computeProviderId));
    message.throttle !== undefined && (obj.throttle = message.throttle);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostSetupOpts>, I>>(object: I): PostSetupOpts {
    const message = createBasePostSetupOpts();
    message.dataDir = object.dataDir ?? "";
    message.numUnits = object.numUnits ?? 0;
    message.numFiles = object.numFiles ?? 0;
    message.computeProviderId = object.computeProviderId ?? 0;
    message.throttle = object.throttle ?? false;
    return message;
  },
};

function createBasePostSetupStatus(): PostSetupStatus {
  return { state: 0, numLabelsWritten: 0, opts: undefined, errorMessage: "" };
}

export const PostSetupStatus = {
  encode(message: PostSetupStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.numLabelsWritten !== 0) {
      writer.uint32(16).uint64(message.numLabelsWritten);
    }
    if (message.opts !== undefined) {
      PostSetupOpts.encode(message.opts, writer.uint32(26).fork()).ldelim();
    }
    if (message.errorMessage !== "") {
      writer.uint32(34).string(message.errorMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostSetupStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostSetupStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.numLabelsWritten = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.opts = PostSetupOpts.decode(reader, reader.uint32());
          break;
        case 4:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostSetupStatus {
    return {
      state: isSet(object.state) ? postSetupStatus_StateFromJSON(object.state) : 0,
      numLabelsWritten: isSet(object.numLabelsWritten) ? Number(object.numLabelsWritten) : 0,
      opts: isSet(object.opts) ? PostSetupOpts.fromJSON(object.opts) : undefined,
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : "",
    };
  },

  toJSON(message: PostSetupStatus): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = postSetupStatus_StateToJSON(message.state));
    message.numLabelsWritten !== undefined && (obj.numLabelsWritten = Math.round(message.numLabelsWritten));
    message.opts !== undefined && (obj.opts = message.opts ? PostSetupOpts.toJSON(message.opts) : undefined);
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PostSetupStatus>, I>>(object: I): PostSetupStatus {
    const message = createBasePostSetupStatus();
    message.state = object.state ?? 0;
    message.numLabelsWritten = object.numLabelsWritten ?? 0;
    message.opts = (object.opts !== undefined && object.opts !== null)
      ? PostSetupOpts.fromPartial(object.opts)
      : undefined;
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
