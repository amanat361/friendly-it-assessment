import { Check } from "lucide-react";

const steps = [
  { label: "Cart", state: "done" },
  { label: "Shipping", state: "active" },
  { label: "Payment", state: "upcoming" },
  { label: "Review", state: "upcoming" },
] as const;

const activeIndex = steps.findIndex((s) => s.state === "active");

export default function CheckoutStepper() {
  return (
    <nav aria-label="Checkout progress">
      {/* Compact, for small screens */}
      <div className="sm:hidden">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-sm font-medium text-foreground">
            {steps[activeIndex].label}
          </span>
          <span className="text-xs text-muted-foreground">
            Step {activeIndex + 1} of {steps.length}
          </span>
        </div>
        <div className="flex gap-1">
          {steps.map((s, i) => (
            <span
              key={s.label}
              className={
                "h-1 flex-1 rounded-full " +
                (i <= activeIndex ? "bg-primary" : "bg-border")
              }
            />
          ))}
        </div>
      </div>

      {/* Full, for sm and up */}
      <ol className="hidden items-center sm:flex">
        {steps.map((s, i) => {
          const done = s.state === "done";
          const active = s.state === "active";
          return (
            <li key={s.label} className="flex flex-1 items-center last:flex-none">
              <div className="flex items-center gap-2">
                <span
                  aria-current={active ? "step" : undefined}
                  className={
                    "flex size-6 items-center justify-center rounded-full text-xs tabular-nums " +
                    (done
                      ? "bg-primary text-primary-foreground"
                      : active
                        ? "ring-2 ring-primary text-primary"
                        : "bg-sunken text-muted-foreground")
                  }
                >
                  {done ? <Check className="size-3.5" /> : i + 1}
                </span>
                <span
                  className={
                    "text-sm " +
                    (active
                      ? "text-foreground"
                      : done
                        ? "text-foreground/75"
                        : "text-muted-foreground")
                  }
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <span
                  className={
                    "mx-3 h-px flex-1 " + (done ? "bg-primary" : "bg-border")
                  }
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
