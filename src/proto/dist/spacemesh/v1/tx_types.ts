/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Status } from "../../google/rpc/status";
import { Transaction, TransactionId } from "./types";

export const protobufPackage = "spacemesh.v1";

export interface TransactionsIds {
  readonly transactionId: readonly TransactionId[];
}

export interface SubmitTransactionRequest {
  /** signed binary transaction */
  readonly transaction: Uint8Array;
}

export interface SubmitTransactionResponse {
  readonly status: Status | undefined;
  readonly txstate: TransactionState | undefined;
}

export interface TransactionsStateRequest {
  readonly transactionId: readonly TransactionId[];
  /** when true response will include matching transactions in addition to state */
  readonly includeTransactions: boolean;
}

export interface TransactionsStateResponse {
  readonly transactionsState: readonly TransactionState[];
  readonly transactions: readonly Transaction[];
}

export interface TransactionsStateStreamRequest {
  readonly transactionId: readonly TransactionId[];
  /** when true response will include matching transactions in addition to state */
  readonly includeTransactions: boolean;
}

export interface TransactionsStateStreamResponse {
  readonly transactionState: TransactionState | undefined;
  readonly transaction: Transaction | undefined;
}

/**
 * TransactionState is the "journey" of a tx from mempool to block inclusion to
 * mesh to STF processing. To know whether or not the tx actually succeeded,
 * and its side effects, check the Receipt in the GlobalStateService.
 */
export interface TransactionState {
  readonly id: TransactionId | undefined;
  readonly state: TransactionState_TransactionState;
}

export enum TransactionState_TransactionState {
  /** TRANSACTION_STATE_UNSPECIFIED - default state */
  TRANSACTION_STATE_UNSPECIFIED = 0,
  /** TRANSACTION_STATE_REJECTED - rejected from mempool due to, e.g., invalid syntax */
  TRANSACTION_STATE_REJECTED = 1,
  /** TRANSACTION_STATE_INSUFFICIENT_FUNDS - rejected from mempool by funds check */
  TRANSACTION_STATE_INSUFFICIENT_FUNDS = 2,
  /** TRANSACTION_STATE_CONFLICTING - rejected from mempool due to conflicting counter */
  TRANSACTION_STATE_CONFLICTING = 3,
  /** TRANSACTION_STATE_MEMPOOL - in mempool but not on the mesh yet */
  TRANSACTION_STATE_MEMPOOL = 4,
  /** TRANSACTION_STATE_MESH - submitted to the mesh */
  TRANSACTION_STATE_MESH = 5,
  /** TRANSACTION_STATE_PROCESSED - processed by STF; check Receipt for success or failure */
  TRANSACTION_STATE_PROCESSED = 6,
  UNRECOGNIZED = -1,
}

export function transactionState_TransactionStateFromJSON(object: any): TransactionState_TransactionState {
  switch (object) {
    case 0:
    case "TRANSACTION_STATE_UNSPECIFIED":
      return TransactionState_TransactionState.TRANSACTION_STATE_UNSPECIFIED;
    case 1:
    case "TRANSACTION_STATE_REJECTED":
      return TransactionState_TransactionState.TRANSACTION_STATE_REJECTED;
    case 2:
    case "TRANSACTION_STATE_INSUFFICIENT_FUNDS":
      return TransactionState_TransactionState.TRANSACTION_STATE_INSUFFICIENT_FUNDS;
    case 3:
    case "TRANSACTION_STATE_CONFLICTING":
      return TransactionState_TransactionState.TRANSACTION_STATE_CONFLICTING;
    case 4:
    case "TRANSACTION_STATE_MEMPOOL":
      return TransactionState_TransactionState.TRANSACTION_STATE_MEMPOOL;
    case 5:
    case "TRANSACTION_STATE_MESH":
      return TransactionState_TransactionState.TRANSACTION_STATE_MESH;
    case 6:
    case "TRANSACTION_STATE_PROCESSED":
      return TransactionState_TransactionState.TRANSACTION_STATE_PROCESSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransactionState_TransactionState.UNRECOGNIZED;
  }
}

