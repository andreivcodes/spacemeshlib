/* eslint-disable */
import { CallContext, CallOptions } from 'nice-grpc-common'
import { Empty } from '../../google/protobuf/empty'
import { AccountsResponse } from './debug_types'

export const protobufPackage = 'spacemesh.v1'

/**
 * DebugService exposes methods used for mostly debugging and tests
 * NOTE: The endpoints in this service are experimental and subject to change without notice.
 * They should not be used in production.
 */
export type DebugServiceDefinition = typeof DebugServiceDefinition
export const DebugServiceDefinition = {
  name: 'DebugService',
  fullName: 'spacemesh.v1.DebugService',
  methods: {
    /**
     * Accounts returns data for all the accounts currently in the node's current global state.
     * This includes each account's address, nonce and balance but excludes projection of account state.
     */
    accounts: {
      name: 'Accounts',
      requestType: Empty,
      requestStream: false,
      responseType: AccountsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const

export interface DebugServiceServiceImplementation<CallContextExt = {}> {
  /**
   * Accounts returns data for all the accounts currently in the node's current global state.
   * This includes each account's address, nonce and balance but excludes projection of account state.
   */
  accounts(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<AccountsResponse>>
}

export interface DebugServiceClient<CallOptionsExt = {}> {
  /**
   * Accounts returns data for all the accounts currently in the node's current global state.
   * This includes each account's address, nonce and balance but excludes projection of account state.
   */
  accounts(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<AccountsResponse>
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
