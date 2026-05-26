export default function AddressForm() {
  return (
    <form className="paper-card px-6 py-7">
      <div className="mb-6 flex items-center justify-between">
        <p className="smallcaps text-[0.65rem] text-muted-foreground">
          To be inscribed
        </p>
        <span className="font-mono text-[0.65rem] text-muted-foreground">
          · post · parcel · packet ·
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <label className="field-label">Full name</label>
          <input type="text" placeholder="Eleanor Whitcomb" className="input-ink" />
        </div>

        <div>
          <label className="field-label">Street address</label>
          <input
            type="text"
            placeholder="1247 Northwind Row"
            className="input-ink"
          />
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2">
            <label className="field-label">City</label>
            <input
              type="text"
              placeholder="Portland"
              className="input-ink"
            />
          </div>
          <div>
            <label className="field-label">ZIP</label>
            <input
              type="text"
              placeholder="97214"
              className="input-ink font-mono"
            />
          </div>
        </div>

        <div>
          <label className="field-label">Country</label>
          <input
            type="text"
            placeholder="United States"
            className="input-ink"
          />
        </div>
      </div>
    </form>
  );
}
