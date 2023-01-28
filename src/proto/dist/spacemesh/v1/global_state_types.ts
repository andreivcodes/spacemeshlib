/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AccountId, Amount, AppEvent, LayerNumber, Reward, SmesherId, TransactionId } from "./types";

export const protobufPackage = "spacemesh.v1";

/**
 * All data items that touch an account (see below note, under the associated
 * message)
 */
export enum AccountDataFlag {
  ACCOUNT_DATA_FLAG_UNSPECIFIED = 0,
  /** ACCOUNT_DATA_FLAG_TRANSACTION_RECEIPT - tx receipt for a tx to or from an account */
  ACCOUNT_DATA_FLAG_TRANSACTION_RECEIPT = 1,
  /** ACCOUNT_DATA_FLAG_REWARD - reward awarded to an account */
  ACCOUNT_DATA_FLAG_REWARD = 2,
  /** ACCOUNT_DATA_FLAG_ACCOUNT - account data changes (counter or balance) */
  ACCOUNT_DATA_FLAG_ACCOUNT = 4,
  UNRECOGNIZED = -1,
}

export function accountDataFlagFromJSON(object: any): AccountDataFlag {
  switch (object) {
    case 0:
    case "ACCOUNT_DATA_FLAG_UNSPECIFIED":
      return AccountDataFlag.ACCOUNT_DATA_FLAG_UNSPECIFIED;
    case 1:
    case "ACCOUNT_DATA_FLAG_TRANSACTION_RECEIPT":
      return AccountDataFlag.ACCOUNT_DATA_FLAG_TRANSACTION_RECEIPT;
    case 2:
    case "ACCOUNT_DATA_FLAG_REWARD":
      return AccountDataFlag.ACCOUNT_DATA_FLAG_REWARD;
    case 4:
    case "ACCOUNT_DATA_FLAG_ACCOUNT":
      return AccountDataFlag.ACCOUNT_DATA_FLAG_ACCOUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountDataFlag.UNRECOGNIZED;
  }
}

