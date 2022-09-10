import * as assert from 'assert';
import * as bip39 from 'bip39';
import {
  generatePrivateKey,
  generatePublicKey,
  signMessage,
  verifyMessage,
  signTransaction,
  derivePrivateKey,
  derivePublicKey,
  toHexString,
} from '../src/util';

import * as debug from '../src/proto/dist/spacemesh/v1/debug';
import * as debug_types from '../src/proto/dist/spacemesh/v1/debug_types';
import * as gateway from '../src/proto/dist/spacemesh/v1/gateway';
import * as gateway_types from '../src/proto/dist/spacemesh/v1/gateway_types';
import * as global_state from '../src/proto/dist/spacemesh/v1/global_state';
import * as global_state_types from '../src/proto/dist/spacemesh/v1/global_state_types';
import * as mesh from '../src/proto/dist/spacemesh/v1/mesh';
import * as mesh_types from '../src/proto/dist/spacemesh/v1/mesh_types';
import * as node from '../src/proto/dist/spacemesh/v1/node';
import * as node_types from '../src/proto/dist/spacemesh/v1/node_types';
import * as smesher from '../src/proto/dist/spacemesh/v1/smesher';
import * as smesher_types from '../src/proto/dist/spacemesh/v1/smesher_types';
import * as tx from '../src/proto/dist/spacemesh/v1/tx';
import * as tx_types from '../src/proto/dist/spacemesh/v1/tx_types';
import * as types from '../src/proto/dist/spacemesh/v1/types';

describe('Exports', function () {
  it('should export own functions', async function () {
    let exists =
      generatePrivateKey != undefined &&
      generatePublicKey != undefined &&
      signMessage != undefined &&
      verifyMessage != undefined &&
      signTransaction != undefined &&
      derivePrivateKey != undefined &&
      derivePublicKey != undefined &&
      toHexString != undefined;
    assert.equal(exists, true);
  });

  it('should export proto functions', async function () {
    let exists =
      debug != undefined &&
      debug_types != undefined &&
      gateway != undefined &&
      gateway_types != undefined &&
      global_state != undefined &&
      global_state_types != undefined &&
      mesh != undefined &&
      mesh_types != undefined &&
      node != undefined &&
      node_types != undefined &&
      smesher != undefined &&
      smesher_types != undefined &&
      tx != undefined &&
      tx_types != undefined &&
      types != undefined;
    assert.equal(exists, true);
  });
});

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

describe('restore', function () {
  it('should restore correct private key', async function () {
    let mnemonic = 'wing second among day sun vote nice fortune siren smart holiday video';
    let prvk = (await generatePrivateKey(mnemonic)) as Uint8Array;

    assert.equal(toHexString(prvk).length, 128);
  });
  it('should restore correct public key', async function () {
    let mnemonic = 'wing second among day sun vote nice fortune siren smart holiday video';
    let pubk = (await derivePublicKey(mnemonic, 0)) as Uint8Array;

    assert.equal(
      '0x' + toHexString(pubk).slice(24).toLowerCase(),
      '0x38DB093Ce43Fe3dB88D89568bAAeB68A6b5E74a6'.toLowerCase(),
    );
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
