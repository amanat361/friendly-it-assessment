const rows = [
  { label: "Subtotal", value: "$120.99" },
  { label: "Shipping", value: "$9.00" },
  { label: "Estimated tax", value: "$12.83" },
  { label: "Discount", note: "SPRING", value: "-$14.00", discount: true },
];

export default function OrderSummary() {
  return (
    <div className="paper-card overflow-hidden">
      <div className="border-b border-foreground/15 bg-foreground/[0.03] px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="smallcaps text-[0.65rem] text-muted-foreground">
            Folio
          </span>
          <span className="font-mono text-[0.7rem] text-muted-foreground">
            VIII.XXIV
          </span>
        </div>
      </div>

      <dl className="px-6 py-2">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-baseline gap-3 border-b border-border/60 py-3 last:border-b-0"
          >
            <dt className="text-sm text-foreground">
              {r.label}
              {r.note && (
                <span className="ml-2 inline-flex items-center font-mono text-[0.65rem] tracking-wider text-success">
                  · {r.note}
                </span>
              )}
            </dt>
            <span className="flex-1 border-b border-dotted border-border/80 translate-y-[-3px]" />
            <dd
              className={
                "font-mono text-sm tabular-nums " +
                (r.discount ? "text-success" : "text-foreground")
              }
            >
              {r.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="rule-double mx-6" />

      <div className="flex items-baseline gap-3 px-6 py-5">
        <dt className="font-display-italic text-2xl text-foreground">
          Order total
        </dt>
        <span className="flex-1" />
        <dd className="font-mono text-2xl tabular-nums text-foreground">
          $128.82
        </dd>
      </div>

      <div className="border-t border-border bg-success/5 px-6 py-3">
        <p className="flex items-center gap-2 text-xs text-success">
          <svg
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M2.5 8.5 L6 12 L13.5 4.5" />
          </svg>
          <span>
            <span className="smallcaps text-[0.68rem]">Saved </span>
            <span className="font-mono">$14.00</span>
            <span className="smallcaps text-[0.68rem]"> with code </span>
            <span className="font-mono">SPRING</span>
          </span>
        </p>
      </div>
    </div>
  );
}
