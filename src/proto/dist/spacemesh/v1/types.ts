/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "spacemesh.v1";

export interface SimpleInt {
  value: number;
}

export interface SimpleString {
  value: string;
}

/** A non-negative coin amount, in smidge */
export interface Amount {
  value: number;
}

export interface AccountId {
  address: string;
}

export interface TransactionId {
  id: Uint8Array;
}

export interface ActivationId {
  id: Uint8Array;
}

export interface SmesherId {
  id: Uint8Array;
}

/** An Activation "transaction" (ATX) */
export interface Activation {
  id:
    | ActivationId
    | undefined;
  /** the layer that this activation is part of */
  layer:
    | LayerNumber
    | undefined;
  /** id of smesher who created the ATX */
  smesherId:
    | SmesherId
    | undefined;
  /** coinbase account id */
  coinbase:
    | AccountId
    | undefined;
  /** previous ATX pointed to */
  prevAtx:
    | ActivationId
    | undefined;
  /** number of PoST data commitment units */
  numUnits: number;
}

/**
 * An immutable Spacemesh transaction.
 * do not include mutable data such as tx state or result.
 */
export interface Transaction {
  id: Uint8Array;
  principal: AccountId | undefined;
  template:
    | AccountId
    | undefined;
  /** this is actually limited by uint8, but no type for that. */
  method: number;
  nonce: Nonce | undefined;
  limits: LayerLimits | undefined;
  maxGas: number;
  gasPrice: number;
  maxSpend: number;
  raw: Uint8Array;
}

export interface LayerLimits {
  min: number;
  max: number;
}

export interface Nonce {
  counter: number;
  /** this is actually limited by uint8, but no type for that. */
  bitfield: number;
}

/** Transaction that was added to the mesh. */
export interface MeshTransaction {
  transaction: Transaction | undefined;
  layerId: LayerNumber | undefined;
}

export interface Reward {
  /** layer award was paid in */
  layer:
    | LayerNumber
    | undefined;
  /** total reward paid (sum of tx fee and layer reward) */
  total:
    | Amount
    | undefined;
  /** tx_fee = total - layer_reward */
  layerReward:
    | Amount
    | undefined;
  /** layer number of the layer when reward was computed */
  layerComputed:
    | LayerNumber
    | undefined;
  /** account awarded this reward */
  coinbase:
    | AccountId
    | undefined;
  /** id of smesher who earned this reward */
  smesher: SmesherId | undefined;
}

export interface Block {
  /** block hash */
  id: Uint8Array;
  /** block transactions */
  transactions: Transaction[];
  /** the smesher's activation that this block refers to */
  activationId:
    | ActivationId
    | undefined;
  /** the id of the smesher who submitted this block */
  smesherId: SmesherId | undefined;
}

export interface Layer {
  /** layer number - not hash - layer content may change */
  number: LayerNumber | undefined;
  status: Layer_LayerStatus;
  /** computer layer hash - do we need this? */
  hash: Uint8Array;
  /** layer's blocks */
  blocks: Block[];
  /** list of layer's activations */
  activations: Activation[];
  /** when available - the root state hash of global state in this layer */
  rootStateHash: Uint8Array;
}

export enum Layer_LayerStatus {
  /** LAYER_STATUS_UNSPECIFIED - not yet approved or confirmed */
  LAYER_STATUS_UNSPECIFIED = 0,
  /** LAYER_STATUS_APPROVED - approved by hare */
  LAYER_STATUS_APPROVED = 1,
  /** LAYER_STATUS_CONFIRMED - confirmed by tortoise */
  LAYER_STATUS_CONFIRMED = 2,
  /** LAYER_STATUS_APPLIED - applied in state */
  LAYER_STATUS_APPLIED = 3,
  UNRECOGNIZED = -1,
}

