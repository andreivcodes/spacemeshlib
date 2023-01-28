import { TextEncoder } from "util";

const SALT = new TextEncoder().encode("Spacemesh blockmesh");
const COIN_TYPE = 540;
const BIP_PROPOSAL = 44;
const BIP32HardenedKeyStart = 0x80000000;
const BIP44Purpose = 0x8000002c;
const BIP44SpaceMeshCoinType = 0x8000021c;

const getBIP44Account = (account: number) => {
  // eslint-disable-next-line no-bitwise
  return (BIP32HardenedKeyStart | account) >>> 0;
};

export const createWalletPath = (index: number) => {
  return `${BIP_PROPOSAL}'/${COIN_TYPE}'/0'/0'/${index}'`;
};

export const derivePath = (
  path: string,
  seed: Uint8Array
): { secretKey: Uint8Array; publicKey: Uint8Array } => {
  const segments = path
    .split("/")
    .map((v) => v.replaceAll("'", ""))
    .map((el) => parseInt(el, 10))
    // convert path int num to not reserved uint for bip32
    .map((segment, index) => {
      if (index === 0 && segment === BIP_PROPOSAL) {
        return BIP44Purpose;
      }

      if (index === 1 && segment === COIN_TYPE) {
        return BIP44SpaceMeshCoinType;
      }

      return getBIP44Account(segment);
    });

  const lastKeyPair = segments.reduce(
    (prev, curr) => {
      const keyPair = newChildKeyPair(curr, prev.seed);

      return {
        seed: keyPair.secretKey.slice(0, 32),
        secretKey: keyPair.secretKey,
        publicKey: keyPair.publicKey,
      };
    },
    {
      seed,
      secretKey: new Uint8Array(32),
      publicKey: new Uint8Array(64),
    }
  );
  return {
    publicKey: lastKeyPair.publicKey,
    secretKey: lastKeyPair.secretKey,
  };
};

const newChildKeyPair = (index: number, seed: Uint8Array) => {
  let publicKey = new Uint8Array(32);
  let secretKey = new Uint8Array(64);

  const saveKeys = (pk: Uint8Array, sk: Uint8Array) => {
    if (pk === null || sk === null) {
      throw new Error("key generation failed");
    }
    publicKey = pk;
    secretKey = sk;
  };

  // @ts-ignore
  global.__deriveNewKeyPair(seed, index, SALT, saveKeys);

  return {
    publicKey,
    secretKey,
  };
};
