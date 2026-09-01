"use client";

import { useState } from "react";
import { freeShippingThreshold } from "@/lib/calculators";
import { money, num, NumberField, ResultRow, ToolCard } from "@/components/tools/fields";

const defaults = { aov: "48", shipping: "8", margin: "50" };

export default function FreeShippingCalculator() {
  const [aov, setAov] = useState(defaults.aov);
  const [shipping, setShipping] = useState(defaults.shipping);
  const [margin, setMargin] = useState(defaults.margin);

  const reset = () => {
    setAov(defaults.aov);
    setShipping(defaults.shipping);
    setMargin(defaults.margin);
  };

  const inputs = { averageOrderValue: num(aov), shippingCost: num(shipping), grossMarginPct: num(margin) };
  const ready = Object.values(inputs).every(Number.isFinite);
  const result = ready ? freeShippingThreshold(inputs) : null;

  return (
    <ToolCard
      inputs={
        <>
          <NumberField label="Current average order value" prefix="$" value={aov} onChange={setAov} hint="Revenue divided by orders, or use the AOV calculator first." />
          <NumberField label="Shipping cost per order" prefix="$" value={shipping} onChange={setShipping} hint="What a typical order costs you to ship." />
          <NumberField label="Gross margin" suffix="%" value={margin} onChange={setMargin} hint="Revenue left after cost of goods, as a percentage." />
        </>
      }
      results={
        ready && result === null ? (
          <ResultRow label="Suggested threshold" value="n/a" primary detail="Gross margin has to be above zero. With no margin, added basket size cannot pay for shipping." />
        ) : (
          <>
            <ResultRow label="Extra basket revenue needed" value={result ? money(result.extraRevenueNeeded) : "-"} detail={result ? "The added revenue whose margin covers one order's shipping." : undefined} />
            <ResultRow label="Suggested threshold" value={result ? money(result.roundedThreshold) : "-"} primary detail={result ? `Exact break-even point: ${money(result.suggestedThreshold)}, rounded up to a number you can put in a banner.` : undefined} />
          </>
        )
      }
      note="Example numbers. Replace them with your store's. A starting point to test, not a guarantee. Runs entirely in your browser; nothing is stored or sent anywhere."
      onReset={reset}
    />
  );
}