export function layer_LayerStatusFromJSON(object: any): Layer_LayerStatus {
  switch (object) {
    case 0:
    case "LAYER_STATUS_UNSPECIFIED":
      return Layer_LayerStatus.LAYER_STATUS_UNSPECIFIED;
    case 1:
    case "LAYER_STATUS_APPROVED":
      return Layer_LayerStatus.LAYER_STATUS_APPROVED;
    case 2:
    case "LAYER_STATUS_CONFIRMED":
      return Layer_LayerStatus.LAYER_STATUS_CONFIRMED;
    case 3:
    case "LAYER_STATUS_APPLIED":
      return Layer_LayerStatus.LAYER_STATUS_APPLIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Layer_LayerStatus.UNRECOGNIZED;
  }
}

export function layer_LayerStatusToJSON(object: Layer_LayerStatus): string {
  switch (object) {
    case Layer_LayerStatus.LAYER_STATUS_UNSPECIFIED:
      return "LAYER_STATUS_UNSPECIFIED";
    case Layer_LayerStatus.LAYER_STATUS_APPROVED:
      return "LAYER_STATUS_APPROVED";
    case Layer_LayerStatus.LAYER_STATUS_CONFIRMED:
      return "LAYER_STATUS_CONFIRMED";
    case Layer_LayerStatus.LAYER_STATUS_APPLIED:
      return "LAYER_STATUS_APPLIED";
    case Layer_LayerStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface LayerNumber {
  number: number;
}

/** an event emitted from an app instance */
export interface AppEvent {
  /** the transaction that called the code */
  transactionId:
    | TransactionId
    | undefined;
  /** the event's string emitted from code */
  message: string;
}

function createBaseSimpleInt(): SimpleInt {
  return { value: 0 };
}

export const SimpleInt = {
  encode(message: SimpleInt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleInt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleInt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SimpleInt {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: SimpleInt): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SimpleInt>, I>>(object: I): SimpleInt {
    const message = createBaseSimpleInt();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseSimpleString(): SimpleString {
  return { value: "" };
}

export const SimpleString = {
  encode(message: SimpleString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleString {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SimpleString {
    return { value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: SimpleString): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SimpleString>, I>>(object: I): SimpleString {
    const message = createBaseSimpleString();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseAmount(): Amount {
  return { value: 0 };
}

export const Amount = {
  encode(message: Amount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Amount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Amount {
    return { value: isSet(object.value) ? Number(object.value) : 0 };
  },

  toJSON(message: Amount): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Amount>, I>>(object: I): Amount {
    const message = createBaseAmount();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseAccountId(): AccountId {
  return { address: "" };
}

export const AccountId = {
  encode(message: AccountId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountId {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: AccountId): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountId>, I>>(object: I): AccountId {
    const message = createBaseAccountId();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseTransactionId(): TransactionId {
  return { id: new Uint8Array() };
}

export const TransactionId = {
  encode(message: TransactionId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionId {
    return { id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array() };
  },

  toJSON(message: TransactionId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransactionId>, I>>(object: I): TransactionId {
    const message = createBaseTransactionId();
    message.id = object.id ?? new Uint8Array();
    return message;
  },
};

function createBaseActivationId(): ActivationId {
  return { id: new Uint8Array() };
}

export const ActivationId = {
  encode(message: ActivationId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivationId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivationId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActivationId {
    return { id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array() };
  },

  toJSON(message: ActivationId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActivationId>, I>>(object: I): ActivationId {
    const message = createBaseActivationId();
    message.id = object.id ?? new Uint8Array();
    return message;
  },
};

function createBaseSmesherId(): SmesherId {
  return { id: new Uint8Array() };
}

export const SmesherId = {
  encode(message: SmesherId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SmesherId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmesherId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SmesherId {
    return { id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array() };
  },

  toJSON(message: SmesherId): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SmesherId>, I>>(object: I): SmesherId {
    const message = createBaseSmesherId();
    message.id = object.id ?? new Uint8Array();
    return message;
  },
};

function createBaseActivation(): Activation {
  return {
    id: undefined,
    layer: undefined,
    smesherId: undefined,
    coinbase: undefined,
    prevAtx: undefined,
    numUnits: 0,
  };
}

export const Activation = {
  encode(message: Activation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      ActivationId.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.layer !== undefined) {
      LayerNumber.encode(message.layer, writer.uint32(18).fork()).ldelim();
    }
    if (message.smesherId !== undefined) {
      SmesherId.encode(message.smesherId, writer.uint32(26).fork()).ldelim();
    }
    if (message.coinbase !== undefined) {
      AccountId.encode(message.coinbase, writer.uint32(34).fork()).ldelim();
    }
    if (message.prevAtx !== undefined) {
      ActivationId.encode(message.prevAtx, writer.uint32(42).fork()).ldelim();
    }
    if (message.numUnits !== 0) {
      writer.uint32(48).uint32(message.numUnits);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Activation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ActivationId.decode(reader, reader.uint32());
          break;
        case 2:
          message.layer = LayerNumber.decode(reader, reader.uint32());
          break;
        case 3:
          message.smesherId = SmesherId.decode(reader, reader.uint32());
          break;
        case 4:
          message.coinbase = AccountId.decode(reader, reader.uint32());
          break;
        case 5:
          message.prevAtx = ActivationId.decode(reader, reader.uint32());
          break;
        case 6:
          message.numUnits = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Activation {
    return {
      id: isSet(object.id) ? ActivationId.fromJSON(object.id) : undefined,
      layer: isSet(object.layer) ? LayerNumber.fromJSON(object.layer) : undefined,
      smesherId: isSet(object.smesherId) ? SmesherId.fromJSON(object.smesherId) : undefined,
      coinbase: isSet(object.coinbase) ? AccountId.fromJSON(object.coinbase) : undefined,
      prevAtx: isSet(object.prevAtx) ? ActivationId.fromJSON(object.prevAtx) : undefined,
      numUnits: isSet(object.numUnits) ? Number(object.numUnits) : 0,
    };
  },

  toJSON(message: Activation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? ActivationId.toJSON(message.id) : undefined);
    message.layer !== undefined && (obj.layer = message.layer ? LayerNumber.toJSON(message.layer) : undefined);
    message.smesherId !== undefined &&
      (obj.smesherId = message.smesherId ? SmesherId.toJSON(message.smesherId) : undefined);
    message.coinbase !== undefined &&
      (obj.coinbase = message.coinbase ? AccountId.toJSON(message.coinbase) : undefined);
    message.prevAtx !== undefined && (obj.prevAtx = message.prevAtx ? ActivationId.toJSON(message.prevAtx) : undefined);
    message.numUnits !== undefined && (obj.numUnits = Math.round(message.numUnits));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Activation>, I>>(object: I): Activation {
    const message = createBaseActivation();
    message.id = (object.id !== undefined && object.id !== null) ? ActivationId.fromPartial(object.id) : undefined;
    message.layer = (object.layer !== undefined && object.layer !== null)
      ? LayerNumber.fromPartial(object.layer)
      : undefined;
    message.smesherId = (object.smesherId !== undefined && object.smesherId !== null)
      ? SmesherId.fromPartial(object.smesherId)
      : undefined;
    message.coinbase = (object.coinbase !== undefined && object.coinbase !== null)
      ? AccountId.fromPartial(object.coinbase)
      : undefined;
    message.prevAtx = (object.prevAtx !== undefined && object.prevAtx !== null)
      ? ActivationId.fromPartial(object.prevAtx)
      : undefined;
    message.numUnits = object.numUnits ?? 0;
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return {
    id: new Uint8Array(),
    principal: undefined,
    template: undefined,
    method: 0,
    nonce: undefined,
    limits: undefined,
    maxGas: 0,
    gasPrice: 0,
    maxSpend: 0,
    raw: new Uint8Array(),
  };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.principal !== undefined) {
      AccountId.encode(message.principal, writer.uint32(18).fork()).ldelim();
    }
    if (message.template !== undefined) {
      AccountId.encode(message.template, writer.uint32(26).fork()).ldelim();
    }
    if (message.method !== 0) {
      writer.uint32(32).uint32(message.method);
    }
    if (message.nonce !== undefined) {
      Nonce.encode(message.nonce, writer.uint32(42).fork()).ldelim();
    }
    if (message.limits !== undefined) {
      LayerLimits.encode(message.limits, writer.uint32(50).fork()).ldelim();
    }
    if (message.maxGas !== 0) {
      writer.uint32(56).uint64(message.maxGas);
    }
    if (message.gasPrice !== 0) {
      writer.uint32(64).uint64(message.gasPrice);
    }
    if (message.maxSpend !== 0) {
      writer.uint32(72).uint64(message.maxSpend);
    }
    if (message.raw.length !== 0) {
      writer.uint32(82).bytes(message.raw);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.principal = AccountId.decode(reader, reader.uint32());
          break;
        case 3:
          message.template = AccountId.decode(reader, reader.uint32());
          break;
        case 4:
          message.method = reader.uint32();
          break;
        case 5:
          message.nonce = Nonce.decode(reader, reader.uint32());
          break;
        case 6:
          message.limits = LayerLimits.decode(reader, reader.uint32());
          break;
        case 7:
          message.maxGas = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.gasPrice = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.maxSpend = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.raw = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      principal: isSet(object.principal) ? AccountId.fromJSON(object.principal) : undefined,
      template: isSet(object.template) ? AccountId.fromJSON(object.template) : undefined,
      method: isSet(object.method) ? Number(object.method) : 0,
      nonce: isSet(object.nonce) ? Nonce.fromJSON(object.nonce) : undefined,
      limits: isSet(object.limits) ? LayerLimits.fromJSON(object.limits) : undefined,
      maxGas: isSet(object.maxGas) ? Number(object.maxGas) : 0,
      gasPrice: isSet(object.gasPrice) ? Number(object.gasPrice) : 0,
      maxSpend: isSet(object.maxSpend) ? Number(object.maxSpend) : 0,
      raw: isSet(object.raw) ? bytesFromBase64(object.raw) : new Uint8Array(),
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    message.principal !== undefined &&
      (obj.principal = message.principal ? AccountId.toJSON(message.principal) : undefined);
    message.template !== undefined &&
      (obj.template = message.template ? AccountId.toJSON(message.template) : undefined);
    message.method !== undefined && (obj.method = Math.round(message.method));
    message.nonce !== undefined && (obj.nonce = message.nonce ? Nonce.toJSON(message.nonce) : undefined);
    message.limits !== undefined && (obj.limits = message.limits ? LayerLimits.toJSON(message.limits) : undefined);
    message.maxGas !== undefined && (obj.maxGas = Math.round(message.maxGas));
    message.gasPrice !== undefined && (obj.gasPrice = Math.round(message.gasPrice));
    message.maxSpend !== undefined && (obj.maxSpend = Math.round(message.maxSpend));
    message.raw !== undefined &&
      (obj.raw = base64FromBytes(message.raw !== undefined ? message.raw : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction {
    const message = createBaseTransaction();
    message.id = object.id ?? new Uint8Array();
    message.principal = (object.principal !== undefined && object.principal !== null)
      ? AccountId.fromPartial(object.principal)
      : undefined;
    message.template = (object.template !== undefined && object.template !== null)
      ? AccountId.fromPartial(object.template)
      : undefined;
    message.method = object.method ?? 0;
    message.nonce = (object.nonce !== undefined && object.nonce !== null) ? Nonce.fromPartial(object.nonce) : undefined;
    message.limits = (object.limits !== undefined && object.limits !== null)
      ? LayerLimits.fromPartial(object.limits)
      : undefined;
    message.maxGas = object.maxGas ?? 0;
    message.gasPrice = object.gasPrice ?? 0;
    message.maxSpend = object.maxSpend ?? 0;
    message.raw = object.raw ?? new Uint8Array();
    return message;
  },
};

function createBaseLayerLimits(): LayerLimits {
  return { min: 0, max: 0 };
}

export const LayerLimits = {
  encode(message: LayerLimits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min !== 0) {
      writer.uint32(8).uint32(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(16).uint32(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LayerLimits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayerLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min = reader.uint32();
          break;
        case 2:
          message.max = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LayerLimits {
    return { min: isSet(object.min) ? Number(object.min) : 0, max: isSet(object.max) ? Number(object.max) : 0 };
  },

  toJSON(message: LayerLimits): unknown {
    const obj: any = {};
    message.min !== undefined && (obj.min = Math.round(message.min));
    message.max !== undefined && (obj.max = Math.round(message.max));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LayerLimits>, I>>(object: I): LayerLimits {
    const message = createBaseLayerLimits();
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
};

function createBaseNonce(): Nonce {
  return { counter: 0, bitfield: 0 };
}

export const Nonce = {
  encode(message: Nonce, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.counter !== 0) {
      writer.uint32(8).uint64(message.counter);
    }
    if (message.bitfield !== 0) {
      writer.uint32(16).uint32(message.bitfield);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Nonce {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNonce();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counter = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.bitfield = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Nonce {
    return {
      counter: isSet(object.counter) ? Number(object.counter) : 0,
      bitfield: isSet(object.bitfield) ? Number(object.bitfield) : 0,
    };
  },

  toJSON(message: Nonce): unknown {
    const obj: any = {};
    message.counter !== undefined && (obj.counter = Math.round(message.counter));
    message.bitfield !== undefined && (obj.bitfield = Math.round(message.bitfield));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Nonce>, I>>(object: I): Nonce {
    const message = createBaseNonce();
    message.counter = object.counter ?? 0;
    message.bitfield = object.bitfield ?? 0;
    return message;
  },
};

function createBaseMeshTransaction(): MeshTransaction {
  return { transaction: undefined, layerId: undefined };
}

export const MeshTransaction = {
  encode(message: MeshTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction !== undefined) {
      Transaction.encode(message.transaction, writer.uint32(10).fork()).ldelim();
    }
    if (message.layerId !== undefined) {
      LayerNumber.encode(message.layerId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MeshTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMeshTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transaction = Transaction.decode(reader, reader.uint32());
          break;
        case 2:
          message.layerId = LayerNumber.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MeshTransaction {
    return {
      transaction: isSet(object.transaction) ? Transaction.fromJSON(object.transaction) : undefined,
      layerId: isSet(object.layerId) ? LayerNumber.fromJSON(object.layerId) : undefined,
    };
  },

  toJSON(message: MeshTransaction): unknown {
    const obj: any = {};
    message.transaction !== undefined &&
      (obj.transaction = message.transaction ? Transaction.toJSON(message.transaction) : undefined);
    message.layerId !== undefined && (obj.layerId = message.layerId ? LayerNumber.toJSON(message.layerId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MeshTransaction>, I>>(object: I): MeshTransaction {
    const message = createBaseMeshTransaction();
    message.transaction = (object.transaction !== undefined && object.transaction !== null)
      ? Transaction.fromPartial(object.transaction)
      : undefined;
    message.layerId = (object.layerId !== undefined && object.layerId !== null)
      ? LayerNumber.fromPartial(object.layerId)
      : undefined;
    return message;
  },
};

function createBaseReward(): Reward {
  return {
    layer: undefined,
    total: undefined,
    layerReward: undefined,
    layerComputed: undefined,
    coinbase: undefined,
    smesher: undefined,
  };
}

export const Reward = {
  encode(message: Reward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.layer !== undefined) {
      LayerNumber.encode(message.layer, writer.uint32(10).fork()).ldelim();
    }
    if (message.total !== undefined) {
      Amount.encode(message.total, writer.uint32(18).fork()).ldelim();
    }
    if (message.layerReward !== undefined) {
      Amount.encode(message.layerReward, writer.uint32(26).fork()).ldelim();
    }
    if (message.layerComputed !== undefined) {
      LayerNumber.encode(message.layerComputed, writer.uint32(34).fork()).ldelim();
    }
    if (message.coinbase !== undefined) {
      AccountId.encode(message.coinbase, writer.uint32(42).fork()).ldelim();
    }
    if (message.smesher !== undefined) {
      SmesherId.encode(message.smesher, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.layer = LayerNumber.decode(reader, reader.uint32());
          break;
        case 2:
          message.total = Amount.decode(reader, reader.uint32());
          break;
        case 3:
          message.layerReward = Amount.decode(reader, reader.uint32());
          break;
        case 4:
          message.layerComputed = LayerNumber.decode(reader, reader.uint32());
          break;
        case 5:
          message.coinbase = AccountId.decode(reader, reader.uint32());
          break;
        case 6:
          message.smesher = SmesherId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Reward {
    return {
      layer: isSet(object.layer) ? LayerNumber.fromJSON(object.layer) : undefined,
      total: isSet(object.total) ? Amount.fromJSON(object.total) : undefined,
      layerReward: isSet(object.layerReward) ? Amount.fromJSON(object.layerReward) : undefined,
      layerComputed: isSet(object.layerComputed) ? LayerNumber.fromJSON(object.layerComputed) : undefined,
      coinbase: isSet(object.coinbase) ? AccountId.fromJSON(object.coinbase) : undefined,
      smesher: isSet(object.smesher) ? SmesherId.fromJSON(object.smesher) : undefined,
    };
  },

  toJSON(message: Reward): unknown {
    const obj: any = {};
    message.layer !== undefined && (obj.layer = message.layer ? LayerNumber.toJSON(message.layer) : undefined);
    message.total !== undefined && (obj.total = message.total ? Amount.toJSON(message.total) : undefined);
    message.layerReward !== undefined &&
      (obj.layerReward = message.layerReward ? Amount.toJSON(message.layerReward) : undefined);
    message.layerComputed !== undefined &&
      (obj.layerComputed = message.layerComputed ? LayerNumber.toJSON(message.layerComputed) : undefined);
    message.coinbase !== undefined &&
      (obj.coinbase = message.coinbase ? AccountId.toJSON(message.coinbase) : undefined);
    message.smesher !== undefined && (obj.smesher = message.smesher ? SmesherId.toJSON(message.smesher) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Reward>, I>>(object: I): Reward {
    const message = createBaseReward();
    message.layer = (object.layer !== undefined && object.layer !== null)
      ? LayerNumber.fromPartial(object.layer)
      : undefined;
    message.total = (object.total !== undefined && object.total !== null)
      ? Amount.fromPartial(object.total)
      : undefined;
    message.layerReward = (object.layerReward !== undefined && object.layerReward !== null)
      ? Amount.fromPartial(object.layerReward)
      : undefined;
    message.layerComputed = (object.layerComputed !== undefined && object.layerComputed !== null)
      ? LayerNumber.fromPartial(object.layerComputed)
      : undefined;
    message.coinbase = (object.coinbase !== undefined && object.coinbase !== null)
      ? AccountId.fromPartial(object.coinbase)
      : undefined;
    message.smesher = (object.smesher !== undefined && object.smesher !== null)
      ? SmesherId.fromPartial(object.smesher)
      : undefined;
    return message;
  },
};

function createBaseBlock(): Block {
  return { id: new Uint8Array(), transactions: [], activationId: undefined, smesherId: undefined };
}

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.activationId !== undefined) {
      ActivationId.encode(message.activationId, writer.uint32(26).fork()).ldelim();
    }
    if (message.smesherId !== undefined) {
      SmesherId.encode(message.smesherId, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.transactions.push(Transaction.decode(reader, reader.uint32()));
          break;
        case 3:
          message.activationId = ActivationId.decode(reader, reader.uint32());
          break;
        case 4:
          message.smesherId = SmesherId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Block {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => Transaction.fromJSON(e))
        : [],
      activationId: isSet(object.activationId) ? ActivationId.fromJSON(object.activationId) : undefined,
      smesherId: isSet(object.smesherId) ? SmesherId.fromJSON(object.smesherId) : undefined,
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) => e ? Transaction.toJSON(e) : undefined);
    } else {
      obj.transactions = [];
    }
    message.activationId !== undefined &&
      (obj.activationId = message.activationId ? ActivationId.toJSON(message.activationId) : undefined);
    message.smesherId !== undefined &&
      (obj.smesherId = message.smesherId ? SmesherId.toJSON(message.smesherId) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    message.id = object.id ?? new Uint8Array();
    message.transactions = object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    message.activationId = (object.activationId !== undefined && object.activationId !== null)
      ? ActivationId.fromPartial(object.activationId)
      : undefined;
    message.smesherId = (object.smesherId !== undefined && object.smesherId !== null)
      ? SmesherId.fromPartial(object.smesherId)
      : undefined;
    return message;
  },
};

function createBaseLayer(): Layer {
  return {
    number: undefined,
    status: 0,
    hash: new Uint8Array(),
    blocks: [],
    activations: [],
    rootStateHash: new Uint8Array(),
  };
}

export const Layer = {
  encode(message: Layer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== undefined) {
      LayerNumber.encode(message.number, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.hash.length !== 0) {
      writer.uint32(26).bytes(message.hash);
    }
    for (const v of message.blocks) {
      Block.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.activations) {
      Activation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.rootStateHash.length !== 0) {
      writer.uint32(50).bytes(message.rootStateHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Layer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = LayerNumber.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.hash = reader.bytes();
          break;
        case 4:
          message.blocks.push(Block.decode(reader, reader.uint32()));
          break;
        case 5:
          message.activations.push(Activation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.rootStateHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Layer {
    return {
      number: isSet(object.number) ? LayerNumber.fromJSON(object.number) : undefined,
      status: isSet(object.status) ? layer_LayerStatusFromJSON(object.status) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      blocks: Array.isArray(object?.blocks) ? object.blocks.map((e: any) => Block.fromJSON(e)) : [],
      activations: Array.isArray(object?.activations) ? object.activations.map((e: any) => Activation.fromJSON(e)) : [],
      rootStateHash: isSet(object.rootStateHash) ? bytesFromBase64(object.rootStateHash) : new Uint8Array(),
    };
  },

  toJSON(message: Layer): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = message.number ? LayerNumber.toJSON(message.number) : undefined);
    message.status !== undefined && (obj.status = layer_LayerStatusToJSON(message.status));
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) => e ? Block.toJSON(e) : undefined);
    } else {
      obj.blocks = [];
    }
    if (message.activations) {
      obj.activations = message.activations.map((e) => e ? Activation.toJSON(e) : undefined);
    } else {
      obj.activations = [];
    }
    message.rootStateHash !== undefined &&
      (obj.rootStateHash = base64FromBytes(
        message.rootStateHash !== undefined ? message.rootStateHash : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Layer>, I>>(object: I): Layer {
    const message = createBaseLayer();
    message.number = (object.number !== undefined && object.number !== null)
      ? LayerNumber.fromPartial(object.number)
      : undefined;
    message.status = object.status ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.blocks = object.blocks?.map((e) => Block.fromPartial(e)) || [];
    message.activations = object.activations?.map((e) => Activation.fromPartial(e)) || [];
    message.rootStateHash = object.rootStateHash ?? new Uint8Array();
    return message;
  },
};

function createBaseLayerNumber(): LayerNumber {
  return { number: 0 };
}

export const LayerNumber = {
  encode(message: LayerNumber, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== 0) {
      writer.uint32(8).uint32(message.number);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LayerNumber {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLayerNumber();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LayerNumber {
    return { number: isSet(object.number) ? Number(object.number) : 0 };
  },

  toJSON(message: LayerNumber): unknown {
    const obj: any = {};
    message.number !== undefined && (obj.number = Math.round(message.number));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LayerNumber>, I>>(object: I): LayerNumber {
    const message = createBaseLayerNumber();
    message.number = object.number ?? 0;
    return message;
  },
};

function createBaseAppEvent(): AppEvent {
  return { transactionId: undefined, message: "" };
}

export const AppEvent = {
  encode(message: AppEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionId !== undefined) {
      TransactionId.encode(message.transactionId, writer.uint32(10).fork()).ldelim();
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionId = TransactionId.decode(reader, reader.uint32());
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppEvent {
    return {
      transactionId: isSet(object.transactionId) ? TransactionId.fromJSON(object.transactionId) : undefined,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: AppEvent): unknown {
    const obj: any = {};
    message.transactionId !== undefined &&
      (obj.transactionId = message.transactionId ? TransactionId.toJSON(message.transactionId) : undefined);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AppEvent>, I>>(object: I): AppEvent {
    const message = createBaseAppEvent();
    message.transactionId = (object.transactionId !== undefined && object.transactionId !== null)
      ? TransactionId.fromPartial(object.transactionId)
      : undefined;
    message.message = object.message ?? "";
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
