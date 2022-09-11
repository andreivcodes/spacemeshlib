import { createGlobalStateChannel } from '../src/channels';
import { derivePublicKey } from '../src/crypto';
import { accountDataQuery, getAccountBalance, getAccountNonce } from '../src/global_state';
import { AccountDataFlag } from '../src/proto/dist/spacemesh/v1/global_state_types';

const NETWORK_URL = 'api-devnet226.spacemesh.io';
const NETWORK_PORT = 443;
const MNEMONIC: string = process.env.MNEMONIC!;

describe('Global State', function () {
  it('can create channel', async function () {
    const channel = createGlobalStateChannel(NETWORK_URL, NETWORK_PORT, true);

    expect(channel).not.toBeNull();
  });
  it('should return account data query result', async function () {
    let pubk = (await derivePublicKey(MNEMONIC, 0)) as Uint8Array;

    createGlobalStateChannel(NETWORK_URL, NETWORK_PORT, true);
    let result = await accountDataQuery(pubk, AccountDataFlag.ACCOUNT_DATA_FLAG_ACCOUNT);

    expect(result).not.toBeNull();
    expect(result.totalResults).not.toBeNull();
  });

  it('should return account nonce', async function () {
    let pubk = (await derivePublicKey(MNEMONIC, 0)) as Uint8Array;

    createGlobalStateChannel(NETWORK_URL, NETWORK_PORT, true);
    let result = Number(await getAccountNonce(pubk));

    expect(result).not.toBeNull();
    expect(result).toBeGreaterThanOrEqual(0);
  });

  it('should return account balance', async function () {
    let pubk = (await derivePublicKey(MNEMONIC, 0)) as Uint8Array;

    createGlobalStateChannel(NETWORK_URL, NETWORK_PORT, true);
    let result = Number(await getAccountBalance(pubk));

    expect(result).not.toBeNull();
    expect(result).toBeGreaterThanOrEqual(0);
  });
});
