# Use Node.js as base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application files
COPY . .

# Expose port
EXPOSE 4000

# Run the server
CMD ["npm", "start"]
