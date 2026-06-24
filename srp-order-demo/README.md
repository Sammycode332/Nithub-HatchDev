# SRP Violation Demo — Order class with a real SQLite backend

This is the "bad" `Order` class from the slides, now wired to an actual
database instead of a stubbed one — so the SRP violation isn't just an
assertion, it's something you can run into.

## Setup

```bash
npm install
```

Uses Node's **built-in** `node:sqlite` module (Node 22.5+), so there's no
native module to compile (no `better-sqlite3`, no node-gyp headaches).

## Scripts

```bash
npm run seed   # loads product data into orders.db
npm start      # constructs an Order from SQLite, prints it, mutates it, reloads it
npm test       # tries to unit test calculateTotalSum() — and shows the cost
```

### `seed.ts` — public API or hardcoded JSON

`seed.ts` first tries to fetch products from a public API
(`fakestoreapi.com`). If that's unreachable — e.g. a sandboxed environment
with no outbound network, or you're offline — it falls back to the
hardcoded `seedData.json` automatically. Either way you end up with an
`order-1` row in `orders.db` with a few line items. Run it once before
`npm start` or `npm test`.

### `index.ts` — the happy path

Just exercises the class normally: load an order, print it, add an item,
persist the change, reload it from disk to prove it stuck.

### `test.ts` — the actual point

This is the one worth reading closely. The goal is to unit test
`calculateTotalSum()` — a one-line `reduce` over an array, nothing more.
But because `Order`'s constructor *requires* a `Database` and immediately
calls `load()` (a real SQL query), there is no way to construct an `Order`
without first standing up a database and inserting a row into it — even
in-memory. A test of pure arithmetic ends up depending on SQL, JSON
serialization, and the schema of the `orders` table.

That's SRP in `Order`: "the pricing logic changed" and "the persistence
mechanism changed" are different reasons to change, but they're forced to
move together because they live in one class.

**Try it:** open `test.ts` and delete the `Database`/SQL lines, then try to
construct an `Order` with just a plain array of items. You can't — and
that's the refactor (`Order` / `OrderRepository` split from the earlier
"Better Code" slide) telling you it's overdue.
