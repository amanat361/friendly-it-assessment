import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { money } from "../../lib/format";
import { useCart } from "../../lib/cart";

const iconBtn =
  "flex size-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card";

export default function CartLineItem() {
  const { items, qty, setQty, remove } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card px-6 py-14 text-center shadow-soft">
        <ShoppingBag className="size-7 text-muted-foreground" />
        <p className="font-medium text-foreground">Your cart is empty</p>
        <p className="text-sm text-muted-foreground">
          Add something you&rsquo;ll keep for years.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
      {items.map((item, i) => (
        <div
          key={item.id}
          className={
            "flex gap-5 p-5 " + (i > 0 ? "border-t border-border/70" : "")
          }
        >
          <img
            src={item.img}
            alt={item.name}
            width={96}
            height={96}
            loading="lazy"
            className="size-24 shrink-0 rounded-lg object-cover"
          />

          <div className="flex flex-1 flex-col">
            <p className="font-medium text-foreground">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.variant}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {item.stock} left in stock
            </p>

            <div className="mt-auto flex items-center gap-1.5 pt-3">
              <button
                type="button"
                onClick={() => setQty(item.id, (qty[item.id] ?? 1) - 1)}
                aria-label={`Decrease quantity of ${item.name}`}
                className={iconBtn}
              >
                <Minus className="size-3.5" />
              </button>
              <span className="w-8 text-center text-sm tabular-nums">
                {qty[item.id] ?? 1}
              </span>
              <button
                type="button"
                onClick={() => setQty(item.id, (qty[item.id] ?? 1) + 1)}
                aria-label={`Increase quantity of ${item.name}`}
                className={iconBtn}
              >
                <Plus className="size-3.5" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end justify-between">
            <p className="font-medium tabular-nums text-foreground">
              {money(item.price * (qty[item.id] ?? 1))}
            </p>
            <button
              type="button"
              onClick={() => remove(item.id)}
              aria-label={`Remove ${item.name}`}
              title="Remove"
              className="flex size-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
