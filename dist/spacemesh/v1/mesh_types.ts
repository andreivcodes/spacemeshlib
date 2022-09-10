/* eslint-disable */
import Long from "long";
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
  unixtime: SimpleInt | undefined;
}

export interface CurrentLayerRequest {
}

export interface CurrentLayerResponse {
  layernum: LayerNumber | undefined;
}

export interface CurrentEpochRequest {
}

export interface CurrentEpochResponse {
  epochnum: SimpleInt | undefined;
}

export interface NetIDRequest {
}

export interface NetIDResponse {
  netid: SimpleInt | undefined;
}

export interface EpochNumLayersRequest {
}

export interface EpochNumLayersResponse {
  numlayers: SimpleInt | undefined;
}

export interface LayerDurationRequest {
}

export interface LayerDurationResponse {
  /** layer duration, in seconds */
  duration: SimpleInt | undefined;
}

export interface MaxTransactionsPerSecondRequest {
}

export interface MaxTransactionsPerSecondResponse {
  maxTxsPerSecond: SimpleInt | undefined;
}

export interface AccountMeshDataFilter {
  accountId:
    | AccountId
    | undefined;
  /** A bit field of AccountMeshDataFlags */
  accountMeshDataFlags: number;
}

export interface AccountMeshData {
  meshTransaction: MeshTransaction | undefined;
  activation: Activation | undefined;
}

export interface AccountMeshDataStreamRequest {
  filter: AccountMeshDataFilter | undefined;
}

export interface AccountMeshDataStreamResponse {
  datum: AccountMeshData | undefined;
}

export interface AccountMeshDataQueryRequest {
  filter:
    | AccountMeshDataFilter
    | undefined;
  /** return data only from this layer or later */
  minLayer:
    | LayerNumber
    | undefined;
  /** max number of results to return */
  maxResults: number;
  /** query offset */
  offset: number;
}

export interface AccountMeshDataQueryResponse {
  data: AccountMeshData[];
  /** total number of availble results */
  totalResults: number;
}

export interface LayersQueryRequest {
  startLayer: LayerNumber | undefined;
  endLayer: LayerNumber | undefined;
}

export interface LayersQueryResponse {
  layer: Layer[];
}

export interface LayerStreamRequest {
}

export interface LayerStreamResponse {
  layer: Layer | undefined;
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
    const message = createBaseGenesisTimeRequest();
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

