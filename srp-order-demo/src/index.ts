import { Database } from './Database';
import { Order } from './Order';

const db = new Database('orders.db');

// This single line does a LOT: it opens (implicitly, via Database) a connection,
// queries SQLite, deserializes JSON, AND builds you a business object.
const order = new Order('order-1', db);

order.printOrder();
console.log('showOrder():', order.showOrder());
console.log('itemCount:', order.getItemCount());

order.addItem({ id: 'p99', name: 'Mouse Pad', price: 12.99, quantity: 1 });
order.update();



console.log('\nAfter adding an item + update():');
const reloaded = new Order('order-1', db);
reloaded.printOrder();

db.close();
