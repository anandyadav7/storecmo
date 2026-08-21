"use client";

import { useId, useState } from "react";
import { DESCRIPTION_LIMIT, metaTagVariants, TITLE_LIMIT, type MetaTagInput } from "@/lib/calculators";

const pageTypes: Array<{ value: MetaTagInput["pageType"]; label: string }> = [
  { value: "product", label: "Product page" },
  { value: "collection", label: "Collection / category page" },
  { value: "homepage", label: "Homepage" },
  { value: "article", label: "Article / guide" },
];

export default function MetaTagGenerator() {
  const id = useId();
  const [pageType, setPageType] = useState<MetaTagInput["pageType"]>("product");
  const [keyword, setKeyword] = useState("organic cotton t-shirts");
  const [brand, setBrand] = useState("Your Store");
  const [differentiator, setDifferentiator] = useState("");
  const [copied, setCopied] = useState<number | null>(null);

  const variants = metaTagVariants({ pageType, keyword, brand, differentiator });

  const copy = async (index: number, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(index);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      // Clipboard unavailable (permissions, older browser) — the text stays selectable by hand.
    }
  };

  return (
    <div className="tool-card">
      <div className="tool-card__grid">
        <div className="tool-card__inputs">
          <div className="tool-field">
            <label className="label" htmlFor={`${id}-type`}>Page type</label>
            <select id={`${id}-type`} className="input" value={pageType} onChange={(event) => setPageType(event.target.value as MetaTagInput["pageType"])}>
              {pageTypes.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <div className="tool-field">
            <label className="label" htmlFor={`${id}-keyword`}>Primary keyword</label>
            <input id={`${id}-keyword`} className="input" type="text" value={keyword} onChange={(event) => setKeyword(event.target.value)} />
            <p className="tool-field__hint">What the page should rank for, phrased the way shoppers search it.</p>
          </div>
          <div className="tool-field">
            <label className="label" htmlFor={`${id}-brand`}>Brand / store name</label>
            <input id={`${id}-brand`} className="input" type="text" value={brand} onChange={(event) => setBrand(event.target.value)} />
          </div>
          <div className="tool-field">
            <label className="label" htmlFor={`${id}-diff`}>Differentiator <span className="muted">(optional)</span></label>
            <input id={`${id}-diff`} className="input" type="text" placeholder="e.g. Free shipping over $50" value={differentiator} onChange={(event) => setDifferentiator(event.target.value)} />
            <p className="tool-field__hint">One concrete reason to choose you. Added to the descriptions.</p>
          </div>
        </div>
        <div className="tool-card__results tool-card__results--list" aria-live="polite">
          {variants.length === 0 ? (
            <p className="tool-field__hint">Enter a keyword and a brand name to generate variants.</p>
          ) : (
            variants.map((variant, index) => (
              <div className="meta-variant" key={index}>
                <div className="meta-variant__head">
                  <span className="tool-result__label">Variant {index + 1}</span>
                  <button type="button" className="button button--ghost button--sm" onClick={() => copy(index, `${variant.title}\n${variant.description}`)}>
                    {copied === index ? "Copied" : "Copy"}
                  </button>
                </div>
                <p className="meta-variant__title">{variant.title}</p>
                <p className="meta-variant__desc">{variant.description}</p>
                <p className="meta-variant__counts">
                  <span className={variant.titleWithinLimit ? undefined : "meta-variant__over"}>
                    title {variant.titleLength}/{TITLE_LIMIT}
                  </span>
                  {" · "}
                  <span className={variant.descriptionWithinLimit ? undefined : "meta-variant__over"}>
                    description {variant.descriptionLength}/{DESCRIPTION_LIMIT}
                  </span>
                </p>
              </div>
            ))
          )}
        </div>
      </div>
      <p className="tool-card__foot">Template-built drafts to edit, not final copy. Runs entirely in your browser; nothing you type is stored or sent anywhere.</p>
    </div>
  );
}
