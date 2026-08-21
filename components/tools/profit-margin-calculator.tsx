"use client";

import { useState } from "react";
import { profitMargin } from "@/lib/calculators";
import { money, num, NumberField, percent, ResultRow, ToolCard } from "@/components/tools/fields";

const defaults = { price: "60", cogs: "22", fees: "3", shipping: "7", adSpend: "12" };

export default function ProfitMarginCalculator() {
  const [price, setPrice] = useState(defaults.price);
  const [cogs, setCogs] = useState(defaults.cogs);
  const [fees, setFees] = useState(defaults.fees);
  const [shipping, setShipping] = useState(defaults.shipping);
  const [adSpend, setAdSpend] = useState(defaults.adSpend);

  const reset = () => {
    setPrice(defaults.price);
    setCogs(defaults.cogs);
    setFees(defaults.fees);
    setShipping(defaults.shipping);
    setAdSpend(defaults.adSpend);
  };

  const inputs = { price: num(price), cogs: num(cogs), fees: num(fees), shipping: num(shipping), adSpend: num(adSpend) };
  const ready = Object.values(inputs).every(Number.isFinite);
  const result = ready ? profitMargin(inputs) : null;

  return (
    <ToolCard
      inputs={
        <>
          <NumberField label="Selling price" prefix="$" value={price} onChange={setPrice} hint="What the customer pays for the order, after discounts." />
          <NumberField label="Cost of goods" prefix="$" value={cogs} onChange={setCogs} hint="What the products in the order cost you, landed." />
          <NumberField label="Fees" prefix="$" value={fees} onChange={setFees} hint="Payment processing, platform commission, per-order app charges." />
          <NumberField label="Shipping cost" prefix="$" value={shipping} onChange={setShipping} hint="What you pay to ship, beyond anything the customer pays." />
          <NumberField label="Ad spend per order" prefix="$" value={adSpend} onChange={setAdSpend} hint="A period's ad spend divided by the orders it produced." />
        </>
      }
      results={
        <>
          <ResultRow label="Total cost per order" value={result ? money(result.totalCost) : "—"} />
          <ResultRow label="Profit per order" value={result ? money(result.profit) : "—"} primary />
          <ResultRow
            label="Profit margin"
            value={result ? percent(result.marginPct) : "—"}
            detail={result && result.profit < 0 ? "This order loses money before fixed costs. Something has to change: price, costs, or ad spend." : undefined}
          />
        </>
      }
      note="Example numbers — replace them with one real order. Runs entirely in your browser; nothing is stored or sent anywhere."
      onReset={reset}
    />
  );
}
