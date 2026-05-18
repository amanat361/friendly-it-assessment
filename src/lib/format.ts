const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

/** Format a cent-safe dollar amount. Pass dollars (e.g. 64 or 12.83). */
export const money = (amount: number) => usd.format(amount);

const dateFmt = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});

/** Add N business days (skipping weekends) to `from`. */
function addBusinessDays(from: Date, days: number): Date {
  const d = new Date(from);
  let added = 0;
  while (added < days) {
    d.setDate(d.getDate() + 1);
    const day = d.getDay();
    if (day !== 0 && day !== 6) added += 1;
  }
  return d;
}

/** e.g. "Tue, May 27" — the latest business day N out from today. */
export const arrivalBy = (businessDays: number, from = new Date()) =>
  dateFmt.format(addBusinessDays(from, businessDays));
