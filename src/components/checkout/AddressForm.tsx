export default function AddressForm() {
  return (
    <form className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-5 text-foreground">Shipping address</h3>

      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded border border-input bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div>
          <label className="mb-4 block text-sm font-light text-stone-400">
            Street address
          </label>
          <input
            type="text"
            className="w-full rounded border border-input bg-transparent px-3 py-2 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-4 block text-sm font-light text-stone-400">
              City
            </label>
            <input
              type="text"
              className="w-full rounded border border-input bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="ZIP / Postal code"
              className="w-full rounded border border-input bg-transparent px-3 py-2 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Country"
            className="w-full rounded border border-input bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
    </form>
  );
}
