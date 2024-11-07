# Use the official Bun image as the base
FROM oven/bun:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and bun.lockb first for faster caching
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of your application files
COPY . .

# Build your app (optional, if you use TypeScript)
RUN bun run build

# Expose the port your app runs on
EXPOSE 9000

# Command to run the application
CMD ["bun", "run", "dist/index.js"]
