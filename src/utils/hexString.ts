export const toHexString = (bytes: Uint8Array) =>
  bytes instanceof Buffer
    ? bytes.toString("hex")
    : bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");

export const fromHexString = (hexString: string) => {
  const bytes = [];
  for (let i = 0; i < hexString.length; i += 2) {
    bytes.push(parseInt(hexString.slice(i, i + 2), 16));
  }
  return Uint8Array.from(bytes);
};
export default { toHexString, fromHexString };
