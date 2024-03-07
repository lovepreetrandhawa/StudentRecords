#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Deploy the application to a server
# Replace the following line with your actual deployment command
# For example: scp -r ./build user@yourserver.com:/path/to/your/server/directory
echo "Deployment command goes here"

# Clear fields
echo "Clearing fields..."
curl -X POST -H "Content-Type: application/json" -d '{"name": "", "grade": ""}' http://localhost:3000/api/studentRecords
