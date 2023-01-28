/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AccountId, Activation, Layer, LayerNumber, MeshTransaction, SimpleInt } from "./types";

export const protobufPackage = "spacemesh.v1";

export enum AccountMeshDataFlag {
  ACCOUNT_MESH_DATA_FLAG_UNSPECIFIED = 0,
  ACCOUNT_MESH_DATA_FLAG_TRANSACTIONS = 1,
  ACCOUNT_MESH_DATA_FLAG_ACTIVATIONS = 2,
  UNRECOGNIZED = -1,
}

export function accountMeshDataFlagFromJSON(object: any): AccountMeshDataFlag {
  switch (object) {
    case 0:
    case "ACCOUNT_MESH_DATA_FLAG_UNSPECIFIED":
      return AccountMeshDataFlag.ACCOUNT_MESH_DATA_FLAG_UNSPECIFIED;
    case 1:
    case "ACCOUNT_MESH_DATA_FLAG_TRANSACTIONS":
      return AccountMeshDataFlag.ACCOUNT_MESH_DATA_FLAG_TRANSACTIONS;
    case 2:
    case "ACCOUNT_MESH_DATA_FLAG_ACTIVATIONS":
      return AccountMeshDataFlag.ACCOUNT_MESH_DATA_FLAG_ACTIVATIONS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountMeshDataFlag.UNRECOGNIZED;
  }
}

