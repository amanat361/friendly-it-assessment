import CartLineItem from "./components/checkout/CartLineItem";
import OrderSummary from "./components/checkout/OrderSummary";
import AddressForm from "./components/checkout/AddressForm";
import PromoCode from "./components/checkout/PromoCode";
import PlaceOrderActions from "./components/checkout/PlaceOrderActions";
import CheckoutStepper from "./components/checkout/CheckoutStepper";
import ShippingMethod from "./components/checkout/ShippingMethod";
import SummarySidebar from "./components/checkout/SummarySidebar";

type SectionProps = {
  numeral: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

function Section({ numeral, eyebrow, title, children }: SectionProps) {
  return (
    <section className="relative">
      <div className="mb-5 flex items-baseline gap-4">
        <span className="font-mono text-xs text-muted-foreground">
          {numeral}
        </span>
        <div className="flex flex-1 items-baseline gap-3">
          <h2 className="font-display-italic text-2xl leading-none text-foreground">
            {title}
          </h2>
          <span className="smallcaps text-[0.65rem] text-muted-foreground">
            {eyebrow}
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      {/* Top utility bar */}
      <div className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-[0.7rem]">
          <span className="smallcaps text-muted-foreground">
            Est. 1947 — Portland, Oregon
          </span>
          <span className="flex items-center gap-2 smallcaps text-muted-foreground">
            <svg
              viewBox="0 0 16 16"
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <rect x="3" y="7" width="10" height="7" rx="1" />
              <path d="M5 7V4.5a3 3 0 0 1 6 0V7" />
            </svg>
            Secured ledger · TLS
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="rise flex items-end justify-between gap-6">
          <div>
            <p className="smallcaps mb-3 text-xs text-primary">
              Northwind Goods · Mercantile
            </p>
            <h1 className="font-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.9] tracking-tight text-foreground">
              Check
              <span className="font-display-italic text-primary">out</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A ledger of your selections, prepared with care. Confirm the
              details below and we'll dispatch from the Portland warehouse.
            </p>
          </div>
          <div className="hidden text-right md:block">
            <p className="smallcaps text-[0.65rem] text-muted-foreground">
              Order draft
            </p>
            <p className="font-mono text-sm text-foreground">№ NW-08421</p>
            <p className="mt-2 smallcaps text-[0.65rem] text-muted-foreground">
              Drawn this day
            </p>
            <p className="font-mono text-sm text-foreground">26 · V · 2026</p>
          </div>
        </div>

        <div className="draw-in mt-10 h-px w-full bg-foreground/80" />
        <div className="mt-1 h-px w-full bg-foreground/30" />
      </header>

      {/* Body */}
      <main className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rise mb-12" style={{ animationDelay: "0.1s" }}>
          <CheckoutStepper />
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          {/* Left column — main flow */}
          <div className="stagger space-y-14 lg:col-span-7">
            <Section numeral="I." eyebrow="Items in your cart" title="The goods">
              <CartLineItem />
            </Section>

            <Section
              numeral="II."
              eyebrow="Where we'll ship"
              title="Destination"
            >
              <AddressForm />
            </Section>

            <Section
              numeral="III."
              eyebrow="Choose how it ships"
              title="Carriage"
            >
              <ShippingMethod />
            </Section>

            <Section
              numeral="IV."
              eyebrow="Apply a discount"
              title="Promotional code"
            >
              <PromoCode />
            </Section>

            <Section
              numeral="V."
              eyebrow="Review and place your order"
              title="Sign the ledger"
            >
              <PlaceOrderActions />
            </Section>
          </div>

          {/* Right column — sticky ledger */}
          <aside className="lg:col-span-5">
            <div
              className="rise space-y-8 lg:sticky lg:top-8"
              style={{ animationDelay: "0.25s" }}
            >
              <div>
                <div className="mb-5 flex items-baseline gap-3">
                  <h2 className="font-display-italic text-2xl leading-none text-foreground">
                    The ledger
                  </h2>
                  <span className="smallcaps text-[0.65rem] text-muted-foreground">
                    Cost breakdown
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <OrderSummary />
              </div>

              <SummarySidebar />
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-[0.7rem]">
          <span className="smallcaps text-muted-foreground">
            © Northwind Goods · All carriage prepared with care
          </span>
          <span className="font-display-italic text-muted-foreground">
            "Honest goods, honestly sold."
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
