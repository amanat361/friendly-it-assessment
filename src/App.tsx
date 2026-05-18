import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import { CartProvider } from "./lib/cart";
import CartLineItem from "./components/checkout/CartLineItem";
import OrderSummary from "./components/checkout/OrderSummary";
import AddressForm from "./components/checkout/AddressForm";
import PlaceOrderActions from "./components/checkout/PlaceOrderActions";
import CheckoutStepper from "./components/checkout/CheckoutStepper";
import ShippingMethod from "./components/checkout/ShippingMethod";
import SummarySidebar from "./components/checkout/SummarySidebar";

const flow = [CartLineItem, ShippingMethod, AddressForm];

function Reveal({ i, children }: { i: number; children: ReactNode }) {
  return (
    <div className="reveal" style={{ animationDelay: `${i * 70}ms` }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <div className="min-h-full">
        <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center gap-5 px-4 py-3 sm:px-6">
            <div className="min-w-0 flex-1">
              <CheckoutStepper />
            </div>
            <div className="shrink-0 text-right leading-tight">
              <div className="font-display text-sm text-foreground sm:text-base">
                Northwind&nbsp;Goods
              </div>
              <div className="flex items-center justify-end gap-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px]">
                <Lock className="size-3" />
                Secure checkout
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:py-14">
          <div className="reveal mb-10 max-w-xl">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              Almost yours
            </p>
            <h1 className="mt-2 font-display text-3xl leading-tight text-foreground sm:text-4xl">
              Review &amp; complete your order
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-8">
              {flow.map((C, i) => (
                <Reveal key={i} i={i + 1}>
                  <C />
                </Reveal>
              ))}
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <Reveal i={2}>
                <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card shadow-soft">
                  <div className="p-6">
                    <OrderSummary />
                  </div>
                  <div className="p-6">
                    <SummarySidebar />
                  </div>
                  <div className="p-6">
                    <PlaceOrderActions />
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </main>

        <footer className="mx-auto max-w-5xl px-4 py-10 text-center text-xs text-muted-foreground sm:px-6">
          Northwind Goods · Small-batch homewares, made to last.
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
