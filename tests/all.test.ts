import { Client } from '@grpc/grpc-js';
import * as assert from 'assert';
import * as bip39 from 'bip39';
import exp from 'constants';
import { createGlobalStateChannel } from '../src/channels';
import {
  generatePrivateKey,
  generatePublicKey,
  signMessage,
  verifyMessage,
  signTransaction,
  derivePublicKey,
  toHexString,
} from '../src/crypto';
import { accountDataQuery, getAccountBalance, getAccountNonce } from '../src/global_state';
import { AccountDataFlag, AccountDataQueryResponse } from '../src/proto/dist/spacemesh/v1/global_state_types';
import { GlobalStateServiceClient } from './../src/proto/dist/spacemesh/v1/global_state';

const MNEMONIC = 'wing second among day sun vote nice fortune siren smart holiday video';
const ADDRESS = '0x38db093ce43fe3db88d89568baaeb68a6b5e74a6';
const NETWORK_URL = 'api-devnet226.spacemesh.io';
const NETWORK_PORT = 443;

describe('Create', function () {
  it('should create private key with length 128', async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = (await generatePrivateKey(mnemonic)) as Uint8Array;

    assert.equal(toHexString(prvk).length, 128);
  });
  it('should create public key with length 64', async function () {
    let mnemonic = bip39.generateMnemonic();
    let pubk = (await generatePublicKey(mnemonic)) as Uint8Array;

    assert.equal(toHexString(pubk).length, 64);
  });
});

describe('Restore', function () {
  it('should restore correct public key', async function () {
    let mnemonic = MNEMONIC;
    let pubk = (await derivePublicKey(mnemonic, 0)) as Uint8Array;

    assert.equal('0x' + toHexString(pubk).slice(24).toLowerCase(), ADDRESS.toLowerCase());
  });
});

describe('Sign messages', function () {
  const message = 'Spacemesh signature test';
  const badMessage = 'Spaecmseh sigantrue test';

  it('should create signature with length 128', async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = (await generatePrivateKey(mnemonic)) as Uint8Array;
    let sign = (await signMessage(message, toHexString(prvk))) as Uint8Array;

    assert.equal(toHexString(sign).length, 128);
  });
  it('should verify signature', async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = (await generatePrivateKey(mnemonic)) as Uint8Array;
    let pubk = (await generatePublicKey(mnemonic)) as Uint8Array;
    let sign = (await signMessage(message, toHexString(prvk))) as Uint8Array;
    let verify = await verifyMessage(toHexString(pubk), message, toHexString(sign));
    assert.equal(verify, true);
  });
  it('should not verify bad signature', async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = (await generatePrivateKey(mnemonic)) as Uint8Array;
    let pubk = (await generatePublicKey(mnemonic)) as Uint8Array;
    let sign = (await signMessage(message, toHexString(prvk))) as Uint8Array;
    sign.fill(0);
    let verify = await verifyMessage(toHexString(pubk), message, toHexString(sign));
    assert.equal(verify, false);
  });
  it('should not verify bad message', async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = (await generatePrivateKey(mnemonic)) as Uint8Array;
    let pubk = (await generatePublicKey(mnemonic)) as Uint8Array;
    let sign = (await signMessage(message, toHexString(prvk))) as Uint8Array;
    let verify = await verifyMessage(toHexString(pubk), badMessage, toHexString(sign));
    assert.equal(verify, false);
  });
});

describe('Transaction', function () {
  it('should create transaction with length 232', async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = (await generatePrivateKey(mnemonic)) as Uint8Array;
    let pubk = (await generatePublicKey(mnemonic)) as Uint8Array;
    let tx = (await signTransaction({
      accountNonce: 0,
      receiver: toHexString(pubk).slice(24),
      gasLimit: 10,
      fee: 1,
      amount: 10,
      secretKey: toHexString(prvk),
    })) as Uint8Array;
    assert.equal(toHexString(tx).length, 232);
  });
  it('should verify transaction', async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = (await generatePrivateKey(mnemonic)) as Uint8Array;
    let pubk = (await generatePublicKey(mnemonic)) as Uint8Array;
    let tx = (await signTransaction({
      accountNonce: 0,
      receiver: toHexString(pubk).slice(24),
      gasLimit: 10,
      fee: 1,
      amount: 10,
      secretKey: toHexString(prvk),
    })) as Uint8Array;
    let sign = (await signMessage(toHexString(tx), toHexString(prvk))) as Uint8Array;
    let verify = await verifyMessage(toHexString(pubk), toHexString(tx), toHexString(sign));
    assert.equal(verify, true);
  });
  it('should not verify bad transaction', async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = (await generatePrivateKey(mnemonic)) as Uint8Array;
    let pubk = (await generatePublicKey(mnemonic)) as Uint8Array;
    let tx = (await signTransaction({
      accountNonce: 0,
      receiver: toHexString(pubk).slice(24),
      gasLimit: 10,
      fee: 1,
      amount: 10,
      secretKey: toHexString(prvk),
    })) as Uint8Array;
    let badtx = (await signTransaction({
      accountNonce: 1,
      receiver: toHexString(pubk).slice(24),
      gasLimit: 10,
      fee: 1,
      amount: 10,
      secretKey: toHexString(prvk),
    })) as Uint8Array;
    let sign = (await signMessage(toHexString(tx), toHexString(prvk))) as Uint8Array;
    let verify = await verifyMessage(toHexString(pubk), toHexString(badtx), toHexString(sign));
    assert.equal(verify, false);
  });
});

describe('Global State', function () {
  it('can create channel', async function () {
    const channel = createGlobalStateChannel(NETWORK_URL, NETWORK_PORT, true);

    expect(channel).not.toBeNull();
  });
  it('should return account data query result', async function () {
    let mnemonic = 'wing second among day sun vote nice fortune siren smart holiday video';
    let pubk = (await derivePublicKey(mnemonic, 0)) as Uint8Array;

    createGlobalStateChannel(NETWORK_URL, NETWORK_PORT, true);
    let result = await accountDataQuery(pubk, AccountDataFlag.ACCOUNT_DATA_FLAG_ACCOUNT);

    expect(result).not.toBeNull();
    expect(result.totalResults).not.toBeNull();
  });

  it('should return account nonce', async function () {
    let mnemonic = 'wing second among day sun vote nice fortune siren smart holiday video';
    let pubk = (await derivePublicKey(mnemonic, 0)) as Uint8Array;

    createGlobalStateChannel(NETWORK_URL, NETWORK_PORT, true);
    let result = Number(await getAccountNonce(pubk));

    expect(result).not.toBeNull();
    expect(result).toBeGreaterThanOrEqual(0);
  });

  it('should return account balance', async function () {
    let mnemonic = 'wing second among day sun vote nice fortune siren smart holiday video';
    let pubk = (await derivePublicKey(mnemonic, 0)) as Uint8Array;

    createGlobalStateChannel(NETWORK_URL, NETWORK_PORT, true);
    let result = Number(await getAccountBalance(pubk));

    expect(result).not.toBeNull();
    expect(result).toBeGreaterThanOrEqual(0);
  });
});
