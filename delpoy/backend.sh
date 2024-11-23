#!/bin/bash

# Bash script to set up and run the backend for the word-pdf project.

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Setting up the backend for the Word-PDF project..."

# Navigate to the backend directory
cd backend

# Install dependencies
if [ ! -d "node_modules" ]; then
    echo "Installing backend dependencies..."
    npm install
else
    echo "Backend dependencies are already installed."
fi

# Start the backend server
echo "Starting the backend server..."
npm start
