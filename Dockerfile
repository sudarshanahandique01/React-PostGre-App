# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Install a lightweight web server
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 13000

# Start the app
CMD ["serve", "-s", "build", "-l", "13000"]

