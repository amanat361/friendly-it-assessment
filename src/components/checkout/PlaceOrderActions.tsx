import { useState } from "react";
import { Lock } from "lucide-react";
import { money } from "../../lib/format";
import { useCart } from "../../lib/cart";

export default function PlaceOrderActions() {
  const { total } = useCart();
  const [agreed, setAgreed] = useState(false);

  return (
    <div>
      <label
        htmlFor="terms"
        className="mb-5 flex cursor-pointer items-start gap-3 text-sm text-foreground"
      >
        <input
          id="terms"
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 size-4 shrink-0 accent-[var(--color-primary)]"
        />
        <span>
          I agree to the{" "}
          <a className="text-primary underline underline-offset-2" href="#">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="text-primary underline underline-offset-2" href="#">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <button
        type="button"
        disabled={!agreed}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-[filter,opacity] hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
      >
        <Lock className="size-4" />
        Place order · {money(total)}
      </button>

      <div className="mt-3 flex items-center justify-center gap-4 text-sm">
        <a
          href="#"
          className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
        >
          Back to cart
        </a>
        <span className="text-border">·</span>
        <a
          href="#"
          className="text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
        >
          Save for later
        </a>
      </div>

      <p className="mx-auto mt-5 max-w-[48ch] text-center text-xs leading-relaxed text-muted-foreground">
        All sales are final. Refunds are at the discretion of Northwind Goods.
        We never sell your information.
      </p>
    </div>
  );
}
