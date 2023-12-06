// db.js
import sqlite3 from 'sqlite3';

// Connect to the SQLite database
const db = new sqlite3.Database('dreams.db');

// Create dreams table if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS dreams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT
  )
`);

export { db }; // Export the database instance directly