export function transactionState_TransactionStateToJSON(object: TransactionState_TransactionState): string {
  switch (object) {
    case TransactionState_TransactionState.TRANSACTION_STATE_UNSPECIFIED:
      return "TRANSACTION_STATE_UNSPECIFIED";
    case TransactionState_TransactionState.TRANSACTION_STATE_REJECTED:
      return "TRANSACTION_STATE_REJECTED";
    case TransactionState_TransactionState.TRANSACTION_STATE_INSUFFICIENT_FUNDS:
      return "TRANSACTION_STATE_INSUFFICIENT_FUNDS";
    case TransactionState_TransactionState.TRANSACTION_STATE_CONFLICTING:
      return "TRANSACTION_STATE_CONFLICTING";
    case TransactionState_TransactionState.TRANSACTION_STATE_MEMPOOL:
      return "TRANSACTION_STATE_MEMPOOL";
    case TransactionState_TransactionState.TRANSACTION_STATE_MESH:
      return "TRANSACTION_STATE_MESH";
    case TransactionState_TransactionState.TRANSACTION_STATE_PROCESSED:
      return "TRANSACTION_STATE_PROCESSED";
    case TransactionState_TransactionState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** TransactionResultsRequest request object for results stream. */
export interface TransactionResultsRequest {
  /** id is filter by transaction id. */
  readonly id: Uint8Array;
  /** address is a filter by account address, it could be principal or any affected address. */
  readonly address: string;
  /** start streaming from this layer. if 0 - stream will start from genesis. */
  readonly start: number;
  /** end streaming at this layer. if 0 - stream till the latest available layer. */
  readonly end: number;
  /** watch live data. */
  readonly watch: boolean;
}

export interface TransactionResult {
  readonly tx: Transaction | undefined;
  readonly status: TransactionResult_Status;
  readonly message: string;
  readonly gasConsumed: bigint;
  readonly fee: bigint;
  readonly block: Uint8Array;
  readonly layer: number;
  readonly touchedAddresses: readonly string[];
}

export enum TransactionResult_Status {
  SUCCESS = 0,
  FAILURE = 1,
  INVALID = 2,
  UNRECOGNIZED = -1,
}

export function transactionResult_StatusFromJSON(object: any): TransactionResult_Status {
  switch (object) {
    case 0:
    case "SUCCESS":
      return TransactionResult_Status.SUCCESS;
    case 1:
    case "FAILURE":
      return TransactionResult_Status.FAILURE;
    case 2:
    case "INVALID":
      return TransactionResult_Status.INVALID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransactionResult_Status.UNRECOGNIZED;
  }
}

export function transactionResult_StatusToJSON(object: TransactionResult_Status): string {
  switch (object) {
    case TransactionResult_Status.SUCCESS:
      return "SUCCESS";
    case TransactionResult_Status.FAILURE:
      return "FAILURE";
    case TransactionResult_Status.INVALID:
      return "INVALID";
    case TransactionResult_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseTransactionsIds(): TransactionsIds {
  return { transactionId: [] };
}

export const TransactionsIds = {
  encode(message: TransactionsIds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transactionId) {
      TransactionId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionsIds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionsIds() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionId.push(TransactionId.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionsIds {
    return {
      transactionId: Array.isArray(object?.transactionId)
        ? object.transactionId.map((e: any) => TransactionId.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TransactionsIds): unknown {
    const obj: any = {};
    if (message.transactionId) {
      obj.transactionId = message.transactionId.map((e) => e ? TransactionId.toJSON(e) : undefined);
    } else {
      obj.transactionId = [];
    }
    return obj;
  },

  create(base?: DeepPartial<TransactionsIds>): TransactionsIds {
    return TransactionsIds.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TransactionsIds>): TransactionsIds {
    const message = createBaseTransactionsIds() as any;
    message.transactionId = object.transactionId?.map((e) => TransactionId.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSubmitTransactionRequest(): SubmitTransactionRequest {
  return { transaction: new Uint8Array() };
}

export const SubmitTransactionRequest = {
  encode(message: SubmitTransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction.length !== 0) {
      writer.uint32(10).bytes(message.transaction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitTransactionRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transaction = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitTransactionRequest {
    return { transaction: isSet(object.transaction) ? bytesFromBase64(object.transaction) : new Uint8Array() };
  },

  toJSON(message: SubmitTransactionRequest): unknown {
    const obj: any = {};
    message.transaction !== undefined &&
      (obj.transaction = base64FromBytes(message.transaction !== undefined ? message.transaction : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<SubmitTransactionRequest>): SubmitTransactionRequest {
    return SubmitTransactionRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SubmitTransactionRequest>): SubmitTransactionRequest {
    const message = createBaseSubmitTransactionRequest() as any;
    message.transaction = object.transaction ?? new Uint8Array();
    return message;
  },
};

function createBaseSubmitTransactionResponse(): SubmitTransactionResponse {
  return { status: undefined, txstate: undefined };
}

export const SubmitTransactionResponse = {
  encode(message: SubmitTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    if (message.txstate !== undefined) {
      TransactionState.encode(message.txstate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitTransactionResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32());
          break;
        case 2:
          message.txstate = TransactionState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitTransactionResponse {
    return {
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
      txstate: isSet(object.txstate) ? TransactionState.fromJSON(object.txstate) : undefined,
    };
  },

  toJSON(message: SubmitTransactionResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    message.txstate !== undefined &&
      (obj.txstate = message.txstate ? TransactionState.toJSON(message.txstate) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SubmitTransactionResponse>): SubmitTransactionResponse {
    return SubmitTransactionResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SubmitTransactionResponse>): SubmitTransactionResponse {
    const message = createBaseSubmitTransactionResponse() as any;
    message.status = (object.status !== undefined && object.status !== null)
      ? Status.fromPartial(object.status)
      : undefined;
    message.txstate = (object.txstate !== undefined && object.txstate !== null)
      ? TransactionState.fromPartial(object.txstate)
      : undefined;
    return message;
  },
};

function createBaseTransactionsStateRequest(): TransactionsStateRequest {
  return { transactionId: [], includeTransactions: false };
}

export const TransactionsStateRequest = {
  encode(message: TransactionsStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transactionId) {
      TransactionId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.includeTransactions === true) {
      writer.uint32(16).bool(message.includeTransactions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionsStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionsStateRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionId.push(TransactionId.decode(reader, reader.uint32()));
          break;
        case 2:
          message.includeTransactions = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionsStateRequest {
    return {
      transactionId: Array.isArray(object?.transactionId)
        ? object.transactionId.map((e: any) => TransactionId.fromJSON(e))
        : [],
      includeTransactions: isSet(object.includeTransactions) ? Boolean(object.includeTransactions) : false,
    };
  },

  toJSON(message: TransactionsStateRequest): unknown {
    const obj: any = {};
    if (message.transactionId) {
      obj.transactionId = message.transactionId.map((e) => e ? TransactionId.toJSON(e) : undefined);
    } else {
      obj.transactionId = [];
    }
    message.includeTransactions !== undefined && (obj.includeTransactions = message.includeTransactions);
    return obj;
  },

  create(base?: DeepPartial<TransactionsStateRequest>): TransactionsStateRequest {
    return TransactionsStateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TransactionsStateRequest>): TransactionsStateRequest {
    const message = createBaseTransactionsStateRequest() as any;
    message.transactionId = object.transactionId?.map((e) => TransactionId.fromPartial(e)) || [];
    message.includeTransactions = object.includeTransactions ?? false;
    return message;
  },
};

function createBaseTransactionsStateResponse(): TransactionsStateResponse {
  return { transactionsState: [], transactions: [] };
}

export const TransactionsStateResponse = {
  encode(message: TransactionsStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transactionsState) {
      TransactionState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.transactions) {
      Transaction.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionsStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionsStateResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionsState.push(TransactionState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.transactions.push(Transaction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionsStateResponse {
    return {
      transactionsState: Array.isArray(object?.transactionsState)
        ? object.transactionsState.map((e: any) => TransactionState.fromJSON(e))
        : [],
      transactions: Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => Transaction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TransactionsStateResponse): unknown {
    const obj: any = {};
    if (message.transactionsState) {
      obj.transactionsState = message.transactionsState.map((e) => e ? TransactionState.toJSON(e) : undefined);
    } else {
      obj.transactionsState = [];
    }
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) => e ? Transaction.toJSON(e) : undefined);
    } else {
      obj.transactions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<TransactionsStateResponse>): TransactionsStateResponse {
    return TransactionsStateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TransactionsStateResponse>): TransactionsStateResponse {
    const message = createBaseTransactionsStateResponse() as any;
    message.transactionsState = object.transactionsState?.map((e) => TransactionState.fromPartial(e)) || [];
    message.transactions = object.transactions?.map((e) => Transaction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTransactionsStateStreamRequest(): TransactionsStateStreamRequest {
  return { transactionId: [], includeTransactions: false };
}

export const TransactionsStateStreamRequest = {
  encode(message: TransactionsStateStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transactionId) {
      TransactionId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.includeTransactions === true) {
      writer.uint32(16).bool(message.includeTransactions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionsStateStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionsStateStreamRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionId.push(TransactionId.decode(reader, reader.uint32()));
          break;
        case 2:
          message.includeTransactions = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionsStateStreamRequest {
    return {
      transactionId: Array.isArray(object?.transactionId)
        ? object.transactionId.map((e: any) => TransactionId.fromJSON(e))
        : [],
      includeTransactions: isSet(object.includeTransactions) ? Boolean(object.includeTransactions) : false,
    };
  },

  toJSON(message: TransactionsStateStreamRequest): unknown {
    const obj: any = {};
    if (message.transactionId) {
      obj.transactionId = message.transactionId.map((e) => e ? TransactionId.toJSON(e) : undefined);
    } else {
      obj.transactionId = [];
    }
    message.includeTransactions !== undefined && (obj.includeTransactions = message.includeTransactions);
    return obj;
  },

  create(base?: DeepPartial<TransactionsStateStreamRequest>): TransactionsStateStreamRequest {
    return TransactionsStateStreamRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TransactionsStateStreamRequest>): TransactionsStateStreamRequest {
    const message = createBaseTransactionsStateStreamRequest() as any;
    message.transactionId = object.transactionId?.map((e) => TransactionId.fromPartial(e)) || [];
    message.includeTransactions = object.includeTransactions ?? false;
    return message;
  },
};

function createBaseTransactionsStateStreamResponse(): TransactionsStateStreamResponse {
  return { transactionState: undefined, transaction: undefined };
}

export const TransactionsStateStreamResponse = {
  encode(message: TransactionsStateStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionState !== undefined) {
      TransactionState.encode(message.transactionState, writer.uint32(10).fork()).ldelim();
    }
    if (message.transaction !== undefined) {
      Transaction.encode(message.transaction, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionsStateStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionsStateStreamResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionState = TransactionState.decode(reader, reader.uint32());
          break;
        case 2:
          message.transaction = Transaction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionsStateStreamResponse {
    return {
      transactionState: isSet(object.transactionState) ? TransactionState.fromJSON(object.transactionState) : undefined,
      transaction: isSet(object.transaction) ? Transaction.fromJSON(object.transaction) : undefined,
    };
  },

  toJSON(message: TransactionsStateStreamResponse): unknown {
    const obj: any = {};
    message.transactionState !== undefined &&
      (obj.transactionState = message.transactionState ? TransactionState.toJSON(message.transactionState) : undefined);
    message.transaction !== undefined &&
      (obj.transaction = message.transaction ? Transaction.toJSON(message.transaction) : undefined);
    return obj;
  },

  create(base?: DeepPartial<TransactionsStateStreamResponse>): TransactionsStateStreamResponse {
    return TransactionsStateStreamResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TransactionsStateStreamResponse>): TransactionsStateStreamResponse {
    const message = createBaseTransactionsStateStreamResponse() as any;
    message.transactionState = (object.transactionState !== undefined && object.transactionState !== null)
      ? TransactionState.fromPartial(object.transactionState)
      : undefined;
    message.transaction = (object.transaction !== undefined && object.transaction !== null)
      ? Transaction.fromPartial(object.transaction)
      : undefined;
    return message;
  },
};

function createBaseTransactionState(): TransactionState {
  return { id: undefined, state: 0 };
}

export const TransactionState = {
  encode(message: TransactionState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      TransactionId.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionState() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = TransactionId.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionState {
    return {
      id: isSet(object.id) ? TransactionId.fromJSON(object.id) : undefined,
      state: isSet(object.state) ? transactionState_TransactionStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: TransactionState): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? TransactionId.toJSON(message.id) : undefined);
    message.state !== undefined && (obj.state = transactionState_TransactionStateToJSON(message.state));
    return obj;
  },

  create(base?: DeepPartial<TransactionState>): TransactionState {
    return TransactionState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TransactionState>): TransactionState {
    const message = createBaseTransactionState() as any;
    message.id = (object.id !== undefined && object.id !== null) ? TransactionId.fromPartial(object.id) : undefined;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseTransactionResultsRequest(): TransactionResultsRequest {
  return { id: new Uint8Array(), address: "", start: 0, end: 0, watch: false };
}

export const TransactionResultsRequest = {
  encode(message: TransactionResultsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.start !== 0) {
      writer.uint32(24).uint32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(32).uint32(message.end);
    }
    if (message.watch === true) {
      writer.uint32(40).bool(message.watch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResultsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionResultsRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.bytes();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.start = reader.uint32();
          break;
        case 4:
          message.end = reader.uint32();
          break;
        case 5:
          message.watch = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionResultsRequest {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
      address: isSet(object.address) ? String(object.address) : "",
      start: isSet(object.start) ? Number(object.start) : 0,
      end: isSet(object.end) ? Number(object.end) : 0,
      watch: isSet(object.watch) ? Boolean(object.watch) : false,
    };
  },

  toJSON(message: TransactionResultsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = base64FromBytes(message.id !== undefined ? message.id : new Uint8Array()));
    message.address !== undefined && (obj.address = message.address);
    message.start !== undefined && (obj.start = Math.round(message.start));
    message.end !== undefined && (obj.end = Math.round(message.end));
    message.watch !== undefined && (obj.watch = message.watch);
    return obj;
  },

  create(base?: DeepPartial<TransactionResultsRequest>): TransactionResultsRequest {
    return TransactionResultsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TransactionResultsRequest>): TransactionResultsRequest {
    const message = createBaseTransactionResultsRequest() as any;
    message.id = object.id ?? new Uint8Array();
    message.address = object.address ?? "";
    message.start = object.start ?? 0;
    message.end = object.end ?? 0;
    message.watch = object.watch ?? false;
    return message;
  },
};

function createBaseTransactionResult(): TransactionResult {
  return {
    tx: undefined,
    status: 0,
    message: "",
    gasConsumed: BigInt("0"),
    fee: BigInt("0"),
    block: new Uint8Array(),
    layer: 0,
    touchedAddresses: [],
  };
}

export const TransactionResult = {
  encode(message: TransactionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Transaction.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    if (message.gasConsumed !== BigInt("0")) {
      writer.uint32(32).uint64(message.gasConsumed.toString());
    }
    if (message.fee !== BigInt("0")) {
      writer.uint32(40).uint64(message.fee.toString());
    }
    if (message.block.length !== 0) {
      writer.uint32(50).bytes(message.block);
    }
    if (message.layer !== 0) {
      writer.uint32(56).uint32(message.layer);
    }
    for (const v of message.touchedAddresses) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionResult() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Transaction.decode(reader, reader.uint32());
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.message = reader.string();
          break;
        case 4:
          message.gasConsumed = longToBigint(reader.uint64() as Long);
          break;
        case 5:
          message.fee = longToBigint(reader.uint64() as Long);
          break;
        case 6:
          message.block = reader.bytes();
          break;
        case 7:
          message.layer = reader.uint32();
          break;
        case 8:
          message.touchedAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionResult {
    return {
      tx: isSet(object.tx) ? Transaction.fromJSON(object.tx) : undefined,
      status: isSet(object.status) ? transactionResult_StatusFromJSON(object.status) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      gasConsumed: isSet(object.gasConsumed) ? BigInt(object.gasConsumed) : BigInt("0"),
      fee: isSet(object.fee) ? BigInt(object.fee) : BigInt("0"),
      block: isSet(object.block) ? bytesFromBase64(object.block) : new Uint8Array(),
      layer: isSet(object.layer) ? Number(object.layer) : 0,
      touchedAddresses: Array.isArray(object?.touchedAddresses)
        ? object.touchedAddresses.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: TransactionResult): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Transaction.toJSON(message.tx) : undefined);
    message.status !== undefined && (obj.status = transactionResult_StatusToJSON(message.status));
    message.message !== undefined && (obj.message = message.message);
    message.gasConsumed !== undefined && (obj.gasConsumed = message.gasConsumed.toString());
    message.fee !== undefined && (obj.fee = message.fee.toString());
    message.block !== undefined &&
      (obj.block = base64FromBytes(message.block !== undefined ? message.block : new Uint8Array()));
    message.layer !== undefined && (obj.layer = Math.round(message.layer));
    if (message.touchedAddresses) {
      obj.touchedAddresses = message.touchedAddresses.map((e) => e);
    } else {
      obj.touchedAddresses = [];
    }
    return obj;
  },

  create(base?: DeepPartial<TransactionResult>): TransactionResult {
    return TransactionResult.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TransactionResult>): TransactionResult {
    const message = createBaseTransactionResult() as any;
    message.tx = (object.tx !== undefined && object.tx !== null) ? Transaction.fromPartial(object.tx) : undefined;
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.gasConsumed = object.gasConsumed ?? BigInt("0");
    message.fee = object.fee ?? BigInt("0");
    message.block = object.block ?? new Uint8Array();
    message.layer = object.layer ?? 0;
    message.touchedAddresses = object.touchedAddresses?.map((e) => e) || [];
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

function longToBigint(long: Long) {
  return BigInt(long.toString());
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
