import { GlobalStateServiceClient, GlobalStateServiceDefinition } from './proto/dist/spacemesh/v1/global_state';
import { ChannelCredentials, createChannel, createClient } from 'nice-grpc';
import {
  AccountDataFilter,
  AccountDataFlag,
  AccountDataQueryRequest,
} from './proto/dist/spacemesh/v1/global_state_types';
import { AccountId } from './proto/dist/spacemesh/v1/types';

let globalStateClient: GlobalStateServiceClient;

export const createGlobalStateChannel = (channelUrl: string, channelPort: number, secure: boolean) => {
  const channel = createChannel(
    `${channelUrl}:${channelPort}`,
    secure ? ChannelCredentials.createSsl() : ChannelCredentials.createInsecure(),
  );
  globalStateClient = createClient(GlobalStateServiceDefinition, channel);
  return globalStateClient;
};

export const accountDataQuery = async (pk: Uint8Array, flags: number) => {
  if (!globalStateClient) throw 'GlobalState channel not created';

  const accountQueryId: AccountId = { address: pk };

  const accountQueryFilter: AccountDataFilter = {
    accountId: accountQueryId,
    accountDataFlags: flags,
  };

  const accountQuery: AccountDataQueryRequest = {
    filter: accountQueryFilter,
    maxResults: 1,
    offset: 0,
  };

  return await globalStateClient.accountDataQuery(accountQuery);
};

export const getAccountNonce = async (pk: Uint8Array) => {
  if (!globalStateClient) throw 'GlobalState channel not created';

  const accountQueryId: AccountId = { address: pk };

  const accountQueryFilter: AccountDataFilter = {
    accountId: accountQueryId,
    accountDataFlags: AccountDataFlag.ACCOUNT_DATA_FLAG_ACCOUNT,
  };

  const accountQuery: AccountDataQueryRequest = {
    filter: accountQueryFilter,
    maxResults: 1,
    offset: 0,
  };

  const accountQueryResponse = await globalStateClient.accountDataQuery(accountQuery);

  return accountQueryResponse.accountItem[0].accountWrapper.stateProjected.counter;
};

export const getAccountBalance = async (pk: Uint8Array) => {
  if (!globalStateClient) throw 'GlobalState channel not created';

  const accountQueryId: AccountId = { address: pk };

  const accountQueryFilter: AccountDataFilter = {
    accountId: accountQueryId,
    accountDataFlags: AccountDataFlag.ACCOUNT_DATA_FLAG_ACCOUNT,
  };

  const accountQuery: AccountDataQueryRequest = {
    filter: accountQueryFilter,
    maxResults: 1,
    offset: 0,
  };

  const accountQueryResponse = await globalStateClient.accountDataQuery(accountQuery);

  return accountQueryResponse.accountItem[0].accountWrapper.stateProjected.balance.value;
};
