import { DatabaseSync } from 'node:sqlite';

/**
 * Thin wrapper around node:sqlite (built into Node 22+, no native deps to compile).
 * Deliberately generic (query/execute) to mirror the kind of Database class
 * the "bad" Order class assumes already exists.
 */
export class Database {
  private db: DatabaseSync;

  constructor(filename: string = 'orders.db') {
    this.db = new DatabaseSync(filename);
    this.init();
  }

  private init(): void {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS orders (
        id TEXT PRIMARY KEY,
        items TEXT NOT NULL
      )
    `);
  }

  query(sql: string, params: unknown[] = []): any {
    return this.db.prepare(sql).get(...(params as any[]));
  }

  queryAll(sql: string, params: unknown[] = []): any[] {
    return this.db.prepare(sql).all(...(params as any[]));
  }

  execute(sql: string, params: unknown[] = []): void {
    this.db.prepare(sql).run(...(params as any[]));
  }

  close(): void {
    this.db.close();
  }
}
