import assert from 'assert';
import {
  generatePrivateKey,
  toHexString,
  generatePublicKey,
  derivePublicKey,
  signMessage,
  verifyMessage,
  signTransaction,
} from '../src/crypto';

import * as bip39 from 'bip39';

const MNEMONIC: string = process.env.MNEMONIC!;
const ADDRESS = '0x38db093ce43fe3db88d89568baaeb68a6b5e74a6';

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
