import { useState } from "react";
import Select from "../ui/Select";

const field =
  "w-full rounded-lg border border-input bg-sunken px-3 py-2 text-foreground transition-colors placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card";
const labelCls = "mb-1.5 block text-sm font-medium text-foreground";

const countries = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "GB", label: "United Kingdom" },
  { value: "AU", label: "Australia" },
  { value: "DE", label: "Germany" },
];

export default function AddressForm() {
  const [country, setCountry] = useState("US");

  return (
    <form
      className="rounded-xl border border-border bg-card p-6 shadow-soft"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className="mb-5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Shipping address
      </h2>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="street" className={labelCls}>
            Street address
          </label>
          <input
            id="street"
            name="street"
            type="text"
            autoComplete="street-address"
            placeholder="123 Cedar Lane"
            className={field}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="city" className={labelCls}>
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Portland"
              className={field}
            />
          </div>
          <div>
            <label htmlFor="zip" className={labelCls}>
              ZIP / Postal code
            </label>
            <input
              id="zip"
              name="postalCode"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="97201"
              className={field}
            />
          </div>
        </div>

        <div>
          <label htmlFor="country" className={labelCls}>
            Country
          </label>
          <Select
            id="country"
            value={country}
            onChange={setCountry}
            options={countries}
          />
        </div>
      </div>
    </form>
  );
}
