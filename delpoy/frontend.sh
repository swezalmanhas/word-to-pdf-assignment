#!/bin/bash

# Bash script to set up and run the frontend for the word-pdf project.

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Setting up the frontend for the Word-PDF project..."

# Navigate to the frontend directory
cd frontend

# Install dependencies
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install
else
    echo "Frontend dependencies are already installed."
fi

# Start the frontend server
echo "Starting the frontend server..."
npm start
