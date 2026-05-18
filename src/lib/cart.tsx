import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { arrivalBy } from "./format";

export type CartItem = {
  id: number;
  name: string;
  img: string;
  variant: string;
  price: number;
  stock: number;
};

const ITEMS: CartItem[] = [
  {
    id: 1,
    name: "Maple Cutting Board",
    img: "/maple-board.jpg",
    variant: 'Natural · Large 18"',
    price: 64,
    stock: 8,
  },
  {
    id: 2,
    name: "Stoneware Mug Set",
    img: "/mug-set.jpg",
    variant: "Clay · Set of 4",
    price: 38,
    stock: 12,
  },
];

export type ShippingOption = {
  id: string;
  name: string;
  eta: string;
  price: number;
  days: number;
};

export const SHIPPING: ShippingOption[] = [
  { id: "standard", name: "Standard", eta: "5–7 business days", price: 9, days: 7 },
  { id: "express", name: "Express", eta: "2–3 business days", price: 19, days: 3 },
  { id: "overnight", name: "Overnight", eta: "Next business day", price: 39, days: 1 },
];

const TAX_RATE = 0.09164;
const SPRING_DISCOUNT = -14;

type CartCtx = {
  items: CartItem[];
  qty: Record<number, number>;
  setQty: (id: number, n: number) => void;
  remove: (id: number) => void;
  shippingId: string;
  setShippingId: (id: string) => void;
  subtotal: number;
  shippingCost: number;
  tax: number;
  discount: number;
  total: number;
  arrival: string;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [qty, setQtyState] = useState<Record<number, number>>({ 1: 1, 2: 2 });
  const [removed, setRemoved] = useState<number[]>([]);
  const [shippingId, setShippingId] = useState("standard");

  const value = useMemo<CartCtx>(() => {
    const items = ITEMS.filter((i) => !removed.includes(i.id));
    const subtotal = items.reduce((s, i) => s + i.price * (qty[i.id] ?? 1), 0);
    const ship = SHIPPING.find((s) => s.id === shippingId) ?? SHIPPING[0];
    const shippingCost = ship.price;
    const discount = items.length ? SPRING_DISCOUNT : 0;
    const tax = Math.round(subtotal * TAX_RATE * 100) / 100;
    const total = subtotal + shippingCost + tax + discount;
    const arrival = arrivalBy(ship.days);
    return {
      items,
      qty,
      setQty: (id, n) => setQtyState((q) => ({ ...q, [id]: Math.max(1, n) })),
      remove: (id) => setRemoved((r) => [...r, id]),
      shippingId,
      setShippingId,
      subtotal,
      shippingCost,
      tax,
      discount,
      total,
      arrival,
    };
  }, [qty, removed, shippingId]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}
