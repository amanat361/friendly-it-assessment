import CartLineItem from "./components/checkout/CartLineItem";
import OrderSummary from "./components/checkout/OrderSummary";
import AddressForm from "./components/checkout/AddressForm";
import PromoCode from "./components/checkout/PromoCode";
import PlaceOrderActions from "./components/checkout/PlaceOrderActions";
import CheckoutStepper from "./components/checkout/CheckoutStepper";
import ShippingMethod from "./components/checkout/ShippingMethod";
import SummarySidebar from "./components/checkout/SummarySidebar";

const sections = [
  { id: "cart", context: "Items in your cart", Component: CartLineItem },
  { id: "summary", context: "Cost breakdown", Component: OrderSummary },
  { id: "address", context: "Where we'll ship", Component: AddressForm },
  { id: "promo", context: "Apply a discount", Component: PromoCode },
  {
    id: "actions",
    context: "Review and place your order",
    Component: PlaceOrderActions,
  },
  { id: "stepper", context: "Where you are in checkout", Component: CheckoutStepper },
  { id: "shipping", context: "Choose how it ships", Component: ShippingMethod },
  { id: "recap", context: "Order recap", Component: SummarySidebar },
];

function App() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-14">
        <p className="text-sm tracking-wide text-muted-foreground">
          Northwind Goods
        </p>
        <h1 className="mt-1 text-2xl text-foreground">Checkout</h1>
      </header>

      <div className="space-y-16">
        {sections.map(({ id, context, Component }) => (
          <section key={id}>
            <p className="mb-3 text-sm text-muted-foreground">{context}</p>
            <Component />
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
