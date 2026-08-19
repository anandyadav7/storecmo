/**
 * Form validation shared by the waitlist and contact Server Actions.
 * Plain functions over FormData so they can be unit-tested without React.
 */

export type ValidationResult<T> =
  | { ok: true; data: T; spam: boolean }
  | { ok: false; field: string; message: string };

export type WaitlistData = { email: string };
export type ContactData = { name: string; email: string; message: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_EMAIL = 254;
const MAX_NAME = 120;
const MAX_MESSAGE = 5000;
/** Hidden field real people never fill in. Bots usually do. */
const HONEYPOT_FIELD = "website";

function field(data: FormData, name: string) {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function isSpam(data: FormData) {
  return field(data, HONEYPOT_FIELD).length > 0;
}

function validateEmail(value: string) {
  if (!value) return "Enter your email address.";
  if (value.length > MAX_EMAIL || !EMAIL_PATTERN.test(value)) return "Enter a valid email address.";
  return null;
}

export function validateWaitlist(data: FormData): ValidationResult<WaitlistData> {
  const email = field(data, "email").toLowerCase();
  const emailError = validateEmail(email);
  if (emailError) return { ok: false, field: "email", message: emailError };
  return { ok: true, data: { email }, spam: isSpam(data) };
}

export function validateContact(data: FormData): ValidationResult<ContactData> {
  const name = field(data, "name");
  const email = field(data, "email").toLowerCase();
  const message = field(data, "message");
  if (!name) return { ok: false, field: "name", message: "Enter your name." };
  if (name.length > MAX_NAME) return { ok: false, field: "name", message: "Keep your name under 120 characters." };
  const emailError = validateEmail(email);
  if (emailError) return { ok: false, field: "email", message: emailError };
  if (!message) return { ok: false, field: "message", message: "Write a message." };
  if (message.length > MAX_MESSAGE) return { ok: false, field: "message", message: "Keep your message under 5,000 characters." };
  return { ok: true, data: { name, email, message }, spam: isSpam(data) };
}
