import { txChannel } from './channels'
import { signTransaction, toHexString } from './crypto'

export const submitTransaction = async (
  accountNonce: number,
  receiver: string,
  gasLimit: number,
  fee: number,
  amount: number,
  secretKey: Uint8Array,
) => {
  if (!txChannel) throw 'Transaction channel not created'

  const tx = await signTransaction({
    accountNonce: Number(accountNonce),
    receiver: receiver,
    gasLimit: gasLimit,
    fee: fee,
    amount: amount,
    secretKey: toHexString(secretKey),
  })

  return await txChannel.submitTransaction({
    transaction: tx as Uint8Array,
  })
}
