/**
 * Cryptographic utility for secure password hashing and verification.
 * Passwords and security answers are NEVER stored in plain text.
 */

// Convert ArrayBuffer to hex string
function bufferToHex(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// Generate a cryptographically secure random salt
export function generateSalt(length = 16): string {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return bufferToHex(array.buffer);
}

// Hash password with salt using key-stretched SHA-256
export async function hashPassword(password: string, salt: string): Promise<string> {
  const encoder = new TextEncoder();
  let currentData = encoder.encode(password + ':' + salt);

  // 1,000 rounds of SHA-256 key stretching
  for (let i = 0; i < 1000; i++) {
    const hashBuffer = await crypto.subtle.digest('SHA-256', currentData);
    currentData = new Uint8Array(hashBuffer);
  }

  return bufferToHex(currentData.buffer);
}

// Verify a plain password against the stored salt & hash
export async function verifyPassword(password: string, salt: string, expectedHash: string): Promise<boolean> {
  const computed = await hashPassword(password, salt);
  return computed === expectedHash;
}

// Hash security answer for recovery
export async function hashSecurityAnswer(answer: string, salt: string): Promise<string> {
  const normalized = answer.trim().toLowerCase();
  return hashPassword(normalized, salt + '_sec');
}
