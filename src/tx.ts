import { txClient } from './clients'
import { signTransaction } from './crypto'
import { toHexString } from './utils'

export const submitTransaction = async (
  accountNonce: number,
  receiver: string,
  gasLimit: number,
  fee: number,
  amount: number,
  secretKey: Uint8Array,
) => {
  if (!txClient) throw 'Transaction channel not created'

  const tx = await signTransaction({
    accountNonce: Number(accountNonce),
    receiver: receiver,
    gasLimit: gasLimit,
    fee: fee,
    amount: amount,
    secretKey: toHexString(secretKey),
  })

  return await txClient.submitTransaction({
    transaction: tx as Uint8Array,
  })
}
