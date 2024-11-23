# Use a Node.js image with Debian base for better package support
FROM node:20-bullseye AS build-deps

# Set the working directory
WORKDIR /usr/src/app

# Copy package files for dependency installation
COPY package*.json /usr/src/app/

# Install dependencies
RUN npm install

# Install LibreOffice
RUN apt-get update && apt-get install -y libreoffice

# Copy the rest of the application files
COPY . /usr/src/app/

# Expose the application's port
EXPOSE 5000

# Start the application
CMD ["node", "app.js"]
