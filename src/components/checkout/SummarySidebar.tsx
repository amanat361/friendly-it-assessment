const facts = [
  { label: "Items", value: "3" },
  { label: "Shipping", value: "Free" },
  { label: "Tax", value: "$12.83" },
  { label: "Total", value: "$128.82" },
];

export default function SummarySidebar() {
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden border border-foreground bg-foreground text-background">
        <div className="absolute inset-0 opacity-[0.08]">
          <svg
            className="h-full w-full"
            viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="cross"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path d="M10 6 V14 M6 10 H14" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#cross)" />
          </svg>
        </div>

        <div className="relative px-7 py-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="smallcaps text-[0.65rem] text-background/60">
              At a glance
            </span>
            <span className="font-mono text-[0.65rem] text-background/60">
              ◐
            </span>
          </div>

          <h3 className="font-display-italic text-3xl leading-none text-background">
            Your order
          </h3>

          <div className="mt-6 grid grid-cols-2 divide-x divide-y divide-background/15 border-t border-background/15">
            {facts.map((f) => (
              <div key={f.label} className="px-4 py-4">
                <p className="smallcaps text-[0.6rem] text-background/55">
                  {f.label}
                </p>
                <p
                  className={
                    "mt-1 font-mono tabular-nums " +
                    (f.label === "Total"
                      ? "text-xl text-accent"
                      : "text-base text-background")
                  }
                >
                  {f.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-background/15 pt-4">
            <p className="smallcaps text-[0.6rem] text-background/55">
              Estimated delivery
            </p>
            <p className="mt-1 font-display-italic text-lg text-background">
              May 28 — June 2
            </p>
          </div>
        </div>
      </div>

      <div className="paper-card px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-foreground">
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 text-foreground"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 5 L8 9 L13 5" />
              <rect x="3" y="3" width="10" height="10" />
            </svg>
          </div>
          <div>
            <p className="font-display-italic text-base text-foreground">
              Need a hand?
            </p>
            <p className="text-xs text-muted-foreground">
              Our shopkeepers are at the counter{" "}
              <span className="font-mono">9–5 PT</span>, Mon–Fri.
            </p>
            <a className="mt-1 inline-block smallcaps text-[0.65rem] text-primary underline decoration-dotted underline-offset-4">
              Send a telegram →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
