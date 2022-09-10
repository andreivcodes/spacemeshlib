/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
export interface TransactionService {
  /**
   * Submit a new tx to the node for processing. The response
   * TransactionState message contains both the txid of the new tx, as well
   * as whether or not it was admitted into the mempool.
   */
  SubmitTransaction(request: SubmitTransactionRequest): Promise<SubmitTransactionResponse>;
  /**
   * Returns current tx state for one or more txs which indicates if a tx is
   * on the mesh, on its way to the mesh or was rejected and will never get
   * to the mesh
   */
  TransactionsState(request: TransactionsStateRequest): Promise<TransactionsStateResponse>;
  /**
   * Returns tx state for one or more txs every time the tx state changes for
   * one of these txs
   */
  TransactionsStateStream(request: TransactionsStateStreamRequest): Observable<TransactionsStateStreamResponse>;
  /** StreamResults streams historical data and watch live events with transaction results. */
  StreamResults(request: TransactionResultsRequest): Observable<TransactionResult>;
}

export class TransactionServiceClientImpl implements TransactionService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubmitTransaction = this.SubmitTransaction.bind(this);
    this.TransactionsState = this.TransactionsState.bind(this);
    this.TransactionsStateStream = this.TransactionsStateStream.bind(this);
    this.StreamResults = this.StreamResults.bind(this);
  }
  SubmitTransaction(request: SubmitTransactionRequest): Promise<SubmitTransactionResponse> {
    const data = SubmitTransactionRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.TransactionService", "SubmitTransaction", data);
    return promise.then((data) => SubmitTransactionResponse.decode(new _m0.Reader(data)));
  }

  TransactionsState(request: TransactionsStateRequest): Promise<TransactionsStateResponse> {
    const data = TransactionsStateRequest.encode(request).finish();
    const promise = this.rpc.request("spacemesh.v1.TransactionService", "TransactionsState", data);
    return promise.then((data) => TransactionsStateResponse.decode(new _m0.Reader(data)));
  }

  TransactionsStateStream(request: TransactionsStateStreamRequest): Observable<TransactionsStateStreamResponse> {
    const data = TransactionsStateStreamRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest("spacemesh.v1.TransactionService", "TransactionsStateStream", data);
    return result.pipe(map((data) => TransactionsStateStreamResponse.decode(new _m0.Reader(data))));
  }

  StreamResults(request: TransactionResultsRequest): Observable<TransactionResult> {
    const data = TransactionResultsRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest("spacemesh.v1.TransactionService", "StreamResults", data);
    return result.pipe(map((data) => TransactionResult.decode(new _m0.Reader(data))));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
}
