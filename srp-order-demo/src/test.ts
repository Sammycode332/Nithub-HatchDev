import assert from 'node:assert';
import { Database } from './Database';
import { Order } from './Order';

/**
 * Goal: unit test calculateTotalSum() — pure arithmetic over an array.
 * It should not be possible to do this without standing up a database.
 * That's the point. Try deleting the Database/SQL lines below and see
 * how far you get.
 */
function testCalculateTotalSum() {
  // To get an Order instance at all, Order's constructor demands a Database
  // and immediately calls load(), which fires a real SQL query.
  const db = new Database(':memory:'); // in-memory, but still a real DB engine
  db.execute('INSERT INTO orders (id, items) VALUES (?, ?)', [
    'test-order',
    JSON.stringify([
      { id: 'a', name: 'Widget', price: 10, quantity: 2 }, // 20
      { id: 'b', name: 'Gadget', price: 5.5, quantity: 4 }, // 22
    ]),
  ]);

  const order = new Order('test-order', db);

  assert.strictEqual(order.calculateTotalSum(), 42, 'expected 20 + 22 = 42');
  console.log('PASS: calculateTotalSum() == 42');

  db.close();
}

testCalculateTotalSum();
