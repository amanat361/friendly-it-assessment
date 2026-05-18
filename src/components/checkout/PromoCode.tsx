import { useState } from "react";
import { Check, AlertCircle, Tag, ChevronDown, X } from "lucide-react";
import { money } from "../../lib/format";

/** Embedded in the order summary — an expandable promo affordance. */
export default function PromoCode() {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "applied" | "invalid">("idle");

  function apply() {
    setStatus(code.trim().toUpperCase() === "SPRING" ? "applied" : "invalid");
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex w-full items-center justify-between rounded-lg py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
      >
        <span className="flex items-center gap-2">
          <Tag className="size-4" />
          Add a promo code
        </span>
        <ChevronDown className="size-4" />
      </button>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        apply();
      }}
    >
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor="promo" className="text-sm text-muted-foreground">
          Promo code
        </label>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setStatus("idle");
            setCode("");
          }}
          aria-label="Close promo code"
          className="flex size-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
        >
          <X className="size-4" />
        </button>
      </div>
      <div className="flex gap-2">
        <input
          id="promo"
          type="text"
          autoFocus
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="e.g. SPRING"
          className="min-w-0 flex-1 rounded-lg border border-input bg-sunken px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
        />
        <button
          type="submit"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-[filter] hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
        >
          Apply
        </button>
      </div>

      {status === "applied" && (
        <p className="mt-2 flex items-center gap-2 text-sm text-success">
          <Check className="size-4 shrink-0" />
          Promo applied. You saved {money(5)}.
        </p>
      )}
      {status === "invalid" && (
        <p className="mt-2 flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="size-4 shrink-0" />
          We couldn&rsquo;t find that code. Check it and try again.
        </p>
      )}
    </form>
  );
}
