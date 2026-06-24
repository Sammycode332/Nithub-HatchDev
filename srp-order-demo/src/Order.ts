import { Item } from './Item';
import { Database } from './Database';

/**
 * "WHAT IS WRONG?" — this is the slide's bad example, fully implemented.
 * Business logic, persistence, and presentation are all welded into one class.
 */
export class Order {
  private id: string;
  private items: Item[] = [];
  private db: Database;

  constructor(orderId: string, db: Database) {
    this.id = orderId;
    this.db = db;
    this.load(orderId); // hydrates from the DB the moment you construct an Order
  }

  calculateTotalSum(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getItems(): Item[] {
    return this.items;
  }

  getItemCount(): number {
    return this.items.length;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  removeItem(item: Item): void {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  printOrder(): void {
    console.log(`Order #${this.id}`);
    this.items.forEach((i) => console.log(`  - ${i.name} x${i.quantity}: $${i.price.toFixed(2)}`));
    console.log(`  Total: $${this.calculateTotalSum().toFixed(2)}`);
  }

  showOrder(): string {
    return this.items.map((i) => `${i.name} (${i.quantity})`).join(', ');
  }

  load(orderId: string): void {
    const row = this.db.query('SELECT items FROM orders WHERE id = ?', [orderId]);
    this.items = row ? JSON.parse(row.items as string) : [];
  }

  save(): void {
    this.db.execute('INSERT OR REPLACE INTO orders (id, items) VALUES (?, ?)', [
      this.id,
      JSON.stringify(this.items),
    ]);
  }

  update(): void {
    this.db.execute('UPDATE orders SET items = ? WHERE id = ?', [
      JSON.stringify(this.items),
      this.id,
    ]);
  }

  delete(): void {
    this.db.execute('DELETE FROM orders WHERE id = ?', [this.id]);
  }
}
