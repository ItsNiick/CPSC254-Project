// server.js
import express from 'express';
import bodyParser from 'body-parser';
import { db } from './db.js'; // Import the database instance directly

const app = express();
const port = 3000;

app.use(bodyParser.json());

// API endpoint to save a dream
app.post('/api/dreams', async (req, res) => {
  const { content } = req.body;
  db.run('INSERT INTO dreams (content) VALUES (?)', [content], (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(201).send('Dream saved successfully');
    }
  });
});

// API endpoint to get all dreams
app.get('/api/dreams', async (req, res) => {
  db.all('SELECT * FROM dreams', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
