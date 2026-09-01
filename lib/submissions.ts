/**
 * Delivery for form submissions. There is intentionally no database yet:
 * each submission is POSTed as JSON to a webhook you configure (Formspree,
 * Zapier, Make, a Slack incoming webhook, or the future StoreCMO backend).
 *
 *   WAITLIST_WEBHOOK_URL  receives { kind: "waitlist", email, submittedAt, source }
 *   CONTACT_WEBHOOK_URL   receives { kind: "contact", name, email, message, submittedAt, source }
 *
 * When a URL is not configured the submission is logged to the server console
 * so nothing is silently dropped during local development.
 */

export type SubmissionKind = "waitlist" | "contact";

const WEBHOOKS: Record<SubmissionKind, string | undefined> = {
  waitlist: process.env.WAITLIST_WEBHOOK_URL,
  contact: process.env.CONTACT_WEBHOOK_URL,
};

export async function deliverSubmission(kind: SubmissionKind, payload: Record<string, string>) {
  const body = { kind, ...payload, submittedAt: new Date().toISOString(), source: "storecmo.com" };
  const webhook = WEBHOOKS[kind];
  if (!webhook) {
    const level = process.env.NODE_ENV === "production" ? "error" : "info";
    console[level](`[submissions] No webhook configured for "${kind}". Set ${kind.toUpperCase()}_WEBHOOK_URL. Payload:`, body);
    return;
  }
  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`Webhook for "${kind}" responded with ${response.status}`);
}
