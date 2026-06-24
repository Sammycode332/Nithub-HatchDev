import { Database } from './Database';
import { Item } from './Item';
import fallbackProducts from './seedData.json';

const PUBLIC_API = 'https://fakestoreapi.com/products?limit=5';

interface RawProduct {
  id: string | number;
  name?: string;
  title?: string;
  price: number;
}

async function fetchProducts(): Promise<RawProduct[]> {
  try {
    const res = await fetch(PUBLIC_API, { signal: AbortSignal.timeout(3000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as RawProduct[];
  } catch (err) {
    console.log(`(public API unreachable — ${(err as Error).message}, using local seedData.json)`);
    return fallbackProducts as RawProduct[];
  }
}

function toItem(p: RawProduct, quantity: number): Item {
  return {
    id: String(p.id),
    name: p.name ?? p.title ?? 'Unknown item',
    price: p.price,
    quantity,
  };
}

async function seed() {
  const db = new Database('orders.db');
  const products = await fetchProducts();

  // Wipe and re-seed for a repeatable demo
  db.execute('DELETE FROM orders');

  const orderItems: Item[] = [
    toItem(products[0], 1),
    toItem(products[1], 2),
    toItem(products[2], 1),
  ];

  db.execute('INSERT INTO orders (id, items) VALUES (?, ?)', [
    'order-1',
    JSON.stringify(orderItems),
  ]);

  console.log(`Seeded order-1 with ${orderItems.length} line items into orders.db`);
  db.close();
}

seed();
