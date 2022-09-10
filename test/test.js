import assert from "assert";
import bip39 from "bip39";
import {
  generatePrivateKey,
  generatePublicKey,
  signMessage,
  verifyMessage,
  signTransaction,
  derivePrivateKey,
  derivePublicKey,
  toHexString,
} from "./../src/util.js";

describe("Exports", function () {
  it("should export functions", async function () {
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
});

describe("Create", function () {
  it("should create private key with length 128", async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = await generatePrivateKey(mnemonic);

    assert.equal(toHexString(prvk).length, 128);
  });
  it("should create public key with length 64", async function () {
    let mnemonic = bip39.generateMnemonic();
    let pubk = await generatePublicKey(mnemonic);

    assert.equal(toHexString(pubk).length, 64);
  });
});

describe("Sign messages", function () {
  const message = "Spacemesh signature test";
  const badMessage = "Spaecmseh sigantrue test";

  it("should create signature with length 128", async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = await generatePrivateKey(mnemonic);
    let sign = await signMessage(message, toHexString(prvk));

    assert.equal(toHexString(sign).length, 128);
  });
  it("should verify signature", async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = await generatePrivateKey(mnemonic);
    let pubk = await generatePublicKey(mnemonic);
    let sign = await signMessage(message, toHexString(prvk));
    let verify = await verifyMessage(
      toHexString(pubk),
      message,
      toHexString(sign)
    );
    assert.equal(verify, true);
  });
  it("should not verify bad signature", async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = await generatePrivateKey(mnemonic);
    let pubk = await generatePublicKey(mnemonic);
    let sign = await signMessage(message, toHexString(prvk));
    sign.fill(0);
    let verify = await verifyMessage(
      toHexString(pubk),
      message,
      toHexString(sign)
    );
    assert.equal(verify, false);
  });
  it("should not verify bad message", async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = await generatePrivateKey(mnemonic);
    let pubk = await generatePublicKey(mnemonic);
    let sign = await signMessage(message, toHexString(prvk));
    let verify = await verifyMessage(
      toHexString(pubk),
      badMessage,
      toHexString(sign)
    );
    assert.equal(verify, false);
  });
});

describe("Transaction", function () {
  it("should create transaction with length 232", async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = await generatePrivateKey(mnemonic);
    let pubk = await generatePublicKey(mnemonic);
    let tx = await signTransaction({
      accountNonce: 0,
      receiver: toHexString(pubk).slice(24),
      gasLimit: 10,
      fee: 1,
      amount: 10,
      secretKey: toHexString(prvk),
    });
    assert.equal(toHexString(tx).length, 232);
  });
  it("should verify transaction", async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = await generatePrivateKey(mnemonic);
    let pubk = await generatePublicKey(mnemonic);
    let tx = await signTransaction({
      accountNonce: 0,
      receiver: toHexString(pubk).slice(24),
      gasLimit: 10,
      fee: 1,
      amount: 10,
      secretKey: toHexString(prvk),
    });
    let sign = await signMessage(toHexString(tx), toHexString(prvk));
    let verify = await verifyMessage(
      toHexString(pubk),
      toHexString(tx),
      toHexString(sign)
    );
    assert.equal(verify, true);
  });
  it("should not verify bad transaction", async function () {
    let mnemonic = bip39.generateMnemonic();
    let prvk = await generatePrivateKey(mnemonic);
    let pubk = await generatePublicKey(mnemonic);
    let tx = await signTransaction({
      accountNonce: 0,
      receiver: toHexString(pubk).slice(24),
      gasLimit: 10,
      fee: 1,
      amount: 10,
      secretKey: toHexString(prvk),
    });
    let badtx = await signTransaction({
      accountNonce: 1,
      receiver: toHexString(pubk).slice(24),
      gasLimit: 10,
      fee: 1,
      amount: 10,
      secretKey: toHexString(prvk),
    });
    let sign = await signMessage(toHexString(tx), toHexString(prvk));
    let verify = await verifyMessage(
      toHexString(pubk),
      toHexString(badtx),
      toHexString(sign)
    );
    assert.equal(verify, false);
  });
});
