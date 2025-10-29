const encoder = new TextEncoder();

const subtle = typeof crypto !== 'undefined' && crypto.subtle ? crypto.subtle : null;

const fallbackHash = (text) => {
  let hash1 = 0x811c9dc5;
  let hash2 = 0xc9dc5118;
  for (let i = 0; i < text.length; i += 1) {
    const code = text.charCodeAt(i);
    hash1 ^= code;
    hash1 = (hash1 * 0x01000193) >>> 0;
    hash2 += (code * (i + 1)) >>> 0;
    hash2 ^= hash1 << (i % 8);
  }
  const bytes = [];
  for (let i = 0; i < 32; i += 1) {
    const mixed = (hash1 + hash2 + i * 0x9e3779b1) >>> 0;
    bytes.push(mixed & 0xff);
  }
  return Uint8Array.from(bytes);
};

const hashBuffer = async (text) => {
  if (!subtle) {
    return fallbackHash(text);
  }
  const data = encoder.encode(text);
  const hash = await subtle.digest('SHA-256', data);
  return new Uint8Array(hash);
};

export const hashPassword = async (password) => {
  const salt = `cortex-${password.length}-${Math.round(Math.random() * 1e6)}`;
  const hash = await hashBuffer(`${salt}:${password}`);
  return `${salt}$${Array.from(hash)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('')}`;
};

export const verifyPassword = async (password, storedHash) => {
  if (!storedHash) return false;
  const [salt, digest] = storedHash.split('$');
  const computed = await hashBuffer(`${salt}:${password}`);
  const computedHex = Array.from(computed)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
  return computedHex === digest;
};
