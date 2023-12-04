//  express.js code
import express from 'express'; // Import the express.js library
import { initializeDatabase, getAllDreams, addDream, updateDream } from './database.mjs';


const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Initialize the database schema (call this during server startup)
initializeDatabase();

// API endpoint to retrieve dream journal entries
app.get('/api/dreams', (req, res) => {
   getAllDreams(function (err, data) {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(data);
        }
    });
});

// API endpoint to add a new dream journal entry
app.post('/api/dreams', async (req, res) => {
    const { title, description, date } = req.body;
    
    try {
        await addDream(title, description, date);
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// API endpoint to update a dream journal entry by its ID
app.put('/api/dreams/:id', (req, res) => {
    const { title, description, date } = req.body;
    const id = req.params.id;
    
    // Call the function to update the dream entry in the database
    updateDream(id, title, description, date, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.sendStatus(204); // Successful update (no content)
        }
    });
});


// Close the database connection when the application is shutting down
process.on('exit', () => {
    closeDatabase();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});