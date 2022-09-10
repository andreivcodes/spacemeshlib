import { ChannelCredentials, createChannel, createClient } from 'nice-grpc';
import { signTransaction, toHexString } from './crypto';
import { TransactionServiceClient, TransactionServiceDefinition } from './proto/dist/spacemesh/v1/tx';

let txChannel: TransactionServiceClient;

export const createTransactionChannel = (channelUrl: string, channelPort: number, secure: boolean) => {
  const channel = createChannel(
    `${channelUrl}:${channelPort}`,
    secure ? ChannelCredentials.createSsl() : ChannelCredentials.createInsecure(),
  );
  txChannel = createClient(TransactionServiceDefinition, channel);
  return txChannel;
};

export const submitTransaction = async (
  accountNonce: number,
  receiver: string,
  gasLimit: number,
  fee: number,
  amount: number,
  secretKey: Uint8Array,
) => {
  if (!txChannel) throw 'Transaction channel not created';

  let tx = await signTransaction({
    accountNonce: Number(accountNonce),
    receiver: receiver,
    gasLimit: gasLimit,
    fee: fee,
    amount: amount,
    secretKey: toHexString(secretKey),
  });

  return await txChannel.submitTransaction({
    transaction: tx as Uint8Array,
  });
};
