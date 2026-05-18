import { useState } from "react";

const methods = [
  { id: "standard", name: "Standard", eta: "5–7 business days", price: "$9.00", py: "py-2" },
  { id: "express", name: "Express", eta: "2–3 business days", price: "$19.00", py: "py-4" },
  { id: "overnight", name: "Overnight", eta: "Next business day", price: "$39.00", py: "py-4" },
];

export default function ShippingMethod() {
  const [selected, setSelected] = useState("standard");

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-foreground">Shipping method</h3>

      <div className="divide-y divide-border">
        {methods.map((m) => (
          <label
            key={m.id}
            className={
              "flex cursor-pointer items-center gap-3 px-2 " +
              m.py +
              (selected === m.id ? " bg-blue-500/5" : "")
            }
          >
            <input
              type="radio"
              name="shipping"
              checked={selected === m.id}
              onChange={() => setSelected(m.id)}
            />
            <span className="flex-1 text-foreground">
              {m.name}: {m.price} — {m.eta}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
