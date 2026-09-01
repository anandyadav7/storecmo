"use client";

import { useState } from "react";
import { breakEvenRoas } from "@/lib/calculators";
import { money, num, NumberField, percent, ResultRow, ToolCard } from "@/components/tools/fields";

const defaults = { price: "60", cogs: "22", fees: "3", shipping: "7" };

export default function BreakEvenRoasCalculator() {
  const [price, setPrice] = useState(defaults.price);
  const [cogs, setCogs] = useState(defaults.cogs);
  const [fees, setFees] = useState(defaults.fees);
  const [shipping, setShipping] = useState(defaults.shipping);

  const reset = () => {
    setPrice(defaults.price);
    setCogs(defaults.cogs);
    setFees(defaults.fees);
    setShipping(defaults.shipping);
  };

  const inputs = { price: num(price), cogs: num(cogs), fees: num(fees), shipping: num(shipping) };
  const ready = Object.values(inputs).every(Number.isFinite);
  const result = ready ? breakEvenRoas(inputs) : null;

  return (
    <ToolCard
      inputs={
        <>
          <NumberField label="Selling price" prefix="$" value={price} onChange={setPrice} hint="Average selling price of an ad-driven order, after discounts." />
          <NumberField label="Cost of goods" prefix="$" value={cogs} onChange={setCogs} hint="Landed product cost for that order." />
          <NumberField label="Fees" prefix="$" value={fees} onChange={setFees} hint="Payment processing and platform fees on the sale." />
          <NumberField label="Shipping cost" prefix="$" value={shipping} onChange={setShipping} hint="What shipping the order costs you." />
        </>
      }
      results={
        <>
          <ResultRow label="Contribution margin" value={result ? money(result.contribution) : "-"} />
          <ResultRow label="Margin of price" value={result ? percent(result.contributionMarginPct) : "-"} />
          <ResultRow
            label="Break-even ROAS"
            value={result ? (result.roas === null ? "n/a" : `${result.roas.toLocaleString("en-US", { maximumFractionDigits: 2 })}x`) : "-"}
            primary
            detail={
              result
                ? result.roas === null
                  ? "There is no margin left to pay for ads, so at these numbers no ROAS breaks even."
                  : "Below this, campaigns lose money on the first order. Set targets above it."
                : undefined
            }
          />
        </>
      }
      note="Example numbers. Replace them with a real product. Runs entirely in your browser; nothing is stored or sent anywhere."
      onReset={reset}
    />
  );
}
