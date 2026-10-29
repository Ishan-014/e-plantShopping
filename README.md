# Paradise Nursery

Paradise Nursery is an online plant shop built with React, Vite and Redux Toolkit. Visitors land on a welcome page that introduces the company, then browse houseplants grouped into categories (air purifying, aromatic fragrant and low maintenance plants), each with a photo, description and price.

Plants can be added to a shopping cart, where shoppers can change quantities, remove items, see each plant's subtotal and the total cart amount, and continue shopping or check out.

## Features

- Landing page with a full-screen background, company tagline, About Us section and a **Get Started** button
- Product listing with 3 categories and 6 plants each, with **Add to Cart** buttons that disable once a plant is in the cart
- Navbar with Home, Plants and a cart icon showing the live number of items in the cart
- Shopping cart with +/− quantity controls, Delete, per-item subtotals, total amount, Continue Shopping and Checkout (coming soon)
- Cart state managed with Redux Toolkit (`CartSlice.jsx`, `store.js`)

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build`.
