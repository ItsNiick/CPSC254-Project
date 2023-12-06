import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { db } from './db.js';

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

// API endpoint to save a dream
app.post('/api/dreams', async (req, res) => {
  const { title, description, date } = req.body;
  db.run('INSERT INTO dreams (title, description, date) VALUES (?, ?, ?)', [title, description, date], (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.status(201).json({ message: 'Dream saved successfully' });
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

// API endpoint to update a dream's description
app.put('/api/dreams/:id', async (req, res) => {
  const dreamId = req.params.id;
  const { description } = req.body;

  db.run('UPDATE dreams SET description = ? WHERE id = ?', [description, dreamId], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Dream description updated successfully');
    }
  });
});

// API endpoint to delete a dream
app.delete('/api/dreams/:id', async (req, res) => {
  const dreamId = req.params.id;

  db.run('DELETE FROM dreams WHERE id = ?', [dreamId], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).send('Dream deleted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
