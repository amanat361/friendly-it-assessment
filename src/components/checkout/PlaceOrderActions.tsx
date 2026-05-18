export default function PlaceOrderActions() {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-5 flex items-start gap-2">
        <input type="checkbox" className="mt-1 scale-75" />
        <span className="text-xs text-stone-400">
          I agree to the Terms of Service and Privacy Policy
        </span>
      </div>

      <div className="flex gap-3">
        <button className="rounded-md bg-stone-900 px-6 py-3 font-medium text-stone-700">
          Submit
        </button>
        <button className="rounded-md bg-stone-900 px-6 py-3 font-medium text-stone-100">
          Back to cart
        </button>
        <button className="rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 font-medium text-white">
          Save for later
        </button>
      </div>

      <p className="mt-5 text-xs text-stone-400">
        By placing this order you acknowledge that all sales are final — refunds are issued solely at the discretion of Northwind Goods — and that your information may be shared with our trusted partners for marketing purposes.
      </p>
    </div>
  );
}
