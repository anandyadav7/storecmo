"use client";

import { useId, type ReactNode } from "react";

/** Parses a text-field value; NaN when empty or not a number. */
export function num(value: string): number {
  if (value.trim() === "") return NaN;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : NaN;
}

export function money(value: number): string {
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function percent(value: number): string {
  return `${value.toLocaleString("en-US", { maximumFractionDigits: 1 })}%`;
}

export function NumberField({
  label,
  value,
  onChange,
  prefix,
  suffix,
  hint,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  prefix?: string;
  suffix?: string;
  hint?: string;
}) {
  const id = useId();
  return (
    <div className="tool-field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <div className="tool-field__wrap">
        {prefix && <span aria-hidden="true">{prefix}</span>}
        <input
          id={id}
          className="input tool-field__input"
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-describedby={hint ? `${id}-hint` : undefined}
        />
        {suffix && <span aria-hidden="true">{suffix}</span>}
      </div>
      {hint && (
        <p id={`${id}-hint`} className="tool-field__hint">
          {hint}
        </p>
      )}
    </div>
  );
}

export function ToolCard({ inputs, results, note }: { inputs: ReactNode; results: ReactNode; note?: string }) {
  return (
    <div className="tool-card">
      <div className="tool-card__grid">
        <div className="tool-card__inputs">{inputs}</div>
        <div className="tool-card__results" aria-live="polite">
          {results}
        </div>
      </div>
      <p className="tool-card__foot">{note ?? "Runs entirely in your browser. Nothing you type is stored or sent anywhere."}</p>
    </div>
  );
}

export function ResultRow({ label, value, primary, detail }: { label: string; value: string; primary?: boolean; detail?: string }) {
  return (
    <div className={primary ? "tool-result tool-result--primary" : "tool-result"}>
      <span className="tool-result__label">{label}</span>
      <span className="tool-result__value">{value}</span>
      {detail && <span className="tool-result__detail">{detail}</span>}
    </div>
  );
}
