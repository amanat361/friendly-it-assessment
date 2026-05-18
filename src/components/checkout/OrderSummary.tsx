const rows = [
  { label: "Subtotal", value: "$140.00" },
  { label: "Shipping", value: "$9.00" },
  { label: "Estimated tax", value: "$12.83" },
  { label: "Discount (SPRING)", value: "-$14.00", discount: true },
];

export default function OrderSummary() {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-foreground">Order summary</h3>

      <div>
        {rows.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-2 gap-2 border-b border-border py-3"
          >
            <span className="text-foreground">{r.label}</span>
            <span
              className={
                r.discount ? "text-left text-green-600" : "text-left text-foreground"
              }
            >
              {r.value}
            </span>
          </div>
        ))}

        <div className="grid grid-cols-2 gap-2 border-b border-border py-3">
          <span className="font-bold text-foreground">Order total</span>
          <span className="text-left font-bold text-foreground">$147.83</span>
        </div>
      </div>

      <div className="mt-4 inline-block rounded bg-green-500/10 px-3 py-1 text-sm text-green-700/60">
        You saved $14.00 with code SPRING
      </div>
    </div>
  );
}
