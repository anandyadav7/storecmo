"use client";

import { useActionState, useId } from "react";
import { joinWaitlist } from "@/app/actions";
import { initialFormState } from "@/lib/form-state";

type Props = { source?: string };

export default function WaitlistForm({ source = "unknown" }: Props) {
  const [state, action, pending] = useActionState(joinWaitlist, initialFormState);
  const id = useId();
  const invalid = state.status === "error" && state.field === "email";

  if (state.status === "success") {
    return (
      <p className="form-message form-message--success" role="status">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} noValidate>
      <div className="form-row">
        <label htmlFor={`${id}-email`} className="visually-hidden">
          Email address
        </label>
        <input
          id={`${id}-email`}
          className="input"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@yourstore.com"
          defaultValue={state.values?.email ?? ""}
          required
          aria-invalid={invalid || undefined}
          aria-describedby={state.status === "error" ? `${id}-message` : undefined}
        />
        <input type="hidden" name="source" value={source} />
        <div className="honeypot" aria-hidden="true">
          <label htmlFor={`${id}-website`}>Website</label>
          <input id={`${id}-website`} type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <button type="submit" className="button button--primary" disabled={pending}>
          {pending ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      {state.status === "error" ? (
        <p id={`${id}-message`} className="form-message form-message--error" role="alert">
          {state.message}
        </p>
      ) : (
        <p className="form-note">One email when early access opens. No newsletter, no spam.</p>
      )}
    </form>
  );
}
