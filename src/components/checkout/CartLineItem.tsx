import { useState } from "react";

const items = [
  {
    id: 1,
    name: "Maple Cutting Board",
    img: "https://images.unsplash.com/photo-1594224457860-02f4f2b1f9b6?w=400&q=80",
    color: "Natural",
    size: 'Large · 18"',
    qty: 1,
    price: 64,
    stock: 8,
    origin: "Vermont",
  },
  {
    id: 2,
    name: "Stoneware Mug Set",
    img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80",
    color: "Clay",
    size: "Set of 4",
    qty: 2,
    price: 38,
    stock: 12,
    origin: "Oaxaca",
  },
];

export default function CartLineItem() {
  const [qtys, setQtys] = useState<Record<number, number>>({ 1: 1, 2: 2 });

  function adjust(id: number, delta: number) {
    setQtys((q) => ({ ...q, [id]: Math.max(1, (q[id] ?? 1) + delta) }));
  }

  return (
    <div className="paper-card">
      {items.map((item, i) => (
        <article
          key={item.id}
          className={
            "group relative flex gap-6 px-6 py-6 transition-colors hover:bg-muted/40 " +
            (i < items.length - 1 ? "border-b border-border" : "")
          }
        >
          <span className="absolute left-0 top-6 font-mono text-[0.6rem] text-muted-foreground -translate-x-8 hidden lg:block">
            № {String(i + 1).padStart(2, "0")}
          </span>

          <div className="relative shrink-0">
            <img
              src={item.img}
              alt={item.name}
              className="h-28 w-28 object-cover grayscale-[15%] transition duration-500 group-hover:grayscale-0"
              style={{ borderRadius: 0 }}
            />
            <span className="absolute -bottom-2 -right-2 bg-foreground px-2 py-0.5 font-mono text-[0.6rem] text-background">
              {item.origin}
            </span>
          </div>

          <div className="flex flex-1 flex-col">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display-italic text-xl text-foreground">
                {item.name}
              </h3>
              <p className="font-mono text-base text-foreground tabular-nums">
                ${item.price.toFixed(2)}
              </p>
            </div>

            <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-sm">
              <dt className="smallcaps text-[0.65rem] text-muted-foreground">
                Hue
              </dt>
              <dd className="text-foreground/80">{item.color}</dd>
              <dt className="smallcaps text-[0.65rem] text-muted-foreground">
                Form
              </dt>
              <dd className="text-foreground/80">{item.size}</dd>
              <dt className="smallcaps text-[0.65rem] text-muted-foreground">
                Stock
              </dt>
              <dd className="font-mono text-foreground/80">
                {item.stock} on hand
              </dd>
            </dl>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center border border-border">
                <button
                  onClick={() => adjust(item.id, -1)}
                  className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="flex h-8 min-w-10 items-center justify-center border-x border-border bg-background/40 px-3 font-mono text-sm tabular-nums">
                  {qtys[item.id]}
                </span>
                <button
                  onClick={() => adjust(item.id, 1)}
                  className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button className="smallcaps text-[0.7rem] text-muted-foreground underline decoration-dotted underline-offset-4 transition-colors hover:text-destructive">
                Strike from order
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
