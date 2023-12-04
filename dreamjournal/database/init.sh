#!/bin/bash

# Specify the name of SQLite database file
DB_FILE="dreams.db"

echo exec('whoami');

# Remove the existing database file (if it exists)
if [ -e "$DB_FILE" ]; then
    rm "$DB_FILE"
fi

# Create a new SQLite database
sqlite3 "$DB_FILE" <<EOF
-- Create a table to store dream journal entries
CREATE TABLE IF NOT EXISTS dreams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Insert some initial data (optional)
INSERT INTO dreams (title, description) VALUES
    ('First Dream', 'This is my first dream journal entry.'),
    ('Second Dream', 'I had a strange dream last night.');
EOF

echo "SQLite database '$DB_FILE' initialized."
