// src/utils/validators.ts
import blacklist from "../commonUtils/blacklistedEmails.json";
export const isValidEmail = (email: string): string | boolean => {
  email = email.toLowerCase();

  const emailRegex = /^[a-z][a-z0-9._]{4,}[a-z0-9]@[a-z0-9-]+\.(com|org|net|in|co(\.in)|edu|gov|co\.in|ac\.in)$/;

  if (email.includes('..') || email.includes('__')) return false;

  const localPart = email.split('@')[0];
  if (localPart.replace(/\./g, '').length < 6) return false;

  return emailRegex.test(email) ? email : false;
};

export const isValidTenDigitMobile = (number: string): boolean => {
  const cleaned = number.replace(/\s+/g, ''); // remove any whitespace
  const pattern = /^\d{10}$/; // must start with '0' and be 10 digits
  return pattern.test(cleaned);
};

export function isBlacklistedEmail(email: string): boolean {
  const prefix = email.split("@")[0].toLowerCase();
return blacklist.prefixes.includes(prefix);
}