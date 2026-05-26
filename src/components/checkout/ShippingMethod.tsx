import { useState } from "react";

const methods = [
  {
    id: "standard",
    name: "Standard carriage",
    eta: "5–7 business days",
    price: "$9.00",
    glyph: "✦",
  },
  {
    id: "express",
    name: "Express post",
    eta: "2–3 business days",
    price: "$19.00",
    glyph: "✦✦",
  },
  {
    id: "overnight",
    name: "Overnight courier",
    eta: "Next business day",
    price: "$39.00",
    glyph: "✦✦✦",
  },
];

export default function ShippingMethod() {
  const [selected, setSelected] = useState("standard");

  return (
    <div className="paper-card">
      {methods.map((m, i) => {
        const isSelected = selected === m.id;
        return (
          <label
            key={m.id}
            className={
              "group relative flex cursor-pointer items-center gap-5 px-6 py-5 transition-colors " +
              (i < methods.length - 1 ? "border-b border-border " : "") +
              (isSelected ? "bg-primary/[0.04]" : "hover:bg-muted/40")
            }
          >
            <input
              type="radio"
              name="shipping"
              checked={isSelected}
              onChange={() => setSelected(m.id)}
              className="sr-only"
            />

            <span
              className={
                "relative flex h-5 w-5 shrink-0 items-center justify-center border transition-colors " +
                (isSelected
                  ? "border-primary"
                  : "border-input group-hover:border-foreground")
              }
            >
              {isSelected && (
                <span className="h-2 w-2 bg-primary" />
              )}
            </span>

            <div className="flex flex-1 items-baseline gap-3">
              <span
                className={
                  "transition-all " +
                  (isSelected
                    ? "font-display-italic text-lg text-foreground"
                    : "text-foreground/85")
                }
              >
                {m.name}
              </span>
              <span className="font-mono text-[0.65rem] text-accent">
                {m.glyph}
              </span>
            </div>

            <div className="flex flex-col items-end gap-0.5">
              <span className="font-mono text-sm tabular-nums text-foreground">
                {m.price}
              </span>
              <span className="smallcaps text-[0.6rem] text-muted-foreground">
                {m.eta}
              </span>
            </div>
          </label>
        );
      })}
    </div>
  );
}
