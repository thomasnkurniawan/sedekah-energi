#!/bin/bash

# Set variables
APP_DIR="/var/www/next-app"
REPO_URL="https://github.com/thomasnkurniawan/sedekah-energi.git"
APP_NAME="next-app"

echo "Starting update and deployment process for $APP_NAME..."

# Navigate to application directory
cd $APP_DIR || { echo "Application directory $APP_DIR not found! Exiting..."; exit 1; }

# Pull the latest changes from the repository
echo "Pulling latest changes from Git repository..."
git pull $REPO_URL || { echo "Failed to pull changes. Exiting..."; exit 1; }

# Install dependencies
echo "Installing updated dependencies..."
npm install || { echo "Failed to install dependencies. Exiting..."; exit 1; }

# Build the application
echo "Building the application..."
npm run build || { echo "Build failed! Check the logs for details. Exiting..."; exit 1; }

# Restart the application using PM2
echo "Restarting the application using PM2..."
pm2 restart $APP_NAME || { echo "Failed to restart the application. Exiting..."; exit 1; }

echo "Deployment completed successfully!"
