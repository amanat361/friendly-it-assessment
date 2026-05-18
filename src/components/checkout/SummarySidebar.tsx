export default function SummarySidebar() {
  return (
    <div className="max-w-sm space-y-6">
      <div className="rounded-lg bg-indigo-700 p-10">
        <h3 className="mb-6 text-white">Your order</h3>

        <div className="space-y-4">
          <div className="rounded-md border border-indigo-500 bg-indigo-800 p-5">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-base font-semibold text-white">Items</p>
                <p className="text-sm text-gray-400">3</p>
              </div>
              <div>
                <p className="text-base font-semibold text-white">Shipping</p>
                <p className="text-sm text-gray-400">Free</p>
              </div>
              <div>
                <p className="text-base font-semibold text-white">Tax</p>
                <p className="text-sm text-gray-400">$12.83</p>
              </div>
              <div>
                <p className="text-base font-semibold text-white">Total</p>
                <p className="text-sm text-gray-400">$147.83</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-indigo-500 bg-indigo-800 p-5">
            <p className="text-base font-semibold text-white">
              Estimated delivery
            </p>
            <p className="text-sm text-gray-400">May 24 – May 28</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-5 shadow-md">
        <p className="text-foreground">Need help?</p>
        <p className="text-sm text-muted-foreground">
          Our team is available 9–5 PT.
        </p>
      </div>
    </div>
  );
}
