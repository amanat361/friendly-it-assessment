import { Truck, LifeBuoy } from "lucide-react";
import { useCart } from "../../lib/cart";

/**
 * Reassurance row. Holds NO order numbers — totals already live in the
 * Order summary; repeating them would be redundant.
 */
export default function SummarySidebar() {
  const { arrival } = useCart();

  return (
    <div className="space-y-3 text-sm">
      <p className="flex items-center gap-2.5 text-muted-foreground">
        <Truck className="size-4 shrink-0" />
        Get it by <span className="text-foreground">{arrival}</span>
      </p>
      <p className="flex items-center gap-2.5 text-muted-foreground">
        <LifeBuoy className="size-4 shrink-0" />
        Questions? We&rsquo;re here 9–5 PT.
      </p>
    </div>
  );
}
