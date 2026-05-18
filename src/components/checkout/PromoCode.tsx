import { useState } from "react";

export default function PromoCode() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "applied" | "invalid">("idle");

  function apply() {
    setStatus(code.trim().toUpperCase() === "SPRING" ? "applied" : "invalid");
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-4 text-foreground">Have a promo code?</h3>

      <div className="flex gap-3">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code"
          className="flex-1 rounded border border-input bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          onClick={apply}
          className="rounded-md bg-primary px-6 py-2 font-semibold text-primary-foreground"
        >
          Apply
        </button>
      </div>

      {status === "applied" && (
        <p className="mt-3 text-sm text-green-600">
          Discount applied — you saved $5.00 on your order today!
        </p>
      )}
      {status === "invalid" && (
        <p className="mt-3 text-sm text-red-500">Invalid code</p>
      )}
    </div>
  );
}
