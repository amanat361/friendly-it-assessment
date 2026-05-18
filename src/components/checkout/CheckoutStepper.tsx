const steps = [
  { label: "Cart", done: true },
  { label: "Shipping", active: true },
  { label: "Payment" },
  { label: "Review" },
];

export default function CheckoutStepper() {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex items-center justify-center gap-4">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <div
                className={
                  "flex h-9 w-9 items-center justify-center rounded-full text-lg " +
                  (s.active
                    ? "bg-blue-500/10 text-blue-600"
                    : s.done
                      ? "text-blue-600"
                      : "text-stone-400")
                }
              >
                {s.done ? "✓" : i + 1}
              </div>
              <span
                className={
                  "text-sm " +
                  (s.active ? "font-bold text-foreground" : "text-stone-400")
                }
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="h-0.5 w-16 bg-blue-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
