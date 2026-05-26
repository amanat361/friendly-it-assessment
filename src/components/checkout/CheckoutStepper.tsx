const steps = [
  { label: "Cart", done: true },
  { label: "Shipping", active: true },
  { label: "Payment" },
  { label: "Review" },
];

export default function CheckoutStepper() {
  return (
    <div className="paper-card px-8 py-6">
      <div className="flex items-center justify-between">
        {steps.map((s, i) => {
          const state = s.active ? "active" : s.done ? "done" : "todo";
          return (
            <div key={s.label} className="flex flex-1 items-center">
              <div className="flex items-center gap-3">
                <div
                  className={
                    "relative flex h-9 w-9 items-center justify-center font-mono text-sm transition-colors " +
                    (state === "active"
                      ? "bg-primary text-primary-foreground"
                      : state === "done"
                        ? "border border-foreground text-foreground"
                        : "border border-border text-muted-foreground")
                  }
                  style={{ borderRadius: 0 }}
                >
                  {s.done ? (
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M3 8.5 L7 12 L13 4" />
                    </svg>
                  ) : (
                    <span>{String(i + 1).padStart(2, "0")}</span>
                  )}
                  {state === "active" && (
                    <span className="absolute -inset-1 border border-primary/40" />
                  )}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="smallcaps text-[0.6rem] text-muted-foreground">
                    Step {i + 1}
                  </span>
                  <span
                    className={
                      "text-sm " +
                      (state === "active"
                        ? "font-display-italic text-base text-foreground"
                        : state === "done"
                          ? "text-foreground/80"
                          : "text-muted-foreground")
                    }
                  >
                    {s.label}
                  </span>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="mx-4 flex flex-1 items-center gap-1">
                  <span
                    className={
                      "h-px flex-1 " +
                      (s.done ? "bg-foreground" : "bg-border")
                    }
                  />
                  <span
                    className={
                      "font-mono text-[0.6rem] " +
                      (s.done ? "text-foreground" : "text-muted-foreground/60")
                    }
                  >
                    ✦
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
