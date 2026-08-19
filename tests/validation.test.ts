import test from "node:test";
import assert from "node:assert/strict";
import { validateContact, validateWaitlist } from "../lib/validation.ts";

const form = (entries: Record<string, string>) => {
  const data = new FormData();
  for (const [key, value] of Object.entries(entries)) data.set(key, value);
  return data;
};

test("validateWaitlist accepts a normal email and trims/lowercases it", () => {
  const result = validateWaitlist(form({ email: "  Founder@Store.com " }));
  assert.deepEqual(result, { ok: true, data: { email: "founder@store.com" }, spam: false });
});

test("validateWaitlist rejects empty or malformed emails", () => {
  assert.equal(validateWaitlist(form({ email: "" })).ok, false);
  assert.equal(validateWaitlist(form({ email: "not-an-email" })).ok, false);
  assert.equal(validateWaitlist(form({ email: "a@b" })).ok, false);
  assert.equal(validateWaitlist(form({ email: `${"x".repeat(250)}@b.com` })).ok, false);
});

test("validateWaitlist flags the honeypot as spam but still validates", () => {
  const result = validateWaitlist(form({ email: "bot@example.com", website: "http://spam" }));
  assert.equal(result.ok, true);
  assert.equal(result.ok && result.spam, true);
});

test("validateContact requires name, email and message with sane limits", () => {
  const good = validateContact(form({ name: "Ana", email: "ana@shop.io", message: "Hello there, question about the waitlist." }));
  assert.equal(good.ok, true);
  assert.equal(good.ok && good.data.name, "Ana");

  assert.equal(validateContact(form({ name: "", email: "ana@shop.io", message: "hi" })).ok, false);
  assert.equal(validateContact(form({ name: "Ana", email: "nope", message: "hello" })).ok, false);
  assert.equal(validateContact(form({ name: "Ana", email: "ana@shop.io", message: "" })).ok, false);
  assert.equal(validateContact(form({ name: "Ana", email: "ana@shop.io", message: "x".repeat(5001) })).ok, false);
});

test("validation errors name the field", () => {
  const result = validateContact(form({ name: "Ana", email: "bad", message: "fine" }));
  assert.equal(result.ok, false);
  assert.equal(!result.ok && result.field, "email");
});
