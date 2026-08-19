/** Shared shape of the state returned by the waitlist and contact Server Actions. */
export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Name of the invalid field, when status is "error". */
  field?: string;
  /** Submitted values echoed back on error so the form can keep what the user typed. */
  values?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle", message: "" };
