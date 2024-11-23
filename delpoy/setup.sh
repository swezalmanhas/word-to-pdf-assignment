#!/bin/bash

# Bash script to set up and run the entire word-pdf project.

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Initializing Word-PDF project setup..."

# Clone the repository if it doesn't exist
if [ ! -d "word-pdf" ]; then
    echo "Cloning the repository..."
    git clone https://github.com/swezalmanhas/word-pdf.git
else
    echo "Repository already exists. Pulling the latest changes..."
    cd word-pdf
    git pull origin main
    cd ..
fi

# Navigate to the project directory
cd word-pdf

# Run backend setup and start
echo "Setting up the backend..."
bash backend.sh &
BACKEND_PID=$!

# Run frontend setup and start
echo "Setting up the frontend..."
bash frontend.sh &
FRONTEND_PID=$!

# Wait for user to stop the script
echo "Both servers are running. Press Ctrl+C to stop."

# Cleanup and stop servers when the script is terminated
trap "echo 'Stopping servers...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT

# Keep the script running
wait