  fromPartial<I extends Exact<DeepPartial<GenesisTimeRequest>, I>>(_: I): GenesisTimeRequest {
    const message = createBaseGenesisTimeRequest();
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
    const message = createBaseGenesisTimeResponse();
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

  fromPartial<I extends Exact<DeepPartial<GenesisTimeResponse>, I>>(object: I): GenesisTimeResponse {
    const message = createBaseGenesisTimeResponse();
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
    const message = createBaseCurrentLayerRequest();
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

  fromPartial<I extends Exact<DeepPartial<CurrentLayerRequest>, I>>(_: I): CurrentLayerRequest {
    const message = createBaseCurrentLayerRequest();
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
    const message = createBaseCurrentLayerResponse();
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

  fromPartial<I extends Exact<DeepPartial<CurrentLayerResponse>, I>>(object: I): CurrentLayerResponse {
    const message = createBaseCurrentLayerResponse();
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
    const message = createBaseCurrentEpochRequest();
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

  fromPartial<I extends Exact<DeepPartial<CurrentEpochRequest>, I>>(_: I): CurrentEpochRequest {
    const message = createBaseCurrentEpochRequest();
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
    const message = createBaseCurrentEpochResponse();
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

  fromPartial<I extends Exact<DeepPartial<CurrentEpochResponse>, I>>(object: I): CurrentEpochResponse {
    const message = createBaseCurrentEpochResponse();
    message.epochnum = (object.epochnum !== undefined && object.epochnum !== null)
      ? SimpleInt.fromPartial(object.epochnum)
      : undefined;
    return message;
  },
};

function createBaseNetIDRequest(): NetIDRequest {
  return {};
}

export const NetIDRequest = {
  encode(_: NetIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetIDRequest();
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

  fromJSON(_: any): NetIDRequest {
    return {};
  },

  toJSON(_: NetIDRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetIDRequest>, I>>(_: I): NetIDRequest {
    const message = createBaseNetIDRequest();
    return message;
  },
};

function createBaseNetIDResponse(): NetIDResponse {
  return { netid: undefined };
}

export const NetIDResponse = {
  encode(message: NetIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.netid !== undefined) {
      SimpleInt.encode(message.netid, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.netid = SimpleInt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetIDResponse {
    return { netid: isSet(object.netid) ? SimpleInt.fromJSON(object.netid) : undefined };
  },

  toJSON(message: NetIDResponse): unknown {
    const obj: any = {};
    message.netid !== undefined && (obj.netid = message.netid ? SimpleInt.toJSON(message.netid) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetIDResponse>, I>>(object: I): NetIDResponse {
    const message = createBaseNetIDResponse();
    message.netid = (object.netid !== undefined && object.netid !== null)
      ? SimpleInt.fromPartial(object.netid)
      : undefined;
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
    const message = createBaseEpochNumLayersRequest();
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

  fromPartial<I extends Exact<DeepPartial<EpochNumLayersRequest>, I>>(_: I): EpochNumLayersRequest {
    const message = createBaseEpochNumLayersRequest();
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
    const message = createBaseEpochNumLayersResponse();
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

  fromPartial<I extends Exact<DeepPartial<EpochNumLayersResponse>, I>>(object: I): EpochNumLayersResponse {
    const message = createBaseEpochNumLayersResponse();
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
    const message = createBaseLayerDurationRequest();
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

  fromPartial<I extends Exact<DeepPartial<LayerDurationRequest>, I>>(_: I): LayerDurationRequest {
    const message = createBaseLayerDurationRequest();
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
    const message = createBaseLayerDurationResponse();
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

  fromPartial<I extends Exact<DeepPartial<LayerDurationResponse>, I>>(object: I): LayerDurationResponse {
    const message = createBaseLayerDurationResponse();
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
    const message = createBaseMaxTransactionsPerSecondRequest();
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

  fromPartial<I extends Exact<DeepPartial<MaxTransactionsPerSecondRequest>, I>>(_: I): MaxTransactionsPerSecondRequest {
    const message = createBaseMaxTransactionsPerSecondRequest();
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
    const message = createBaseMaxTransactionsPerSecondResponse();
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

  fromPartial<I extends Exact<DeepPartial<MaxTransactionsPerSecondResponse>, I>>(
    object: I,
  ): MaxTransactionsPerSecondResponse {
    const message = createBaseMaxTransactionsPerSecondResponse();
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
    const message = createBaseAccountMeshDataFilter();
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

  fromPartial<I extends Exact<DeepPartial<AccountMeshDataFilter>, I>>(object: I): AccountMeshDataFilter {
    const message = createBaseAccountMeshDataFilter();
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
    const message = createBaseAccountMeshData();
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

  fromPartial<I extends Exact<DeepPartial<AccountMeshData>, I>>(object: I): AccountMeshData {
    const message = createBaseAccountMeshData();
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
    const message = createBaseAccountMeshDataStreamRequest();
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

  fromPartial<I extends Exact<DeepPartial<AccountMeshDataStreamRequest>, I>>(object: I): AccountMeshDataStreamRequest {
    const message = createBaseAccountMeshDataStreamRequest();
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
    const message = createBaseAccountMeshDataStreamResponse();
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

  fromPartial<I extends Exact<DeepPartial<AccountMeshDataStreamResponse>, I>>(
    object: I,
  ): AccountMeshDataStreamResponse {
    const message = createBaseAccountMeshDataStreamResponse();
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
    const message = createBaseAccountMeshDataQueryRequest();
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

  fromPartial<I extends Exact<DeepPartial<AccountMeshDataQueryRequest>, I>>(object: I): AccountMeshDataQueryRequest {
    const message = createBaseAccountMeshDataQueryRequest();
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
    const message = createBaseAccountMeshDataQueryResponse();
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

  fromPartial<I extends Exact<DeepPartial<AccountMeshDataQueryResponse>, I>>(object: I): AccountMeshDataQueryResponse {
    const message = createBaseAccountMeshDataQueryResponse();
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
    const message = createBaseLayersQueryRequest();
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

  fromPartial<I extends Exact<DeepPartial<LayersQueryRequest>, I>>(object: I): LayersQueryRequest {
    const message = createBaseLayersQueryRequest();
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
    const message = createBaseLayersQueryResponse();
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

  fromPartial<I extends Exact<DeepPartial<LayersQueryResponse>, I>>(object: I): LayersQueryResponse {
    const message = createBaseLayersQueryResponse();
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
    const message = createBaseLayerStreamRequest();
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

  fromPartial<I extends Exact<DeepPartial<LayerStreamRequest>, I>>(_: I): LayerStreamRequest {
    const message = createBaseLayerStreamRequest();
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
    const message = createBaseLayerStreamResponse();
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

  fromPartial<I extends Exact<DeepPartial<LayerStreamResponse>, I>>(object: I): LayerStreamResponse {
    const message = createBaseLayerStreamResponse();
    message.layer = (object.layer !== undefined && object.layer !== null) ? Layer.fromPartial(object.layer) : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