export function accountDataFlagToJSON(object: AccountDataFlag): string {
  switch (object) {
    case AccountDataFlag.ACCOUNT_DATA_FLAG_UNSPECIFIED:
      return "ACCOUNT_DATA_FLAG_UNSPECIFIED";
    case AccountDataFlag.ACCOUNT_DATA_FLAG_TRANSACTION_RECEIPT:
      return "ACCOUNT_DATA_FLAG_TRANSACTION_RECEIPT";
    case AccountDataFlag.ACCOUNT_DATA_FLAG_REWARD:
      return "ACCOUNT_DATA_FLAG_REWARD";
    case AccountDataFlag.ACCOUNT_DATA_FLAG_ACCOUNT:
      return "ACCOUNT_DATA_FLAG_ACCOUNT";
    case AccountDataFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GlobalStateDataFlag {
  GLOBAL_STATE_DATA_FLAG_UNSPECIFIED = 0,
  /** GLOBAL_STATE_DATA_FLAG_TRANSACTION_RECEIPT - tx receipt generated */
  GLOBAL_STATE_DATA_FLAG_TRANSACTION_RECEIPT = 1,
  /** GLOBAL_STATE_DATA_FLAG_REWARD - reward awarded to an account (includes fees paid) */
  GLOBAL_STATE_DATA_FLAG_REWARD = 2,
  /** GLOBAL_STATE_DATA_FLAG_ACCOUNT - account data changes (counter or balance) */
  GLOBAL_STATE_DATA_FLAG_ACCOUNT = 4,
  /** GLOBAL_STATE_DATA_FLAG_GLOBAL_STATE_HASH - hash of global state (i.e., state root) */
  GLOBAL_STATE_DATA_FLAG_GLOBAL_STATE_HASH = 8,
  UNRECOGNIZED = -1,
}

export function globalStateDataFlagFromJSON(object: any): GlobalStateDataFlag {
  switch (object) {
    case 0:
    case "GLOBAL_STATE_DATA_FLAG_UNSPECIFIED":
      return GlobalStateDataFlag.GLOBAL_STATE_DATA_FLAG_UNSPECIFIED;
    case 1:
    case "GLOBAL_STATE_DATA_FLAG_TRANSACTION_RECEIPT":
      return GlobalStateDataFlag.GLOBAL_STATE_DATA_FLAG_TRANSACTION_RECEIPT;
    case 2:
    case "GLOBAL_STATE_DATA_FLAG_REWARD":
      return GlobalStateDataFlag.GLOBAL_STATE_DATA_FLAG_REWARD;
    case 4:
    case "GLOBAL_STATE_DATA_FLAG_ACCOUNT":
      return GlobalStateDataFlag.GLOBAL_STATE_DATA_FLAG_ACCOUNT;
    case 8:
    case "GLOBAL_STATE_DATA_FLAG_GLOBAL_STATE_HASH":
      return GlobalStateDataFlag.GLOBAL_STATE_DATA_FLAG_GLOBAL_STATE_HASH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GlobalStateDataFlag.UNRECOGNIZED;
  }
}

export function globalStateDataFlagToJSON(object: GlobalStateDataFlag): string {
  switch (object) {
    case GlobalStateDataFlag.GLOBAL_STATE_DATA_FLAG_UNSPECIFIED:
      return "GLOBAL_STATE_DATA_FLAG_UNSPECIFIED";
    case GlobalStateDataFlag.GLOBAL_STATE_DATA_FLAG_TRANSACTION_RECEIPT:
      return "GLOBAL_STATE_DATA_FLAG_TRANSACTION_RECEIPT";
    case GlobalStateDataFlag.GLOBAL_STATE_DATA_FLAG_REWARD:
      return "GLOBAL_STATE_DATA_FLAG_REWARD";
    case GlobalStateDataFlag.GLOBAL_STATE_DATA_FLAG_ACCOUNT:
      return "GLOBAL_STATE_DATA_FLAG_ACCOUNT";
    case GlobalStateDataFlag.GLOBAL_STATE_DATA_FLAG_GLOBAL_STATE_HASH:
      return "GLOBAL_STATE_DATA_FLAG_GLOBAL_STATE_HASH";
    case GlobalStateDataFlag.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AccountState {
  /** aka nonce */
  readonly counter: bigint;
  /** known account balance */
  readonly balance: Amount | undefined;
}

export interface Account {
  /** account public address */
  readonly accountId:
    | AccountId
    | undefined;
  /** current state */
  readonly stateCurrent:
    | AccountState
    | undefined;
  /** projected state (includes pending txs) */
  readonly stateProjected: AccountState | undefined;
}

export interface AccountRequest {
  readonly accountId: AccountId | undefined;
}

export interface AccountResponse {
  readonly accountWrapper: Account | undefined;
}

export interface AccountDataFilter {
  readonly accountId:
    | AccountId
    | undefined;
  /** bit field of AccountDataFlag */
  readonly accountDataFlags: number;
}

export interface AccountDataStreamRequest {
  readonly filter: AccountDataFilter | undefined;
}

export interface AccountDataStreamResponse {
  readonly datum: AccountData | undefined;
}

export interface AccountDataQueryRequest {
  readonly filter:
    | AccountDataFilter
    | undefined;
  /** max numbers of results client would like to get */
  readonly maxResults: number;
  /** return results from offset */
  readonly offset: number;
}

export interface TransactionReceipt {
  /** the source transaction */
  readonly id:
    | TransactionId
    | undefined;
  /** tx processing result */
  readonly result: TransactionReceipt_TransactionResult;
  /** gas units used by the transaction */
  readonly gasUsed: bigint;
  /** transaction fee charged for the transaction (in smidge, gas_price * gas_used) */
  readonly fee:
    | Amount
    | undefined;
  /** the layer in which the STF processed this transaction */
  readonly layer:
    | LayerNumber
    | undefined;
  /** the index of the tx in the ordered list of txs to be executed by stf in the layer. */
  readonly index: number;
  /** svm binary data. Decode with svm-codec */
  readonly svmData: Uint8Array;
}

/** the results of STF transaction processing */
export enum TransactionReceipt_TransactionResult {
  TRANSACTION_RESULT_UNSPECIFIED = 0,
  /** TRANSACTION_RESULT_EXECUTED - executed w/o error by the STF */
  TRANSACTION_RESULT_EXECUTED = 1,
  /** TRANSACTION_RESULT_BAD_COUNTER - unexpected transaction counter */
  TRANSACTION_RESULT_BAD_COUNTER = 2,
  /** TRANSACTION_RESULT_RUNTIME_EXCEPTION - app code exception */
  TRANSACTION_RESULT_RUNTIME_EXCEPTION = 3,
  /** TRANSACTION_RESULT_INSUFFICIENT_GAS - out of gas */
  TRANSACTION_RESULT_INSUFFICIENT_GAS = 4,
  /** TRANSACTION_RESULT_INSUFFICIENT_FUNDS - failed due to sender's insufficient funds */
  TRANSACTION_RESULT_INSUFFICIENT_FUNDS = 5,
  UNRECOGNIZED = -1,
}

export function transactionReceipt_TransactionResultFromJSON(object: any): TransactionReceipt_TransactionResult {
  switch (object) {
    case 0:
    case "TRANSACTION_RESULT_UNSPECIFIED":
      return TransactionReceipt_TransactionResult.TRANSACTION_RESULT_UNSPECIFIED;
    case 1:
    case "TRANSACTION_RESULT_EXECUTED":
      return TransactionReceipt_TransactionResult.TRANSACTION_RESULT_EXECUTED;
    case 2:
    case "TRANSACTION_RESULT_BAD_COUNTER":
      return TransactionReceipt_TransactionResult.TRANSACTION_RESULT_BAD_COUNTER;
    case 3:
    case "TRANSACTION_RESULT_RUNTIME_EXCEPTION":
      return TransactionReceipt_TransactionResult.TRANSACTION_RESULT_RUNTIME_EXCEPTION;
    case 4:
    case "TRANSACTION_RESULT_INSUFFICIENT_GAS":
      return TransactionReceipt_TransactionResult.TRANSACTION_RESULT_INSUFFICIENT_GAS;
    case 5:
    case "TRANSACTION_RESULT_INSUFFICIENT_FUNDS":
      return TransactionReceipt_TransactionResult.TRANSACTION_RESULT_INSUFFICIENT_FUNDS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransactionReceipt_TransactionResult.UNRECOGNIZED;
  }
}

export function transactionReceipt_TransactionResultToJSON(object: TransactionReceipt_TransactionResult): string {
  switch (object) {
    case TransactionReceipt_TransactionResult.TRANSACTION_RESULT_UNSPECIFIED:
      return "TRANSACTION_RESULT_UNSPECIFIED";
    case TransactionReceipt_TransactionResult.TRANSACTION_RESULT_EXECUTED:
      return "TRANSACTION_RESULT_EXECUTED";
    case TransactionReceipt_TransactionResult.TRANSACTION_RESULT_BAD_COUNTER:
      return "TRANSACTION_RESULT_BAD_COUNTER";
    case TransactionReceipt_TransactionResult.TRANSACTION_RESULT_RUNTIME_EXCEPTION:
      return "TRANSACTION_RESULT_RUNTIME_EXCEPTION";
    case TransactionReceipt_TransactionResult.TRANSACTION_RESULT_INSUFFICIENT_GAS:
      return "TRANSACTION_RESULT_INSUFFICIENT_GAS";
    case TransactionReceipt_TransactionResult.TRANSACTION_RESULT_INSUFFICIENT_FUNDS:
      return "TRANSACTION_RESULT_INSUFFICIENT_FUNDS";
    case TransactionReceipt_TransactionResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * All data items that touch an account: receipts for transactions from, or to
 * this account, as well as those that modify its state (e.g., token transfers).
 * Rewards here includes fees paid. Account contains counter and balance updates.
 * Note that this mixes concerns: transactions and rewards are _causes_ of a
 * change to account state; nonce and balance updates are _results_.
 */
export interface AccountData {
  readonly reward?: Reward | undefined;
  readonly receipt?: TransactionReceipt | undefined;
  readonly accountWrapper?: Account | undefined;
}

export interface AccountDataQueryResponse {
  readonly totalResults: number;
  readonly accountItem: readonly AccountData[];
}

export interface SmesherRewardStreamRequest {
  readonly id: SmesherId | undefined;
}

export interface SmesherRewardStreamResponse {
  readonly reward: Reward | undefined;
}

export interface SmesherDataQueryRequest {
  readonly smesherId:
    | SmesherId
    | undefined;
  /** max numbers of results client would like to get */
  readonly maxResults: number;
  /** return results from offset */
  readonly offset: number;
}

export interface SmesherDataQueryResponse {
  readonly totalResults: number;
  readonly rewards: readonly Reward[];
}

export interface GlobalStateHash {
  readonly rootHash: Uint8Array;
  readonly layer: LayerNumber | undefined;
}

/**
 * For now this is empty but in future we might want to allow this to take a
 * layer number.
 */
export interface GlobalStateHashRequest {
}

export interface GlobalStateHashResponse {
  readonly response: GlobalStateHash | undefined;
}

export interface GlobalStateStreamRequest {
  /** bit field of GlobalStateDataFlag */
  readonly globalStateDataFlags: number;
}

export interface GlobalStateData {
  readonly reward?: Reward | undefined;
  readonly receipt?: TransactionReceipt | undefined;
  readonly accountWrapper?: Account | undefined;
  readonly globalState?: GlobalStateHash | undefined;
}

export interface GlobalStateStreamResponse {
  readonly datum: GlobalStateData | undefined;
}

export interface AppEventStreamRequest {
}

export interface AppEventStreamResponse {
  readonly event: AppEvent | undefined;
}

function createBaseAccountState(): AccountState {
  return { counter: BigInt("0"), balance: undefined };
}

export const AccountState = {
  encode(message: AccountState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.counter !== BigInt("0")) {
      writer.uint32(8).uint64(message.counter.toString());
    }
    if (message.balance !== undefined) {
      Amount.encode(message.balance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountState() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counter = longToBigint(reader.uint64() as Long);
          break;
        case 2:
          message.balance = Amount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountState {
    return {
      counter: isSet(object.counter) ? BigInt(object.counter) : BigInt("0"),
      balance: isSet(object.balance) ? Amount.fromJSON(object.balance) : undefined,
    };
  },

  toJSON(message: AccountState): unknown {
    const obj: any = {};
    message.counter !== undefined && (obj.counter = message.counter.toString());
    message.balance !== undefined && (obj.balance = message.balance ? Amount.toJSON(message.balance) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AccountState>): AccountState {
    return AccountState.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountState>): AccountState {
    const message = createBaseAccountState() as any;
    message.counter = object.counter ?? BigInt("0");
    message.balance = (object.balance !== undefined && object.balance !== null)
      ? Amount.fromPartial(object.balance)
      : undefined;
    return message;
  },
};

function createBaseAccount(): Account {
  return { accountId: undefined, stateCurrent: undefined, stateProjected: undefined };
}

export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== undefined) {
      AccountId.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.stateCurrent !== undefined) {
      AccountState.encode(message.stateCurrent, writer.uint32(18).fork()).ldelim();
    }
    if (message.stateProjected !== undefined) {
      AccountState.encode(message.stateProjected, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = AccountId.decode(reader, reader.uint32());
          break;
        case 2:
          message.stateCurrent = AccountState.decode(reader, reader.uint32());
          break;
        case 3:
          message.stateProjected = AccountState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      accountId: isSet(object.accountId) ? AccountId.fromJSON(object.accountId) : undefined,
      stateCurrent: isSet(object.stateCurrent) ? AccountState.fromJSON(object.stateCurrent) : undefined,
      stateProjected: isSet(object.stateProjected) ? AccountState.fromJSON(object.stateProjected) : undefined,
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.accountId !== undefined &&
      (obj.accountId = message.accountId ? AccountId.toJSON(message.accountId) : undefined);
    message.stateCurrent !== undefined &&
      (obj.stateCurrent = message.stateCurrent ? AccountState.toJSON(message.stateCurrent) : undefined);
    message.stateProjected !== undefined &&
      (obj.stateProjected = message.stateProjected ? AccountState.toJSON(message.stateProjected) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Account>): Account {
    return Account.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Account>): Account {
    const message = createBaseAccount() as any;
    message.accountId = (object.accountId !== undefined && object.accountId !== null)
      ? AccountId.fromPartial(object.accountId)
      : undefined;
    message.stateCurrent = (object.stateCurrent !== undefined && object.stateCurrent !== null)
      ? AccountState.fromPartial(object.stateCurrent)
      : undefined;
    message.stateProjected = (object.stateProjected !== undefined && object.stateProjected !== null)
      ? AccountState.fromPartial(object.stateProjected)
      : undefined;
    return message;
  },
};

function createBaseAccountRequest(): AccountRequest {
  return { accountId: undefined };
}

export const AccountRequest = {
  encode(message: AccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== undefined) {
      AccountId.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountRequest() as any;
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

  fromJSON(object: any): AccountRequest {
    return { accountId: isSet(object.accountId) ? AccountId.fromJSON(object.accountId) : undefined };
  },

  toJSON(message: AccountRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined &&
      (obj.accountId = message.accountId ? AccountId.toJSON(message.accountId) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AccountRequest>): AccountRequest {
    return AccountRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountRequest>): AccountRequest {
    const message = createBaseAccountRequest() as any;
    message.accountId = (object.accountId !== undefined && object.accountId !== null)
      ? AccountId.fromPartial(object.accountId)
      : undefined;
    return message;
  },
};

function createBaseAccountResponse(): AccountResponse {
  return { accountWrapper: undefined };
}

export const AccountResponse = {
  encode(message: AccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountWrapper !== undefined) {
      Account.encode(message.accountWrapper, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountWrapper = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountResponse {
    return { accountWrapper: isSet(object.accountWrapper) ? Account.fromJSON(object.accountWrapper) : undefined };
  },

  toJSON(message: AccountResponse): unknown {
    const obj: any = {};
    message.accountWrapper !== undefined &&
      (obj.accountWrapper = message.accountWrapper ? Account.toJSON(message.accountWrapper) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AccountResponse>): AccountResponse {
    return AccountResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountResponse>): AccountResponse {
    const message = createBaseAccountResponse() as any;
    message.accountWrapper = (object.accountWrapper !== undefined && object.accountWrapper !== null)
      ? Account.fromPartial(object.accountWrapper)
      : undefined;
    return message;
  },
};

function createBaseAccountDataFilter(): AccountDataFilter {
  return { accountId: undefined, accountDataFlags: 0 };
}

export const AccountDataFilter = {
  encode(message: AccountDataFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== undefined) {
      AccountId.encode(message.accountId, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountDataFlags !== 0) {
      writer.uint32(16).uint32(message.accountDataFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountDataFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountDataFilter() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = AccountId.decode(reader, reader.uint32());
          break;
        case 2:
          message.accountDataFlags = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountDataFilter {
    return {
      accountId: isSet(object.accountId) ? AccountId.fromJSON(object.accountId) : undefined,
      accountDataFlags: isSet(object.accountDataFlags) ? Number(object.accountDataFlags) : 0,
    };
  },

  toJSON(message: AccountDataFilter): unknown {
    const obj: any = {};
    message.accountId !== undefined &&
      (obj.accountId = message.accountId ? AccountId.toJSON(message.accountId) : undefined);
    message.accountDataFlags !== undefined && (obj.accountDataFlags = Math.round(message.accountDataFlags));
    return obj;
  },

  create(base?: DeepPartial<AccountDataFilter>): AccountDataFilter {
    return AccountDataFilter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountDataFilter>): AccountDataFilter {
    const message = createBaseAccountDataFilter() as any;
    message.accountId = (object.accountId !== undefined && object.accountId !== null)
      ? AccountId.fromPartial(object.accountId)
      : undefined;
    message.accountDataFlags = object.accountDataFlags ?? 0;
    return message;
  },
};

function createBaseAccountDataStreamRequest(): AccountDataStreamRequest {
  return { filter: undefined };
}

export const AccountDataStreamRequest = {
  encode(message: AccountDataStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      AccountDataFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountDataStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountDataStreamRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = AccountDataFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountDataStreamRequest {
    return { filter: isSet(object.filter) ? AccountDataFilter.fromJSON(object.filter) : undefined };
  },

  toJSON(message: AccountDataStreamRequest): unknown {
    const obj: any = {};
    message.filter !== undefined &&
      (obj.filter = message.filter ? AccountDataFilter.toJSON(message.filter) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AccountDataStreamRequest>): AccountDataStreamRequest {
    return AccountDataStreamRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountDataStreamRequest>): AccountDataStreamRequest {
    const message = createBaseAccountDataStreamRequest() as any;
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? AccountDataFilter.fromPartial(object.filter)
      : undefined;
    return message;
  },
};

function createBaseAccountDataStreamResponse(): AccountDataStreamResponse {
  return { datum: undefined };
}

export const AccountDataStreamResponse = {
  encode(message: AccountDataStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.datum !== undefined) {
      AccountData.encode(message.datum, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountDataStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountDataStreamResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.datum = AccountData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountDataStreamResponse {
    return { datum: isSet(object.datum) ? AccountData.fromJSON(object.datum) : undefined };
  },

  toJSON(message: AccountDataStreamResponse): unknown {
    const obj: any = {};
    message.datum !== undefined && (obj.datum = message.datum ? AccountData.toJSON(message.datum) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AccountDataStreamResponse>): AccountDataStreamResponse {
    return AccountDataStreamResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountDataStreamResponse>): AccountDataStreamResponse {
    const message = createBaseAccountDataStreamResponse() as any;
    message.datum = (object.datum !== undefined && object.datum !== null)
      ? AccountData.fromPartial(object.datum)
      : undefined;
    return message;
  },
};

function createBaseAccountDataQueryRequest(): AccountDataQueryRequest {
  return { filter: undefined, maxResults: 0, offset: 0 };
}

export const AccountDataQueryRequest = {
  encode(message: AccountDataQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.filter !== undefined) {
      AccountDataFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxResults !== 0) {
      writer.uint32(16).uint32(message.maxResults);
    }
    if (message.offset !== 0) {
      writer.uint32(24).uint32(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountDataQueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountDataQueryRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = AccountDataFilter.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxResults = reader.uint32();
          break;
        case 3:
          message.offset = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountDataQueryRequest {
    return {
      filter: isSet(object.filter) ? AccountDataFilter.fromJSON(object.filter) : undefined,
      maxResults: isSet(object.maxResults) ? Number(object.maxResults) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: AccountDataQueryRequest): unknown {
    const obj: any = {};
    message.filter !== undefined &&
      (obj.filter = message.filter ? AccountDataFilter.toJSON(message.filter) : undefined);
    message.maxResults !== undefined && (obj.maxResults = Math.round(message.maxResults));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    return obj;
  },

  create(base?: DeepPartial<AccountDataQueryRequest>): AccountDataQueryRequest {
    return AccountDataQueryRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountDataQueryRequest>): AccountDataQueryRequest {
    const message = createBaseAccountDataQueryRequest() as any;
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? AccountDataFilter.fromPartial(object.filter)
      : undefined;
    message.maxResults = object.maxResults ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseTransactionReceipt(): TransactionReceipt {
  return {
    id: undefined,
    result: 0,
    gasUsed: BigInt("0"),
    fee: undefined,
    layer: undefined,
    index: 0,
    svmData: new Uint8Array(),
  };
}

export const TransactionReceipt = {
  encode(message: TransactionReceipt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      TransactionId.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.gasUsed !== BigInt("0")) {
      writer.uint32(24).uint64(message.gasUsed.toString());
    }
    if (message.fee !== undefined) {
      Amount.encode(message.fee, writer.uint32(34).fork()).ldelim();
    }
    if (message.layer !== undefined) {
      LayerNumber.encode(message.layer, writer.uint32(42).fork()).ldelim();
    }
    if (message.index !== 0) {
      writer.uint32(48).uint32(message.index);
    }
    if (message.svmData.length !== 0) {
      writer.uint32(58).bytes(message.svmData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionReceipt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionReceipt() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = TransactionId.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = reader.int32() as any;
          break;
        case 3:
          message.gasUsed = longToBigint(reader.uint64() as Long);
          break;
        case 4:
          message.fee = Amount.decode(reader, reader.uint32());
          break;
        case 5:
          message.layer = LayerNumber.decode(reader, reader.uint32());
          break;
        case 6:
          message.index = reader.uint32();
          break;
        case 7:
          message.svmData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransactionReceipt {
    return {
      id: isSet(object.id) ? TransactionId.fromJSON(object.id) : undefined,
      result: isSet(object.result) ? transactionReceipt_TransactionResultFromJSON(object.result) : 0,
      gasUsed: isSet(object.gasUsed) ? BigInt(object.gasUsed) : BigInt("0"),
      fee: isSet(object.fee) ? Amount.fromJSON(object.fee) : undefined,
      layer: isSet(object.layer) ? LayerNumber.fromJSON(object.layer) : undefined,
      index: isSet(object.index) ? Number(object.index) : 0,
      svmData: isSet(object.svmData) ? bytesFromBase64(object.svmData) : new Uint8Array(),
    };
  },

  toJSON(message: TransactionReceipt): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? TransactionId.toJSON(message.id) : undefined);
    message.result !== undefined && (obj.result = transactionReceipt_TransactionResultToJSON(message.result));
    message.gasUsed !== undefined && (obj.gasUsed = message.gasUsed.toString());
    message.fee !== undefined && (obj.fee = message.fee ? Amount.toJSON(message.fee) : undefined);
    message.layer !== undefined && (obj.layer = message.layer ? LayerNumber.toJSON(message.layer) : undefined);
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.svmData !== undefined &&
      (obj.svmData = base64FromBytes(message.svmData !== undefined ? message.svmData : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<TransactionReceipt>): TransactionReceipt {
    return TransactionReceipt.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<TransactionReceipt>): TransactionReceipt {
    const message = createBaseTransactionReceipt() as any;
    message.id = (object.id !== undefined && object.id !== null) ? TransactionId.fromPartial(object.id) : undefined;
    message.result = object.result ?? 0;
    message.gasUsed = object.gasUsed ?? BigInt("0");
    message.fee = (object.fee !== undefined && object.fee !== null) ? Amount.fromPartial(object.fee) : undefined;
    message.layer = (object.layer !== undefined && object.layer !== null)
      ? LayerNumber.fromPartial(object.layer)
      : undefined;
    message.index = object.index ?? 0;
    message.svmData = object.svmData ?? new Uint8Array();
    return message;
  },
};

function createBaseAccountData(): AccountData {
  return { reward: undefined, receipt: undefined, accountWrapper: undefined };
}

export const AccountData = {
  encode(message: AccountData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reward !== undefined) {
      Reward.encode(message.reward, writer.uint32(10).fork()).ldelim();
    }
    if (message.receipt !== undefined) {
      TransactionReceipt.encode(message.receipt, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountWrapper !== undefined) {
      Account.encode(message.accountWrapper, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountData() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reward = Reward.decode(reader, reader.uint32());
          break;
        case 2:
          message.receipt = TransactionReceipt.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountWrapper = Account.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountData {
    return {
      reward: isSet(object.reward) ? Reward.fromJSON(object.reward) : undefined,
      receipt: isSet(object.receipt) ? TransactionReceipt.fromJSON(object.receipt) : undefined,
      accountWrapper: isSet(object.accountWrapper) ? Account.fromJSON(object.accountWrapper) : undefined,
    };
  },

  toJSON(message: AccountData): unknown {
    const obj: any = {};
    message.reward !== undefined && (obj.reward = message.reward ? Reward.toJSON(message.reward) : undefined);
    message.receipt !== undefined &&
      (obj.receipt = message.receipt ? TransactionReceipt.toJSON(message.receipt) : undefined);
    message.accountWrapper !== undefined &&
      (obj.accountWrapper = message.accountWrapper ? Account.toJSON(message.accountWrapper) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AccountData>): AccountData {
    return AccountData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountData>): AccountData {
    const message = createBaseAccountData() as any;
    message.reward = (object.reward !== undefined && object.reward !== null)
      ? Reward.fromPartial(object.reward)
      : undefined;
    message.receipt = (object.receipt !== undefined && object.receipt !== null)
      ? TransactionReceipt.fromPartial(object.receipt)
      : undefined;
    message.accountWrapper = (object.accountWrapper !== undefined && object.accountWrapper !== null)
      ? Account.fromPartial(object.accountWrapper)
      : undefined;
    return message;
  },
};

function createBaseAccountDataQueryResponse(): AccountDataQueryResponse {
  return { totalResults: 0, accountItem: [] };
}

export const AccountDataQueryResponse = {
  encode(message: AccountDataQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalResults !== 0) {
      writer.uint32(8).uint32(message.totalResults);
    }
    for (const v of message.accountItem) {
      AccountData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountDataQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountDataQueryResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalResults = reader.uint32();
          break;
        case 2:
          message.accountItem.push(AccountData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountDataQueryResponse {
    return {
      totalResults: isSet(object.totalResults) ? Number(object.totalResults) : 0,
      accountItem: Array.isArray(object?.accountItem)
        ? object.accountItem.map((e: any) => AccountData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountDataQueryResponse): unknown {
    const obj: any = {};
    message.totalResults !== undefined && (obj.totalResults = Math.round(message.totalResults));
    if (message.accountItem) {
      obj.accountItem = message.accountItem.map((e) => e ? AccountData.toJSON(e) : undefined);
    } else {
      obj.accountItem = [];
    }
    return obj;
  },

  create(base?: DeepPartial<AccountDataQueryResponse>): AccountDataQueryResponse {
    return AccountDataQueryResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AccountDataQueryResponse>): AccountDataQueryResponse {
    const message = createBaseAccountDataQueryResponse() as any;
    message.totalResults = object.totalResults ?? 0;
    message.accountItem = object.accountItem?.map((e) => AccountData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSmesherRewardStreamRequest(): SmesherRewardStreamRequest {
  return { id: undefined };
}

export const SmesherRewardStreamRequest = {
  encode(message: SmesherRewardStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      SmesherId.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SmesherRewardStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmesherRewardStreamRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = SmesherId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SmesherRewardStreamRequest {
    return { id: isSet(object.id) ? SmesherId.fromJSON(object.id) : undefined };
  },

  toJSON(message: SmesherRewardStreamRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? SmesherId.toJSON(message.id) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SmesherRewardStreamRequest>): SmesherRewardStreamRequest {
    return SmesherRewardStreamRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SmesherRewardStreamRequest>): SmesherRewardStreamRequest {
    const message = createBaseSmesherRewardStreamRequest() as any;
    message.id = (object.id !== undefined && object.id !== null) ? SmesherId.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseSmesherRewardStreamResponse(): SmesherRewardStreamResponse {
  return { reward: undefined };
}

export const SmesherRewardStreamResponse = {
  encode(message: SmesherRewardStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reward !== undefined) {
      Reward.encode(message.reward, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SmesherRewardStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmesherRewardStreamResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reward = Reward.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SmesherRewardStreamResponse {
    return { reward: isSet(object.reward) ? Reward.fromJSON(object.reward) : undefined };
  },

  toJSON(message: SmesherRewardStreamResponse): unknown {
    const obj: any = {};
    message.reward !== undefined && (obj.reward = message.reward ? Reward.toJSON(message.reward) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SmesherRewardStreamResponse>): SmesherRewardStreamResponse {
    return SmesherRewardStreamResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SmesherRewardStreamResponse>): SmesherRewardStreamResponse {
    const message = createBaseSmesherRewardStreamResponse() as any;
    message.reward = (object.reward !== undefined && object.reward !== null)
      ? Reward.fromPartial(object.reward)
      : undefined;
    return message;
  },
};

function createBaseSmesherDataQueryRequest(): SmesherDataQueryRequest {
  return { smesherId: undefined, maxResults: 0, offset: 0 };
}

export const SmesherDataQueryRequest = {
  encode(message: SmesherDataQueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.smesherId !== undefined) {
      SmesherId.encode(message.smesherId, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxResults !== 0) {
      writer.uint32(16).uint32(message.maxResults);
    }
    if (message.offset !== 0) {
      writer.uint32(24).uint32(message.offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SmesherDataQueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmesherDataQueryRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.smesherId = SmesherId.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxResults = reader.uint32();
          break;
        case 3:
          message.offset = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SmesherDataQueryRequest {
    return {
      smesherId: isSet(object.smesherId) ? SmesherId.fromJSON(object.smesherId) : undefined,
      maxResults: isSet(object.maxResults) ? Number(object.maxResults) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
    };
  },

  toJSON(message: SmesherDataQueryRequest): unknown {
    const obj: any = {};
    message.smesherId !== undefined &&
      (obj.smesherId = message.smesherId ? SmesherId.toJSON(message.smesherId) : undefined);
    message.maxResults !== undefined && (obj.maxResults = Math.round(message.maxResults));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    return obj;
  },

  create(base?: DeepPartial<SmesherDataQueryRequest>): SmesherDataQueryRequest {
    return SmesherDataQueryRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SmesherDataQueryRequest>): SmesherDataQueryRequest {
    const message = createBaseSmesherDataQueryRequest() as any;
    message.smesherId = (object.smesherId !== undefined && object.smesherId !== null)
      ? SmesherId.fromPartial(object.smesherId)
      : undefined;
    message.maxResults = object.maxResults ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
};

function createBaseSmesherDataQueryResponse(): SmesherDataQueryResponse {
  return { totalResults: 0, rewards: [] };
}

export const SmesherDataQueryResponse = {
  encode(message: SmesherDataQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalResults !== 0) {
      writer.uint32(8).uint32(message.totalResults);
    }
    for (const v of message.rewards) {
      Reward.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SmesherDataQueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmesherDataQueryResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalResults = reader.uint32();
          break;
        case 2:
          message.rewards.push(Reward.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SmesherDataQueryResponse {
    return {
      totalResults: isSet(object.totalResults) ? Number(object.totalResults) : 0,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Reward.fromJSON(e)) : [],
    };
  },

  toJSON(message: SmesherDataQueryResponse): unknown {
    const obj: any = {};
    message.totalResults !== undefined && (obj.totalResults = Math.round(message.totalResults));
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => e ? Reward.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },

  create(base?: DeepPartial<SmesherDataQueryResponse>): SmesherDataQueryResponse {
    return SmesherDataQueryResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SmesherDataQueryResponse>): SmesherDataQueryResponse {
    const message = createBaseSmesherDataQueryResponse() as any;
    message.totalResults = object.totalResults ?? 0;
    message.rewards = object.rewards?.map((e) => Reward.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGlobalStateHash(): GlobalStateHash {
  return { rootHash: new Uint8Array(), layer: undefined };
}

export const GlobalStateHash = {
  encode(message: GlobalStateHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rootHash.length !== 0) {
      writer.uint32(10).bytes(message.rootHash);
    }
    if (message.layer !== undefined) {
      LayerNumber.encode(message.layer, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalStateHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalStateHash() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rootHash = reader.bytes();
          break;
        case 2:
          message.layer = LayerNumber.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GlobalStateHash {
    return {
      rootHash: isSet(object.rootHash) ? bytesFromBase64(object.rootHash) : new Uint8Array(),
      layer: isSet(object.layer) ? LayerNumber.fromJSON(object.layer) : undefined,
    };
  },

  toJSON(message: GlobalStateHash): unknown {
    const obj: any = {};
    message.rootHash !== undefined &&
      (obj.rootHash = base64FromBytes(message.rootHash !== undefined ? message.rootHash : new Uint8Array()));
    message.layer !== undefined && (obj.layer = message.layer ? LayerNumber.toJSON(message.layer) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GlobalStateHash>): GlobalStateHash {
    return GlobalStateHash.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GlobalStateHash>): GlobalStateHash {
    const message = createBaseGlobalStateHash() as any;
    message.rootHash = object.rootHash ?? new Uint8Array();
    message.layer = (object.layer !== undefined && object.layer !== null)
      ? LayerNumber.fromPartial(object.layer)
      : undefined;
    return message;
  },
};

function createBaseGlobalStateHashRequest(): GlobalStateHashRequest {
  return {};
}

export const GlobalStateHashRequest = {
  encode(_: GlobalStateHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalStateHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalStateHashRequest() as any;
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

  fromJSON(_: any): GlobalStateHashRequest {
    return {};
  },

  toJSON(_: GlobalStateHashRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GlobalStateHashRequest>): GlobalStateHashRequest {
    return GlobalStateHashRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<GlobalStateHashRequest>): GlobalStateHashRequest {
    const message = createBaseGlobalStateHashRequest() as any;
    return message;
  },
};

function createBaseGlobalStateHashResponse(): GlobalStateHashResponse {
  return { response: undefined };
}

export const GlobalStateHashResponse = {
  encode(message: GlobalStateHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== undefined) {
      GlobalStateHash.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalStateHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalStateHashResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = GlobalStateHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GlobalStateHashResponse {
    return { response: isSet(object.response) ? GlobalStateHash.fromJSON(object.response) : undefined };
  },

  toJSON(message: GlobalStateHashResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = message.response ? GlobalStateHash.toJSON(message.response) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GlobalStateHashResponse>): GlobalStateHashResponse {
    return GlobalStateHashResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GlobalStateHashResponse>): GlobalStateHashResponse {
    const message = createBaseGlobalStateHashResponse() as any;
    message.response = (object.response !== undefined && object.response !== null)
      ? GlobalStateHash.fromPartial(object.response)
      : undefined;
    return message;
  },
};

function createBaseGlobalStateStreamRequest(): GlobalStateStreamRequest {
  return { globalStateDataFlags: 0 };
}

export const GlobalStateStreamRequest = {
  encode(message: GlobalStateStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.globalStateDataFlags !== 0) {
      writer.uint32(8).uint32(message.globalStateDataFlags);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalStateStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalStateStreamRequest() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.globalStateDataFlags = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GlobalStateStreamRequest {
    return { globalStateDataFlags: isSet(object.globalStateDataFlags) ? Number(object.globalStateDataFlags) : 0 };
  },

  toJSON(message: GlobalStateStreamRequest): unknown {
    const obj: any = {};
    message.globalStateDataFlags !== undefined && (obj.globalStateDataFlags = Math.round(message.globalStateDataFlags));
    return obj;
  },

  create(base?: DeepPartial<GlobalStateStreamRequest>): GlobalStateStreamRequest {
    return GlobalStateStreamRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GlobalStateStreamRequest>): GlobalStateStreamRequest {
    const message = createBaseGlobalStateStreamRequest() as any;
    message.globalStateDataFlags = object.globalStateDataFlags ?? 0;
    return message;
  },
};

function createBaseGlobalStateData(): GlobalStateData {
  return { reward: undefined, receipt: undefined, accountWrapper: undefined, globalState: undefined };
}

export const GlobalStateData = {
  encode(message: GlobalStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reward !== undefined) {
      Reward.encode(message.reward, writer.uint32(10).fork()).ldelim();
    }
    if (message.receipt !== undefined) {
      TransactionReceipt.encode(message.receipt, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountWrapper !== undefined) {
      Account.encode(message.accountWrapper, writer.uint32(26).fork()).ldelim();
    }
    if (message.globalState !== undefined) {
      GlobalStateHash.encode(message.globalState, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalStateData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalStateData() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reward = Reward.decode(reader, reader.uint32());
          break;
        case 2:
          message.receipt = TransactionReceipt.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountWrapper = Account.decode(reader, reader.uint32());
          break;
        case 4:
          message.globalState = GlobalStateHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GlobalStateData {
    return {
      reward: isSet(object.reward) ? Reward.fromJSON(object.reward) : undefined,
      receipt: isSet(object.receipt) ? TransactionReceipt.fromJSON(object.receipt) : undefined,
      accountWrapper: isSet(object.accountWrapper) ? Account.fromJSON(object.accountWrapper) : undefined,
      globalState: isSet(object.globalState) ? GlobalStateHash.fromJSON(object.globalState) : undefined,
    };
  },

  toJSON(message: GlobalStateData): unknown {
    const obj: any = {};
    message.reward !== undefined && (obj.reward = message.reward ? Reward.toJSON(message.reward) : undefined);
    message.receipt !== undefined &&
      (obj.receipt = message.receipt ? TransactionReceipt.toJSON(message.receipt) : undefined);
    message.accountWrapper !== undefined &&
      (obj.accountWrapper = message.accountWrapper ? Account.toJSON(message.accountWrapper) : undefined);
    message.globalState !== undefined &&
      (obj.globalState = message.globalState ? GlobalStateHash.toJSON(message.globalState) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GlobalStateData>): GlobalStateData {
    return GlobalStateData.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GlobalStateData>): GlobalStateData {
    const message = createBaseGlobalStateData() as any;
    message.reward = (object.reward !== undefined && object.reward !== null)
      ? Reward.fromPartial(object.reward)
      : undefined;
    message.receipt = (object.receipt !== undefined && object.receipt !== null)
      ? TransactionReceipt.fromPartial(object.receipt)
      : undefined;
    message.accountWrapper = (object.accountWrapper !== undefined && object.accountWrapper !== null)
      ? Account.fromPartial(object.accountWrapper)
      : undefined;
    message.globalState = (object.globalState !== undefined && object.globalState !== null)
      ? GlobalStateHash.fromPartial(object.globalState)
      : undefined;
    return message;
  },
};

function createBaseGlobalStateStreamResponse(): GlobalStateStreamResponse {
  return { datum: undefined };
}

export const GlobalStateStreamResponse = {
  encode(message: GlobalStateStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.datum !== undefined) {
      GlobalStateData.encode(message.datum, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GlobalStateStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalStateStreamResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.datum = GlobalStateData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GlobalStateStreamResponse {
    return { datum: isSet(object.datum) ? GlobalStateData.fromJSON(object.datum) : undefined };
  },

  toJSON(message: GlobalStateStreamResponse): unknown {
    const obj: any = {};
    message.datum !== undefined && (obj.datum = message.datum ? GlobalStateData.toJSON(message.datum) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GlobalStateStreamResponse>): GlobalStateStreamResponse {
    return GlobalStateStreamResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GlobalStateStreamResponse>): GlobalStateStreamResponse {
    const message = createBaseGlobalStateStreamResponse() as any;
    message.datum = (object.datum !== undefined && object.datum !== null)
      ? GlobalStateData.fromPartial(object.datum)
      : undefined;
    return message;
  },
};

function createBaseAppEventStreamRequest(): AppEventStreamRequest {
  return {};
}

export const AppEventStreamRequest = {
  encode(_: AppEventStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppEventStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppEventStreamRequest() as any;
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

  fromJSON(_: any): AppEventStreamRequest {
    return {};
  },

  toJSON(_: AppEventStreamRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<AppEventStreamRequest>): AppEventStreamRequest {
    return AppEventStreamRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<AppEventStreamRequest>): AppEventStreamRequest {
    const message = createBaseAppEventStreamRequest() as any;
    return message;
  },
};

function createBaseAppEventStreamResponse(): AppEventStreamResponse {
  return { event: undefined };
}

export const AppEventStreamResponse = {
  encode(message: AppEventStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      AppEvent.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppEventStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppEventStreamResponse() as any;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = AppEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AppEventStreamResponse {
    return { event: isSet(object.event) ? AppEvent.fromJSON(object.event) : undefined };
  },

  toJSON(message: AppEventStreamResponse): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event ? AppEvent.toJSON(message.event) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AppEventStreamResponse>): AppEventStreamResponse {
    return AppEventStreamResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AppEventStreamResponse>): AppEventStreamResponse {
    const message = createBaseAppEventStreamResponse() as any;
    message.event = (object.event !== undefined && object.event !== null)
      ? AppEvent.fromPartial(object.event)
      : undefined;
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
