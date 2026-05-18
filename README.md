# Northwind Goods — Checkout

A checkout flow for Northwind Goods (a small homewares shop), put together quickly with AI assistance. We use it as the starting point for a short design-and-frontend conversation.

## Run it

```bash
bun install
bun run dev
```

Open the local URL Vite prints. The page is a single scroll through the checkout: cart items, cost breakdown, shipping address, promo code, the place-order step, and a few supporting pieces.

## Your task

Go through the checkout the way you would if a teammate asked you to look over their work before it shipped.

1. **Identify** what you'd change — visual, UX, accessibility, component choices, copy, anything that catches your eye.
2. **Prioritise.** You won't fix everything. What matters most, and what would you leave alone?
3. **Explain your reasoning.** For each thing: why is it a problem, and what specifically would you do instead? Where it's a judgment call or a trade-off, say so.
4. **Then fork the repo and open a PR** addressing the issues you'd prioritise, with a short rationale per change in the PR description.

We'll walk through it together live, so be ready to talk through your thinking and defend your calls. There's no fixed answer key you're trying to guess. We're interested in how you see, not how many things you can list.

## Stack

React + Vite + TypeScript + Tailwind (v4). Components are in `src/components/checkout/`. The design tokens are defined in `src/index.css`.
