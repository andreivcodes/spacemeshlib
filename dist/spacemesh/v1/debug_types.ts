/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Account } from "./global_state_types";
import { LayerNumber, SimpleInt, SmesherId } from "./types";

export const protobufPackage = "spacemesh.v1";

export interface AccountsResponse {
  accountWrapper: Account[];
}

export interface NetworkInfoResponse {
  id: string;
}

export interface EpochData {
  beacon: Uint8Array;
}

export interface Eligibility {
  j: number;
  signature: Uint8Array;
}

export interface Proposal {
  id: Uint8Array;
  epoch: SimpleInt | undefined;
  layer: LayerNumber | undefined;
  smesher: SmesherId | undefined;
  reference: Uint8Array | undefined;
  data: EpochData | undefined;
  ballot: Uint8Array;
  eligibilities: Eligibility[];
  status: Proposal_Status;
}

export enum Proposal_Status {
  Created = 0,
  Included = 1,
  UNRECOGNIZED = -1,
}

export function proposal_StatusFromJSON(object: any): Proposal_Status {
  switch (object) {
    case 0:
    case "Created":
      return Proposal_Status.Created;
    case 1:
    case "Included":
      return Proposal_Status.Included;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Proposal_Status.UNRECOGNIZED;
  }
}

export function proposal_StatusToJSON(object: Proposal_Status): string {
  switch (object) {
    case Proposal_Status.Created:
      return "Created";
    case Proposal_Status.Included:
      return "Included";
    case Proposal_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseAccountsResponse(): AccountsResponse {
  return { accountWrapper: [] };
}

export const AccountsResponse = {
  encode(message: AccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountWrapper) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountWrapper.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountsResponse {
    return {
      accountWrapper: Array.isArray(object?.accountWrapper)
        ? object.accountWrapper.map((e: any) => Account.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountsResponse): unknown {
    const obj: any = {};
    if (message.accountWrapper) {
      obj.accountWrapper = message.accountWrapper.map((e) => e ? Account.toJSON(e) : undefined);
    } else {
      obj.accountWrapper = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountsResponse>, I>>(object: I): AccountsResponse {
    const message = createBaseAccountsResponse();
    message.accountWrapper = object.accountWrapper?.map((e) => Account.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNetworkInfoResponse(): NetworkInfoResponse {
  return { id: "" };
}

export const NetworkInfoResponse = {
  encode(message: NetworkInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NetworkInfoResponse {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: NetworkInfoResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NetworkInfoResponse>, I>>(object: I): NetworkInfoResponse {
    const message = createBaseNetworkInfoResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseEpochData(): EpochData {
  return { beacon: new Uint8Array() };
}

export const EpochData = {
  encode(message: EpochData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beacon.length !== 0) {
      writer.uint32(10).bytes(message.beacon);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beacon = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EpochData {
    return { beacon: isSet(object.beacon) ? bytesFromBase64(object.beacon) : new Uint8Array() };
  },

  toJSON(message: EpochData): unknown {
    const obj: any = {};
    message.beacon !== undefined &&
      (obj.beacon = base64FromBytes(message.beacon !== undefined ? message.beacon : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EpochData>, I>>(object: I): EpochData {
    const message = createBaseEpochData();
    message.beacon = object.beacon ?? new Uint8Array();
    return message;
  },
};

function createBaseEligibility(): Eligibility {
  return { j: 0, signature: new Uint8Array() };
}

export const Eligibility = {
  encode(message: Eligibility, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.j !== 0) {
      writer.uint32(8).uint32(message.j);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Eligibility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEligibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.j = reader.uint32();
          break;
        case 2:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Eligibility {
    return {
      j: isSet(object.j) ? Number(object.j) : 0,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
    };
  },

  toJSON(message: Eligibility): unknown {
    const obj: any = {};
    message.j !== undefined && (obj.j = Math.round(message.j));
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Eligibility>, I>>(object: I): Eligibility {
    const message = createBaseEligibility();
    message.j = object.j ?? 0;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseProposal(): Proposal {
  return {
    id: new Uint8Array(),
    epoch: undefined,
    layer: undefined,
    smesher: undefined,
    reference: undefined,
    data: undefined,
    ballot: new Uint8Array(),
    eligibilities: [],
    status: 0,
  };
}

export const Proposal = {
  encode(message: Proposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.epoch !== undefined) {
      SimpleInt.encode(message.epoch, writer.uint32(18).fork()).ldelim();
    }
    if (message.layer !== undefined) {
      LayerNumber.encode(message.layer, writer.uint32(26).fork()).ldelim();
    }
    if (message.smesher !== undefined) {
      SmesherId.encode(message.smesher, writer.uint32(34).fork()).ldelim();
    }
    if (message.reference !== undefined) {
      writer.uint32(42).bytes(message.reference);
    }
    if (message.data !== undefined) {
      EpochData.encode(message.data, writer.uint32(50).fork()).ldelim();
    }
    if (message.ballot.length !== 0) {
      writer.uint32(58).bytes(message.ballot);
    }
    for (const v of message.eligibilities) {
      Eligibility.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(72).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.epoch = SimpleInt.decode(reader, reader.uint32());
          break;
        case 3:
          message.layer = LayerNumber.decode(reader, reader.uint32());
          break;
        case 4:
          message.smesher = SmesherId.decode(reader, reader.uint32());
          break;
        case 5:
          message.reference = reader.bytes();
          break;
        case 6:
          message.data = EpochData.decode(reader, reader.uint32());
          break;
        case 7:
          message.ballot = reader.bytes();
          break;
        case 8:
          message.eligibilities.push(Eligibility.decode(reader, reader.uint32()));
          break;
        case 9:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      epoch: isSet(object.epoch) ? SimpleInt.fromJSON(object.epoch) : undefined,
      layer: isSet(object.layer) ? LayerNumber.fromJSON(object.layer) : undefined,
      smesher: isSet(object.smesher) ? SmesherId.fromJSON(object.smesher) : undefined,
      reference: isSet(object.reference) ? bytesFromBase64(object.reference) : undefined,
      data: isSet(object.data) ? EpochData.fromJSON(object.data) : undefined,
      ballot: isSet(object.ballot) ? bytesFromBase64(object.ballot) : new Uint8Array(),
      eligibilities: Array.isArray(object?.eligibilities)
        ? object.eligibilities.map((e: any) => Eligibility.fromJSON(e))
        : [],
      status: isSet(object.status) ? proposal_StatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    message.epoch !== undefined && (obj.epoch = message.epoch ? SimpleInt.toJSON(message.epoch) : undefined);
    message.layer !== undefined && (obj.layer = message.layer ? LayerNumber.toJSON(message.layer) : undefined);
    message.smesher !== undefined && (obj.smesher = message.smesher ? SmesherId.toJSON(message.smesher) : undefined);
    message.reference !== undefined &&
      (obj.reference = message.reference !== undefined ? base64FromBytes(message.reference) : undefined);
    message.data !== undefined && (obj.data = message.data ? EpochData.toJSON(message.data) : undefined);
    message.ballot !== undefined &&
      (obj.ballot = base64FromBytes(message.ballot !== undefined ? message.ballot : new Uint8Array()));
    if (message.eligibilities) {
      obj.eligibilities = message.eligibilities.map((e) => e ? Eligibility.toJSON(e) : undefined);
    } else {
      obj.eligibilities = [];
    }
    message.status !== undefined && (obj.status = proposal_StatusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = createBaseProposal();
    message.id = object.id ?? new Uint8Array();
    message.epoch = (object.epoch !== undefined && object.epoch !== null)
      ? SimpleInt.fromPartial(object.epoch)
      : undefined;
    message.layer = (object.layer !== undefined && object.layer !== null)
      ? LayerNumber.fromPartial(object.layer)
      : undefined;
    message.smesher = (object.smesher !== undefined && object.smesher !== null)
      ? SmesherId.fromPartial(object.smesher)
      : undefined;
    message.reference = object.reference ?? undefined;
    message.data = (object.data !== undefined && object.data !== null) ? EpochData.fromPartial(object.data) : undefined;
    message.ballot = object.ballot ?? new Uint8Array();
    message.eligibilities = object.eligibilities?.map((e) => Eligibility.fromPartial(e)) || [];
    message.status = object.status ?? 0;
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
