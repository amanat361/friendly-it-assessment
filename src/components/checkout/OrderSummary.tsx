import { money } from "../../lib/format";
import { useCart } from "../../lib/cart";
import PromoCode from "./PromoCode";

export default function OrderSummary() {
  const { subtotal, shippingCost, tax, discount, total } = useCart();

  const rows = [
    { label: "Subtotal", value: subtotal },
    { label: "Shipping", value: shippingCost },
    { label: "Estimated tax", value: tax },
    { label: "Discount · SPRING", value: discount, positive: true },
  ];

  return (
    <div>
      <h2 className="mb-5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Order summary
      </h2>

      <dl className="space-y-3">
        {rows.map((r) => (
          <div key={r.label} className="flex items-baseline justify-between">
            <dt className="text-sm text-muted-foreground">{r.label}</dt>
            <dd
              className={
                "tabular-nums " +
                (r.positive ? "text-success" : "text-foreground")
              }
            >
              {r.value < 0 ? `−${money(-r.value)}` : money(r.value)}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 border-t border-border pt-4">
        <PromoCode />
      </div>

      <div className="mt-4 flex items-baseline justify-between border-t border-border pt-5">
        <span className="text-sm text-muted-foreground">Total</span>
        <span className="font-display text-3xl tabular-nums text-foreground">
          {money(total)}
        </span>
      </div>
    </div>
  );
}
