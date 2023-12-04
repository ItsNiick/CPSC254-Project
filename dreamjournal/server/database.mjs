// database.mjs
import sqlite3 from 'sqlite3';
import fs from 'fs/promises'; // Import 'fs/promises' for reading files asynchronously
import logger from '../logger.js';

const db = new sqlite3.Database('../database/dreams.db');

// Function to initialize the database and create tables (if needed)
async function initializeDatabase() {
    try {
        const schema = await fs.readFile('../database/dreams.sql', 'utf8');
        db.exec(schema);
        logger.info('Database schema initialized.');
    } catch (err) {
        logger.error('Error executing SQL schema:', err);
        console.error('Error executing SQL schema:', err);
    }
}

// Function to fetch all dream entries
function getAllDreams(callback) {
    db.all('SELECT * FROM dreams', (err, rows) => {
        if (err) {
            logger.error('Error fetching dream entries:', err);
            callback(err, null);
        } else {
            callback(null, rows);
        }
    });
}

// Function to add a new dream entry
function addDream(title, description, date) {
    const currentDate = new Date().toISOString();

    db.run(
        'INSERT INTO dreams (title, description, date) VALUES (?, ?, ?)',
        [title, description, currentDate],
        (err) => {
            if (err) {
                logger.error('Error adding a dream entry:', err);
                reject(err); // Reject the promise with an error
            } else {
                logger.info('Dream entry added.');
                resolve(); // Resolve the promise (no error)
            }
        }
    );
}

// Function to update a dream entry by its ID
function updateDream(id, title, description, date, callback) {
    db.run(
        'UPDATE dreams SET title=?, description=?, date=? WHERE id=?',
        [title, description, date, id],
        (err) => {
            if (err) {
                logger.error('Error updating a dream entry:', err);
                callback(err);
            } else {
                logger.info('Dream entry updated.');
                callback(null);
            }
        }
    );
}

export {
    initializeDatabase,
    getAllDreams,
    addDream,
    updateDream,
};
