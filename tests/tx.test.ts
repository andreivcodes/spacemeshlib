import { createChannels, createTransactionChannel } from '../src/channels';
import { derivePrivateKey, derivePublicKey, toHexString } from '../src/crypto';
import { getAccountNonce, getAccountBalance } from '../src/global_state';
import { submitTransaction } from '../src/tx';

const NETWORK_URL = 'api-devnet226.spacemesh.io';
const NETWORK_PORT = 443;
const MNEMONIC: string = process.env.MNEMONIC!;
const ADDRESS = '0x38db093ce43fe3db88d89568baaeb68a6b5e74a6';

describe('Transaction', function () {
  it('can create channel', async function () {
    const channel = createTransactionChannel(NETWORK_URL, NETWORK_PORT, true);

    expect(channel).not.toBeNull();
  });

  it('can submit transaction', async function () {
    let sk = (await derivePrivateKey(MNEMONIC, 0)) as Uint8Array;
    let pk = (await derivePublicKey(MNEMONIC, 0)) as Uint8Array;

    await createChannels(NETWORK_URL, 443, true);

    let accountNonce = await getAccountNonce(pk);

    let tx = await submitTransaction(Number(accountNonce), ADDRESS.slice(2), 1, 1, 100, sk);
    expect(tx.status.code).toBe(0);
  });
});
