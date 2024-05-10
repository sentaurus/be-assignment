# Use official Node.js image as base
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for Fastify server
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
