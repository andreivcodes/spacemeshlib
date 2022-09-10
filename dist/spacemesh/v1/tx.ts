/* eslint-disable */
import Long from "long";
import { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import {
  SubmitTransactionRequest,
  SubmitTransactionResponse,
  TransactionResult,
  TransactionResultsRequest,
  TransactionsStateRequest,
  TransactionsStateResponse,
  TransactionsStateStreamRequest,
  TransactionsStateStreamResponse,
} from "./tx_types";

export const protobufPackage = "spacemesh.v1";

/**
 * Provides clients a way to submit a tx to the network for processing, and to
 * check or follow the "journey" of a tx from mempool to block inclusion to
 * mesh to STF processing. This service is separate from the Mesh and
 * GlobalState services because txs move across both.
 */
export type TransactionServiceDefinition = typeof TransactionServiceDefinition;
export const TransactionServiceDefinition = {
  name: "TransactionService",
  fullName: "spacemesh.v1.TransactionService",
  methods: {
    /**
     * Submit a new tx to the node for processing. The response
     * TransactionState message contains both the txid of the new tx, as well
     * as whether or not it was admitted into the mempool.
     */
    submitTransaction: {
      name: "SubmitTransaction",
      requestType: SubmitTransactionRequest,
      requestStream: false,
      responseType: SubmitTransactionResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Returns current tx state for one or more txs which indicates if a tx is
     * on the mesh, on its way to the mesh or was rejected and will never get
     * to the mesh
     */
    transactionsState: {
      name: "TransactionsState",
      requestType: TransactionsStateRequest,
      requestStream: false,
      responseType: TransactionsStateResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Returns tx state for one or more txs every time the tx state changes for
     * one of these txs
     */
    transactionsStateStream: {
      name: "TransactionsStateStream",
      requestType: TransactionsStateStreamRequest,
      requestStream: false,
      responseType: TransactionsStateStreamResponse,
      responseStream: true,
      options: {},
    },
    /** StreamResults streams historical data and watch live events with transaction results. */
    streamResults: {
      name: "StreamResults",
      requestType: TransactionResultsRequest,
      requestStream: false,
      responseType: TransactionResult,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface TransactionServiceServiceImplementation<CallContextExt = {}> {
  /**
   * Submit a new tx to the node for processing. The response
   * TransactionState message contains both the txid of the new tx, as well
   * as whether or not it was admitted into the mempool.
   */
  submitTransaction(
    request: SubmitTransactionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SubmitTransactionResponse>>;
  /**
   * Returns current tx state for one or more txs which indicates if a tx is
   * on the mesh, on its way to the mesh or was rejected and will never get
   * to the mesh
   */
  transactionsState(
    request: TransactionsStateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<TransactionsStateResponse>>;
  /**
   * Returns tx state for one or more txs every time the tx state changes for
   * one of these txs
   */
  transactionsStateStream(
    request: TransactionsStateStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<TransactionsStateStreamResponse>>;
  /** StreamResults streams historical data and watch live events with transaction results. */
  streamResults(
    request: TransactionResultsRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<DeepPartial<TransactionResult>>;
}

export interface TransactionServiceClient<CallOptionsExt = {}> {
  /**
   * Submit a new tx to the node for processing. The response
   * TransactionState message contains both the txid of the new tx, as well
   * as whether or not it was admitted into the mempool.
   */
  submitTransaction(
    request: DeepPartial<SubmitTransactionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SubmitTransactionResponse>;
  /**
   * Returns current tx state for one or more txs which indicates if a tx is
   * on the mesh, on its way to the mesh or was rejected and will never get
   * to the mesh
   */
  transactionsState(
    request: DeepPartial<TransactionsStateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TransactionsStateResponse>;
  /**
   * Returns tx state for one or more txs every time the tx state changes for
   * one of these txs
   */
  transactionsStateStream(
    request: DeepPartial<TransactionsStateStreamRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<TransactionsStateStreamResponse>;
  /** StreamResults streams historical data and watch live events with transaction results. */
  streamResults(
    request: DeepPartial<TransactionResultsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<TransactionResult>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