export function accountMeshDataFlagToJSON(object: AccountMeshDataFlag): string {
  switch (object) {
    case AccountMeshDataFlag.ACCOUNT_MESH_DATA_FLAG_UNSPECIFIED:
      return "ACCOUNT_MESH_DATA_FLAG_UNSPECIFIED";
    case AccountMeshDataFlag.ACCOUNT_MESH_DATA_FLAG_TRANSACTIONS:
      return "ACCOUNT_MESH_DATA_FLAG_TRANSACTIONS";
    case AccountMeshDataFlag.ACCOUNT_MESH_DATA_FLAG_ACTIVATIONS:
      return "ACCOUNT_MESH_DATA_FLAG_ACTIVATIONS";
    case AccountMeshDataFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GenesisTimeRequest {
}

export interface GenesisTimeResponse {
  readonly unixtime: SimpleInt | undefined;
}

export interface CurrentLayerRequest {
}

export interface CurrentLayerResponse {
  readonly layernum: LayerNumber | undefined;
}

export interface CurrentEpochRequest {
}

export interface CurrentEpochResponse {
  readonly epochnum: SimpleInt | undefined;
}

export interface GenesisIDRequest {
}

export interface GenesisIDResponse {
  readonly genesisId: Uint8Array;
}

export interface EpochNumLayersRequest {
}

export interface EpochNumLayersResponse {
  readonly numlayers: SimpleInt | undefined;
}

export interface LayerDurationRequest {
}

export interface LayerDurationResponse {
  /** layer duration, in seconds */
  readonly duration: SimpleInt | undefined;
}

export interface MaxTransactionsPerSecondRequest {
}

export interface MaxTransactionsPerSecondResponse {
  readonly maxTxsPerSecond: SimpleInt | undefined;
}

export interface AccountMeshDataFilter {
  readonly accountId:
    | AccountId
    | undefined;
  /** A bit field of AccountMeshDataFlags */
  readonly accountMeshDataFlags: number;
}

export interface AccountMeshData {
  readonly meshTransaction?: MeshTransaction | undefined;
  readonly activation?: Activation | undefined;
}

export interface AccountMeshDataStreamRequest {
  readonly filter: AccountMeshDataFilter | undefined;
}

export interface AccountMeshDataStreamResponse {
  readonly datum: AccountMeshData | undefined;
}

export interface AccountMeshDataQueryRequest {
  readonly filter:
    | AccountMeshDataFilter
    | undefined;
  /** return data only from this layer or later */
  readonly minLayer:
    | LayerNumber
    | undefined;
  /** max number of results to return */
  readonly maxResults: number;
  /** query offset */
  readonly offset: number;
}

export interface AccountMeshDataQueryResponse {
  readonly data: readonly AccountMeshData[];
  /** total number of availble results */
  readonly totalResults: number;
}

export interface LayersQueryRequest {
  readonly startLayer: LayerNumber | undefined;
  readonly endLayer: LayerNumber | undefined;
}

export interface LayersQueryResponse {
  readonly layer: readonly Layer[];
}

export interface LayerStreamRequest {
}

export interface LayerStreamResponse {
  readonly layer: Layer | undefined;
}

function createBaseGenesisTimeRequest(): GenesisTimeRequest {
  return {};
}

export const GenesisTimeRequest = {
  encode(_: GenesisTimeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisTimeRequest() as any;
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

  fromJSON(_: any): GenesisTimeRequest {
    return {};
  },

  toJSON(_: GenesisTimeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GenesisTimeRequest>): GenesisTimeRequest {
    return GenesisTimeRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GenesisTimeRequest>): GenesisTimeRequest {
    const message = createBaseGenesisTimeRequest() as any;
    return message;
  },
};

function createBaseGenesisTimeResponse(): GenesisTimeResponse {
  return { unixtime: undefined };
}

export const GenesisTimeResponse = {
  encode(message: GenesisTimeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unixtime !== undefined) {
      SimpleInt.encode(message.unixtime, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisTimeResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unixtime = SimpleInt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisTimeResponse {
    return { unixtime: isSet(object.unixtime) ? SimpleInt.fromJSON(object.unixtime) : undefined };
  },

  toJSON(message: GenesisTimeResponse): unknown {
    const obj: any = {};
    message.unixtime !== undefined &&
      (obj.unixtime = message.unixtime ? SimpleInt.toJSON(message.unixtime) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GenesisTimeResponse>): GenesisTimeResponse {
    return GenesisTimeResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisTimeResponse>): GenesisTimeResponse {
    const message = createBaseGenesisTimeResponse() as any;
    message.unixtime = (object.unixtime !== undefined && object.unixtime !== null)
      ? SimpleInt.fromPartial(object.unixtime)
      : undefined;
    return message;
  },
};

function createBaseCurrentLayerRequest(): CurrentLayerRequest {
  return {};
}

export const CurrentLayerRequest = {
  encode(_: CurrentLayerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentLayerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentLayerRequest() as any;
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

  fromJSON(_: any): CurrentLayerRequest {
    return {};
  },

  toJSON(_: CurrentLayerRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CurrentLayerRequest>): CurrentLayerRequest {
    return CurrentLayerRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CurrentLayerRequest>): CurrentLayerRequest {
    const message = createBaseCurrentLayerRequest() as any;
    return message;
  },
};

function createBaseCurrentLayerResponse(): CurrentLayerResponse {
  return { layernum: undefined };
}

export const CurrentLayerResponse = {
  encode(message: CurrentLayerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.layernum !== undefined) {
      LayerNumber.encode(message.layernum, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentLayerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentLayerResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.layernum = LayerNumber.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CurrentLayerResponse {
    return { layernum: isSet(object.layernum) ? LayerNumber.fromJSON(object.layernum) : undefined };
  },

  toJSON(message: CurrentLayerResponse): unknown {
    const obj: any = {};
    message.layernum !== undefined &&
      (obj.layernum = message.layernum ? LayerNumber.toJSON(message.layernum) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CurrentLayerResponse>): CurrentLayerResponse {
    return CurrentLayerResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CurrentLayerResponse>): CurrentLayerResponse {
    const message = createBaseCurrentLayerResponse() as any;
    message.layernum = (object.layernum !== undefined && object.layernum !== null)
      ? LayerNumber.fromPartial(object.layernum)
      : undefined;
    return message;
  },
};

function createBaseCurrentEpochRequest(): CurrentEpochRequest {
  return {};
}

export const CurrentEpochRequest = {
  encode(_: CurrentEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentEpochRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentEpochRequest() as any;
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

  fromJSON(_: any): CurrentEpochRequest {
    return {};
  },

  toJSON(_: CurrentEpochRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<CurrentEpochRequest>): CurrentEpochRequest {
    return CurrentEpochRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<CurrentEpochRequest>): CurrentEpochRequest {
    const message = createBaseCurrentEpochRequest() as any;
    return message;
  },
};

function createBaseCurrentEpochResponse(): CurrentEpochResponse {
  return { epochnum: undefined };
}

export const CurrentEpochResponse = {
  encode(message: CurrentEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochnum !== undefined) {
      SimpleInt.encode(message.epochnum, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentEpochResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentEpochResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochnum = SimpleInt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CurrentEpochResponse {
    return { epochnum: isSet(object.epochnum) ? SimpleInt.fromJSON(object.epochnum) : undefined };
  },

  toJSON(message: CurrentEpochResponse): unknown {
    const obj: any = {};
    message.epochnum !== undefined &&
      (obj.epochnum = message.epochnum ? SimpleInt.toJSON(message.epochnum) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CurrentEpochResponse>): CurrentEpochResponse {
    return CurrentEpochResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CurrentEpochResponse>): CurrentEpochResponse {
    const message = createBaseCurrentEpochResponse() as any;
    message.epochnum = (object.epochnum !== undefined && object.epochnum !== null)
      ? SimpleInt.fromPartial(object.epochnum)
      : undefined;
    return message;
  },
};

function createBaseGenesisIDRequest(): GenesisIDRequest {
  return {};
}

export const GenesisIDRequest = {
  encode(_: GenesisIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisIDRequest() as any;
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

  fromJSON(_: any): GenesisIDRequest {
    return {};
  },

  toJSON(_: GenesisIDRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GenesisIDRequest>): GenesisIDRequest {
    return GenesisIDRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GenesisIDRequest>): GenesisIDRequest {
    const message = createBaseGenesisIDRequest() as any;
    return message;
  },
};

function createBaseGenesisIDResponse(): GenesisIDResponse {
  return { genesisId: new Uint8Array() };
}

export const GenesisIDResponse = {
  encode(message: GenesisIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.genesisId.length !== 0) {
      writer.uint32(10).bytes(message.genesisId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisIDResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesisId = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisIDResponse {
    return { genesisId: isSet(object.genesisId) ? bytesFromBase64(object.genesisId) : new Uint8Array() };
  },

  toJSON(message: GenesisIDResponse): unknown {
    const obj: any = {};
    message.genesisId !== undefined &&
      (obj.genesisId = base64FromBytes(message.genesisId !== undefined ? message.genesisId : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<GenesisIDResponse>): GenesisIDResponse {
    return GenesisIDResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GenesisIDResponse>): GenesisIDResponse {
    const message = createBaseGenesisIDResponse() as any;
    message.genesisId = object.genesisId ?? new Uint8Array();
    return message;
  },
};

function createBaseEpochNumLayersRequest(): EpochNumLayersRequest {
  return {};
}

export const EpochNumLayersRequest = {
  encode(_: EpochNumLayersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochNumLayersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochNumLayersRequest() as any;
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

  fromJSON(_: any): EpochNumLayersRequest {
    return {};
  },

  toJSON(_: EpochNumLayersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<EpochNumLayersRequest>): EpochNumLayersRequest {
    return EpochNumLayersRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<EpochNumLayersRequest>): EpochNumLayersRequest {
    const message = createBaseEpochNumLayersRequest() as any;
    return message;
  },
};

function createBaseEpochNumLayersResponse(): EpochNumLayersResponse {
  return { numlayers: undefined };
}

export const EpochNumLayersResponse = {
  encode(message: EpochNumLayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numlayers !== undefined) {
      SimpleInt.encode(message.numlayers, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochNumLayersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochNumLayersResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numlayers = SimpleInt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochNumLayersResponse {
    return { numlayers: isSet(object.numlayers) ? SimpleInt.fromJSON(object.numlayers) : undefined };
  },

  toJSON(message: EpochNumLayersResponse): unknown {
    const obj: any = {};
    message.numlayers !== undefined &&
      (obj.numlayers = message.numlayers ? SimpleInt.toJSON(message.numlayers) : undefined);
    return obj;
  },

  create(base?: DeepPartial<EpochNumLayersResponse>): EpochNumLayersResponse {
    return EpochNumLayersResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EpochNumLayersResponse>): EpochNumLayersResponse {
    const message = createBaseEpochNumLayersResponse() as any;
    message.numlayers = (object.numlayers !== undefined && object.numlayers !== null)
      ? SimpleInt.fromPartial(object.numlayers)
      : undefined;
    return message;
  },
};

function createBaseLayerDurationRequest(): LayerDurationRequest {
  return {};
}

export const LayerDurationRequest = {
  encode(_: LayerDurationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LayerDurationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayerDurationRequest() as any;
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

  fromJSON(_: any): LayerDurationRequest {
    return {};
  },

  toJSON(_: LayerDurationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<LayerDurationRequest>): LayerDurationRequest {
    return LayerDurationRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<LayerDurationRequest>): LayerDurationRequest {
    const message = createBaseLayerDurationRequest() as any;
    return message;
  },
};

function createBaseLayerDurationResponse(): LayerDurationResponse {
  return { duration: undefined };
}

export const LayerDurationResponse = {
  encode(message: LayerDurationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== undefined) {
      SimpleInt.encode(message.duration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LayerDurationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayerDurationResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = SimpleInt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LayerDurationResponse {
    return { duration: isSet(object.duration) ? SimpleInt.fromJSON(object.duration) : undefined };
  },

  toJSON(message: LayerDurationResponse): unknown {
    const obj: any = {};
    message.duration !== undefined &&
      (obj.duration = message.duration ? SimpleInt.toJSON(message.duration) : undefined);
    return obj;
  },

  create(base?: DeepPartial<LayerDurationResponse>): LayerDurationResponse {
    return LayerDurationResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LayerDurationResponse>): LayerDurationResponse {
    const message = createBaseLayerDurationResponse() as any;
    message.duration = (object.duration !== undefined && object.duration !== null)
      ? SimpleInt.fromPartial(object.duration)
      : undefined;
    return message;
  },
};

function createBaseMaxTransactionsPerSecondRequest(): MaxTransactionsPerSecondRequest {
  return {};
}

export const MaxTransactionsPerSecondRequest = {
  encode(_: MaxTransactionsPerSecondRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaxTransactionsPerSecondRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxTransactionsPerSecondRequest() as any;
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

  fromJSON(_: any): MaxTransactionsPerSecondRequest {
    return {};
  },

  toJSON(_: MaxTransactionsPerSecondRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<MaxTransactionsPerSecondRequest>): MaxTransactionsPerSecondRequest {
    return MaxTransactionsPerSecondRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<MaxTransactionsPerSecondRequest>): MaxTransactionsPerSecondRequest {
    const message = createBaseMaxTransactionsPerSecondRequest() as any;
    return message;
  },
};

function createBaseMaxTransactionsPerSecondResponse(): MaxTransactionsPerSecondResponse {
  return { maxTxsPerSecond: undefined };
}

export const MaxTransactionsPerSecondResponse = {
  encode(message: MaxTransactionsPerSecondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxTxsPerSecond !== undefined) {
      SimpleInt.encode(message.maxTxsPerSecond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaxTransactionsPerSecondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaxTransactionsPerSecondResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxTxsPerSecond = SimpleInt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MaxTransactionsPerSecondResponse {
    return { maxTxsPerSecond: isSet(object.maxTxsPerSecond) ? SimpleInt.fromJSON(object.maxTxsPerSecond) : undefined };
  },

  toJSON(message: MaxTransactionsPerSecondResponse): unknown {
    const obj: any = {};
    message.maxTxsPerSecond !== undefined &&
      (obj.maxTxsPerSecond = message.maxTxsPerSecond ? SimpleInt.toJSON(message.maxTxsPerSecond) : undefined);
    return obj;
  },

  create(base?: DeepPartial<MaxTransactionsPerSecondResponse>): MaxTransactionsPerSecondResponse {
    return MaxTransactionsPerSecondResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<MaxTransactionsPerSecondResponse>): MaxTransactionsPerSecondResponse {
    const message = createBaseMaxTransactionsPerSecondResponse() as any;
    message.maxTxsPerSecond = (object.maxTxsPerSecond !== undefined && object.maxTxsPerSecond !== null)
      ? SimpleInt.fromPartial(object.maxTxsPerSecond)
      : undefined;
    return message;
  },
};

function createBaseAccountMeshDataFilter(): AccountMeshDataFilter {
  return { accountId: undefined, accountMeshDataFlags: 0 };
}

export const AccountMeshDataFilter = {
  encode(message: AccountMeshDataFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== undefined) {
      AccountId.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountMeshDataFlags !== 0) {
      writer.uint32(16).uint32(message.accountMeshDataFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountMeshDataFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountMeshDataFilter() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = AccountId.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountMeshDataFlags = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountMeshDataFilter {
    return {
      accountId: isSet(object.accountId) ? AccountId.fromJSON(object.accountId) : undefined,
      accountMeshDataFlags: isSet(object.accountMeshDataFlags) ? Number(object.accountMeshDataFlags) : 0,
    };
  },

  toJSON(message: AccountMeshDataFilter): unknown {
    const obj: any = {};
    message.accountId !== undefined &&
      (obj.accountId = message.accountId ? AccountId.toJSON(message.accountId) : undefined);
    message.accountMeshDataFlags !== undefined && (obj.accountMeshDataFlags = Math.round(message.accountMeshDataFlags));
    return obj;
  },

  create(base?: DeepPartial<AccountMeshDataFilter>): AccountMeshDataFilter {
    return AccountMeshDataFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountMeshDataFilter>): AccountMeshDataFilter {
    const message = createBaseAccountMeshDataFilter() as any;
    message.accountId = (object.accountId !== undefined && object.accountId !== null)
      ? AccountId.fromPartial(object.accountId)
      : undefined;
    message.accountMeshDataFlags = object.accountMeshDataFlags ?? 0;
    return message;
  },
};

function createBaseAccountMeshData(): AccountMeshData {
  return { meshTransaction: undefined, activation: undefined };
}

export const AccountMeshData = {
  encode(message: AccountMeshData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.meshTransaction !== undefined) {
      MeshTransaction.encode(message.meshTransaction, writer.uint32(10).fork()).ldelim();
    }
    if (message.activation !== undefined) {
      Activation.encode(message.activation, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountMeshData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountMeshData() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meshTransaction = MeshTransaction.decode(reader, reader.uint32());
          break;
        case 2:
          message.activation = Activation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountMeshData {
    return {
      meshTransaction: isSet(object.meshTransaction) ? MeshTransaction.fromJSON(object.meshTransaction) : undefined,
      activation: isSet(object.activation) ? Activation.fromJSON(object.activation) : undefined,
    };
  },

  toJSON(message: AccountMeshData): unknown {
    const obj: any = {};
    message.meshTransaction !== undefined &&
      (obj.meshTransaction = message.meshTransaction ? MeshTransaction.toJSON(message.meshTransaction) : undefined);
    message.activation !== undefined &&
      (obj.activation = message.activation ? Activation.toJSON(message.activation) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AccountMeshData>): AccountMeshData {
    return AccountMeshData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountMeshData>): AccountMeshData {
    const message = createBaseAccountMeshData() as any;
    message.meshTransaction = (object.meshTransaction !== undefined && object.meshTransaction !== null)
      ? MeshTransaction.fromPartial(object.meshTransaction)
      : undefined;
    message.activation = (object.activation !== undefined && object.activation !== null)
      ? Activation.fromPartial(object.activation)
      : undefined;
    return message;
  },
};

function createBaseAccountMeshDataStreamRequest(): AccountMeshDataStreamRequest {
  return { filter: undefined };
}

export const AccountMeshDataStreamRequest = {
  encode(message: AccountMeshDataStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      AccountMeshDataFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountMeshDataStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountMeshDataStreamRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = AccountMeshDataFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountMeshDataStreamRequest {
    return { filter: isSet(object.filter) ? AccountMeshDataFilter.fromJSON(object.filter) : undefined };
  },

  toJSON(message: AccountMeshDataStreamRequest): unknown {
    const obj: any = {};
    message.filter !== undefined &&
      (obj.filter = message.filter ? AccountMeshDataFilter.toJSON(message.filter) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AccountMeshDataStreamRequest>): AccountMeshDataStreamRequest {
    return AccountMeshDataStreamRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountMeshDataStreamRequest>): AccountMeshDataStreamRequest {
    const message = createBaseAccountMeshDataStreamRequest() as any;
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? AccountMeshDataFilter.fromPartial(object.filter)
      : undefined;
    return message;
  },
};

function createBaseAccountMeshDataStreamResponse(): AccountMeshDataStreamResponse {
  return { datum: undefined };
}

export const AccountMeshDataStreamResponse = {
  encode(message: AccountMeshDataStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.datum !== undefined) {
      AccountMeshData.encode(message.datum, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountMeshDataStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountMeshDataStreamResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.datum = AccountMeshData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountMeshDataStreamResponse {
    return { datum: isSet(object.datum) ? AccountMeshData.fromJSON(object.datum) : undefined };
  },

  toJSON(message: AccountMeshDataStreamResponse): unknown {
    const obj: any = {};
    message.datum !== undefined && (obj.datum = message.datum ? AccountMeshData.toJSON(message.datum) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AccountMeshDataStreamResponse>): AccountMeshDataStreamResponse {
    return AccountMeshDataStreamResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountMeshDataStreamResponse>): AccountMeshDataStreamResponse {
    const message = createBaseAccountMeshDataStreamResponse() as any;
    message.datum = (object.datum !== undefined && object.datum !== null)
      ? AccountMeshData.fromPartial(object.datum)
      : undefined;
    return message;
  },
};

function createBaseAccountMeshDataQueryRequest(): AccountMeshDataQueryRequest {
  return { filter: undefined, minLayer: undefined, maxResults: 0, offset: 0 };
}

export const AccountMeshDataQueryRequest = {
  encode(message: AccountMeshDataQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      AccountMeshDataFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.minLayer !== undefined) {
      LayerNumber.encode(message.minLayer, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxResults !== 0) {
      writer.uint32(24).uint32(message.maxResults);
    }
    if (message.offset !== 0) {
      writer.uint32(32).uint32(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountMeshDataQueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountMeshDataQueryRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = AccountMeshDataFilter.decode(reader, reader.uint32());
          break;
        case 2:
          message.minLayer = LayerNumber.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxResults = reader.uint32();
          break;
        case 4:
          message.offset = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountMeshDataQueryRequest {
    return {
      filter: isSet(object.filter) ? AccountMeshDataFilter.fromJSON(object.filter) : undefined,
      minLayer: isSet(object.minLayer) ? LayerNumber.fromJSON(object.minLayer) : undefined,
      maxResults: isSet(object.maxResults) ? Number(object.maxResults) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: AccountMeshDataQueryRequest): unknown {
    const obj: any = {};
    message.filter !== undefined &&
      (obj.filter = message.filter ? AccountMeshDataFilter.toJSON(message.filter) : undefined);
    message.minLayer !== undefined &&
      (obj.minLayer = message.minLayer ? LayerNumber.toJSON(message.minLayer) : undefined);
    message.maxResults !== undefined && (obj.maxResults = Math.round(message.maxResults));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    return obj;
  },

  create(base?: DeepPartial<AccountMeshDataQueryRequest>): AccountMeshDataQueryRequest {
    return AccountMeshDataQueryRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountMeshDataQueryRequest>): AccountMeshDataQueryRequest {
    const message = createBaseAccountMeshDataQueryRequest() as any;
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? AccountMeshDataFilter.fromPartial(object.filter)
      : undefined;
    message.minLayer = (object.minLayer !== undefined && object.minLayer !== null)
      ? LayerNumber.fromPartial(object.minLayer)
      : undefined;
    message.maxResults = object.maxResults ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseAccountMeshDataQueryResponse(): AccountMeshDataQueryResponse {
  return { data: [], totalResults: 0 };
}

export const AccountMeshDataQueryResponse = {
  encode(message: AccountMeshDataQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      AccountMeshData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalResults !== 0) {
      writer.uint32(16).uint32(message.totalResults);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountMeshDataQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountMeshDataQueryResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(AccountMeshData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.totalResults = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountMeshDataQueryResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => AccountMeshData.fromJSON(e)) : [],
      totalResults: isSet(object.totalResults) ? Number(object.totalResults) : 0,
    };
  },

  toJSON(message: AccountMeshDataQueryResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => e ? AccountMeshData.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    message.totalResults !== undefined && (obj.totalResults = Math.round(message.totalResults));
    return obj;
  },

  create(base?: DeepPartial<AccountMeshDataQueryResponse>): AccountMeshDataQueryResponse {
    return AccountMeshDataQueryResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountMeshDataQueryResponse>): AccountMeshDataQueryResponse {
    const message = createBaseAccountMeshDataQueryResponse() as any;
    message.data = object.data?.map((e) => AccountMeshData.fromPartial(e)) || [];
    message.totalResults = object.totalResults ?? 0;
    return message;
  },
};

function createBaseLayersQueryRequest(): LayersQueryRequest {
  return { startLayer: undefined, endLayer: undefined };
}

export const LayersQueryRequest = {
  encode(message: LayersQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startLayer !== undefined) {
      LayerNumber.encode(message.startLayer, writer.uint32(10).fork()).ldelim();
    }
    if (message.endLayer !== undefined) {
      LayerNumber.encode(message.endLayer, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LayersQueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayersQueryRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startLayer = LayerNumber.decode(reader, reader.uint32());
          break;
        case 2:
          message.endLayer = LayerNumber.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LayersQueryRequest {
    return {
      startLayer: isSet(object.startLayer) ? LayerNumber.fromJSON(object.startLayer) : undefined,
      endLayer: isSet(object.endLayer) ? LayerNumber.fromJSON(object.endLayer) : undefined,
    };
  },

  toJSON(message: LayersQueryRequest): unknown {
    const obj: any = {};
    message.startLayer !== undefined &&
      (obj.startLayer = message.startLayer ? LayerNumber.toJSON(message.startLayer) : undefined);
    message.endLayer !== undefined &&
      (obj.endLayer = message.endLayer ? LayerNumber.toJSON(message.endLayer) : undefined);
    return obj;
  },

  create(base?: DeepPartial<LayersQueryRequest>): LayersQueryRequest {
    return LayersQueryRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LayersQueryRequest>): LayersQueryRequest {
    const message = createBaseLayersQueryRequest() as any;
    message.startLayer = (object.startLayer !== undefined && object.startLayer !== null)
      ? LayerNumber.fromPartial(object.startLayer)
      : undefined;
    message.endLayer = (object.endLayer !== undefined && object.endLayer !== null)
      ? LayerNumber.fromPartial(object.endLayer)
      : undefined;
    return message;
  },
};

function createBaseLayersQueryResponse(): LayersQueryResponse {
  return { layer: [] };
}

export const LayersQueryResponse = {
  encode(message: LayersQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.layer) {
      Layer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LayersQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayersQueryResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.layer.push(Layer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LayersQueryResponse {
    return { layer: Array.isArray(object?.layer) ? object.layer.map((e: any) => Layer.fromJSON(e)) : [] };
  },

  toJSON(message: LayersQueryResponse): unknown {
    const obj: any = {};
    if (message.layer) {
      obj.layer = message.layer.map((e) => e ? Layer.toJSON(e) : undefined);
    } else {
      obj.layer = [];
    }
    return obj;
  },

  create(base?: DeepPartial<LayersQueryResponse>): LayersQueryResponse {
    return LayersQueryResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LayersQueryResponse>): LayersQueryResponse {
    const message = createBaseLayersQueryResponse() as any;
    message.layer = object.layer?.map((e) => Layer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLayerStreamRequest(): LayerStreamRequest {
  return {};
}

export const LayerStreamRequest = {
  encode(_: LayerStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LayerStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayerStreamRequest() as any;
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

  fromJSON(_: any): LayerStreamRequest {
    return {};
  },

  toJSON(_: LayerStreamRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<LayerStreamRequest>): LayerStreamRequest {
    return LayerStreamRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<LayerStreamRequest>): LayerStreamRequest {
    const message = createBaseLayerStreamRequest() as any;
    return message;
  },
};

function createBaseLayerStreamResponse(): LayerStreamResponse {
  return { layer: undefined };
}

export const LayerStreamResponse = {
  encode(message: LayerStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.layer !== undefined) {
      Layer.encode(message.layer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LayerStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayerStreamResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.layer = Layer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LayerStreamResponse {
    return { layer: isSet(object.layer) ? Layer.fromJSON(object.layer) : undefined };
  },

  toJSON(message: LayerStreamResponse): unknown {
    const obj: any = {};
    message.layer !== undefined && (obj.layer = message.layer ? Layer.toJSON(message.layer) : undefined);
    return obj;
  },

  create(base?: DeepPartial<LayerStreamResponse>): LayerStreamResponse {
    return LayerStreamResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<LayerStreamResponse>): LayerStreamResponse {
    const message = createBaseLayerStreamResponse() as any;
    message.layer = (object.layer !== undefined && object.layer !== null) ? Layer.fromPartial(object.layer) : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
