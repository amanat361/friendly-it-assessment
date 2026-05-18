import { Check } from "lucide-react";
import { money, arrivalBy } from "../../lib/format";
import { SHIPPING, useCart } from "../../lib/cart";

export default function ShippingMethod() {
  const { shippingId, setShippingId } = useCart();

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
      <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Shipping method
      </h2>

      <div role="radiogroup" aria-label="Shipping method" className="space-y-3">
        {SHIPPING.map((m) => {
          const isSel = shippingId === m.id;
          return (
            <label key={m.id} className="block cursor-pointer">
              <input
                type="radio"
                name="shipping"
                value={m.id}
                checked={isSel}
                onChange={() => setShippingId(m.id)}
                className="peer sr-only"
              />
              <div
                className={
                  "flex items-center gap-4 rounded-lg border p-4 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-card " +
                  (isSel
                    ? "border-primary bg-sunken"
                    : "border-border hover:border-input")
                }
              >
                <span
                  className={
                    "flex size-5 shrink-0 items-center justify-center rounded-full border " +
                    (isSel
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input")
                  }
                >
                  {isSel && <Check className="size-3" />}
                </span>
                <span className="flex-1">
                  <span className="block font-medium text-foreground">
                    {m.name}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    Get it by{" "}
                    <span className="text-foreground">
                      {arrivalBy(m.days)}
                    </span>{" "}
                    · {m.eta}
                  </span>
                </span>
                <span className="font-medium tabular-nums text-foreground">
                  {money(m.price)}
                </span>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
