"use client";

import { useActionState, useId } from "react";
import { sendContactMessage } from "@/app/actions";
import { initialFormState } from "@/lib/form-state";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, initialFormState);
  const id = useId();
  const errorFor = (field: string) => state.status === "error" && state.field === field;

  if (state.status === "success") {
    return (
      <div className="panel">
        <p className="h3">Thanks, your message is on its way.</p>
        <p className="form-message form-message--success" role="status">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form className="panel" action={action} noValidate>
      <div className="field">
        <label className="label" htmlFor={`${id}-name`}>
          Name
        </label>
        <input id={`${id}-name`} className="input" name="name" autoComplete="name" defaultValue={state.values?.name ?? ""} required aria-invalid={errorFor("name") || undefined} />
      </div>
      <div className="field">
        <label className="label" htmlFor={`${id}-email`}>
          Email
        </label>
        <input id={`${id}-email`} className="input" type="email" name="email" inputMode="email" autoComplete="email" defaultValue={state.values?.email ?? ""} required aria-invalid={errorFor("email") || undefined} />
      </div>
      <div className="field">
        <label className="label" htmlFor={`${id}-message`}>
          Message
        </label>
        <textarea id={`${id}-message`} className="input" name="message" defaultValue={state.values?.message ?? ""} required aria-invalid={errorFor("message") || undefined} />
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Website</label>
        <input id={`${id}-website`} type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="field" style={{ marginTop: 22 }}>
        <button type="submit" className="button button--primary" disabled={pending} style={{ justifySelf: "start" }}>
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>
      {state.status === "error" && (
        <p className="form-message form-message--error" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
