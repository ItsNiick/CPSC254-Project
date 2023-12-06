// db.js
import sqlite3 from 'sqlite3';

// Connect to the SQLite database
const db = new sqlite3.Database('dreams.db');

// Create dreams table if not exists
db.run(`
CREATE TABLE IF NOT EXISTS dreams (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   title TEXT NOT NULL,
   description TEXT,
   date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);
   
INSERT INTO dreams (title, description, date) VALUES
   ('First Dream', 'This is my first dream journal entry.', '2023-12-10'),
   ('Second Dream', 'I had a strange dream last night.', '2023-12-11');
`);

export { db }; // Export the database instance directly
