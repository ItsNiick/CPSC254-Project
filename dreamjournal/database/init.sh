# !/bin/bash

# Specify the name of the SQLite database file
DB_FILE="dreams.db"

# Check if the database file exists
if [ ! -e "$DB_FILE" ]; then
    # If it doesn't exist, execute the SQL file to initialize the database
    sqlite3 "$DB_FILE" < ./dreams.sql
    echo "SQLite database '$DB_FILE' initialized."
else
    echo "SQLite database '$DB_FILE' already exists."
fi