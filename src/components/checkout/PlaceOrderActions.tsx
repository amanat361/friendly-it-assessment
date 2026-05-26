import { useState } from "react";

export default function PlaceOrderActions() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="paper-card px-6 py-7">
      <label className="mb-6 flex items-start gap-3 cursor-pointer group">
        <span
          onClick={() => setAgreed((v) => !v)}
          className={
            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors " +
            (agreed
              ? "border-primary bg-primary text-primary-foreground"
              : "border-input bg-transparent group-hover:border-foreground")
          }
        >
          {agreed && (
            <svg
              viewBox="0 0 16 16"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8.5 L7 12 L13 4" />
            </svg>
          )}
        </span>
        <span className="text-sm text-foreground/85">
          I agree to the{" "}
          <a className="underline decoration-dotted underline-offset-4 hover:text-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="underline decoration-dotted underline-offset-4 hover:text-primary">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <button
        disabled={!agreed}
        className="group relative flex w-full items-center justify-between border border-primary bg-primary px-6 py-5 text-primary-foreground transition-all hover:bg-foreground hover:border-foreground disabled:opacity-50 disabled:hover:bg-primary disabled:hover:border-primary"
      >
        <span className="flex items-center gap-3">
          <span className="font-display-italic text-2xl leading-none">
            Place order
          </span>
          <span className="smallcaps text-[0.65rem] text-primary-foreground/70">
            · sign & send ·
          </span>
        </span>
        <span className="flex items-center gap-3">
          <span className="font-mono text-base tabular-nums">$128.82</span>
          <svg
            viewBox="0 0 16 16"
            className="h-4 w-4 transition-transform group-hover:translate-x-1 group-disabled:group-hover:translate-x-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M2 8 H14 M10 4 L14 8 L10 12" />
          </svg>
        </span>
      </button>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button className="group flex items-center justify-center gap-2 border border-border bg-transparent px-4 py-3 text-foreground transition-colors hover:border-foreground">
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3 transition-transform group-hover:-translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M14 8 H2 M6 4 L2 8 L6 12" />
          </svg>
          <span className="smallcaps text-xs">Back to cart</span>
        </button>
        <button className="flex items-center justify-center gap-2 border border-dashed border-border bg-transparent px-4 py-3 text-foreground transition-colors hover:border-accent hover:text-accent">
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M4 2 V14 L8 11 L12 14 V2 Z" />
          </svg>
          <span className="smallcaps text-xs">Save for later</span>
        </button>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
        By placing this order you acknowledge that all sales are final — refunds
        are issued solely at the discretion of Northwind Goods — and that your
        information may be shared with our trusted partners for marketing
        purposes.
      </p>
    </div>
  );
}
