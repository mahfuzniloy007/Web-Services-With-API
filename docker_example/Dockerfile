# Use the official Node.js image as base
FROM node:18-alpine

# Setup the working directory in the container
WORKDIR /

# Copy the package.json & installation dependeincies
COPY package*.json ./
RUN npm install

# Copy all of the app files
COPY . .

# Expose the port our app is running on
EXPOSE 4000

# Run the application with the command
CMD ["node", "app.js"]

