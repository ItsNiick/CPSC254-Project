-- Create a table to store dream journal entries
CREATE TABLE IF NOT EXISTS dreams (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   title TEXT NOT NULL,
   description TEXT,
   date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP);


-- Insert some initial data
INSERT INTO dreams (title, description, date) VALUES
   ('First Dream', 'This is my first dream journal entry.', '2023-12-10'),
   ('Second Dream', 'I had a strange dream last night.', '2023-12-11');