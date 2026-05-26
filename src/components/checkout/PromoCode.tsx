import { useState } from "react";

export default function PromoCode() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "applied" | "invalid">("idle");

  function apply() {
    setStatus(code.trim().toUpperCase() === "SPRING" ? "applied" : "invalid");
  }

  return (
    <div className="paper-card px-6 py-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="smallcaps text-[0.65rem] text-muted-foreground">
          Coupon · token · cipher
        </p>
        <p className="font-mono text-[0.65rem] text-muted-foreground">
          try · SPRING
        </p>
      </div>

      <div className="flex items-stretch gap-0 border border-input bg-background/40">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code"
          className="flex-1 bg-transparent px-4 py-3 font-mono text-sm uppercase tracking-[0.2em] text-foreground placeholder:text-muted-foreground placeholder:normal-case placeholder:tracking-normal focus:outline-none"
        />
        <button
          onClick={apply}
          className="group flex items-center gap-2 border-l border-input bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-foreground"
        >
          <span className="smallcaps text-xs">Apply</span>
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M3 8 H13 M9 4 L13 8 L9 12" />
          </svg>
        </button>
      </div>

      {status === "applied" && (
        <p className="mt-4 flex items-center gap-2 text-sm text-success">
          <span className="font-mono">↳</span>
          Discount applied — you saved{" "}
          <span className="font-mono">$5.00</span> on your order today.
        </p>
      )}
      {status === "invalid" && (
        <p className="mt-4 flex items-center gap-2 text-sm text-destructive">
          <span className="font-mono">✗</span>
          Unrecognized code. Try again.
        </p>
      )}
    </div>
  );
}
