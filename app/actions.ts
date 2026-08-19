"use server";

import type { FormState } from "@/lib/form-state";
import { deliverSubmission } from "@/lib/submissions";
import { validateContact, validateWaitlist } from "@/lib/validation";

const DELIVERY_ERROR = "Something went wrong on our side. Please try again in a moment.";

const text = (formData: FormData, key: string) => String(formData.get(key) ?? "");

export async function joinWaitlist(_previous: FormState, formData: FormData): Promise<FormState> {
  const result = validateWaitlist(formData);
  if (!result.ok) return { status: "error", message: result.message, field: result.field, values: { email: text(formData, "email") } };
  // Honeypot hits look successful to the bot but are never delivered.
  if (result.spam) return { status: "success", message: "You're on the list." };
  try {
    await deliverSubmission("waitlist", result.data);
    return { status: "success", message: "You're on the list. We'll email you when early access opens." };
  } catch (error) {
    console.error("[waitlist]", error);
    return { status: "error", message: DELIVERY_ERROR };
  }
}

export async function sendContactMessage(_previous: FormState, formData: FormData): Promise<FormState> {
  const result = validateContact(formData);
  if (!result.ok) {
    return {
      status: "error",
      message: result.message,
      field: result.field,
      values: { name: text(formData, "name"), email: text(formData, "email"), message: text(formData, "message") },
    };
  }
  if (result.spam) return { status: "success", message: "Message sent." };
  try {
    await deliverSubmission("contact", result.data);
    return { status: "success", message: "Message sent. We read everything and reply to most messages within a few days." };
  } catch (error) {
    console.error("[contact]", error);
    return { status: "error", message: DELIVERY_ERROR };
  }
}
