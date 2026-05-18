import { useState } from "react";

const items = [
  {
    id: 1,
    name: "Maple Cutting Board",
    img: "https://images.unsplash.com/photo-1594224457860-02f4f2b1f9b6?w=300&q=80",
    color: "Natural",
    size: 'Large (18")',
    qty: 1,
    price: 64,
    stock: 8,
  },
  {
    id: 2,
    name: "Stoneware Mug Set",
    img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&q=80",
    color: "Clay",
    size: "Set of 4",
    qty: 2,
    price: 38,
    stock: 12,
  },
];

export default function CartLineItem() {
  const [qtys, setQtys] = useState<Record<number, number>>({ 1: 1, 2: 2 });

  return (
    <div className="rounded-lg border border-border bg-card">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex gap-5 border-b border-border p-5 transition-transform last:border-b-0 hover:-translate-y-1 hover:bg-gray-100"
        >
          <img
            src={item.img}
            alt={item.name}
            className="h-28 w-28 shrink-0 rounded-xl object-cover"
          />

          <div className="flex flex-1 flex-col gap-1">
            <p className="text-foreground">{item.name}</p>
            <p className="text-foreground">Color: {item.color}</p>
            <p className="text-foreground">Size: {item.size}</p>
            <p className="text-foreground">In stock: {item.stock}</p>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-foreground">Qty:</span>
              <input
                type="number"
                min={1}
                value={qtys[item.id]}
                onChange={(e) =>
                  setQtys((q) => ({ ...q, [item.id]: Number(e.target.value) }))
                }
                className="w-16 rounded border border-input px-2 py-1"
              />
            </div>
          </div>

          <div className="flex flex-col items-end justify-between">
            <p className="text-foreground">Price: ${item.price}</p>
            <button className="text-sm text-blue-600 underline">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}
