# Use an official Node.js image to install Bun
FROM node:18-bullseye-slim

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Set Bun as the default shell command
ENV PATH="/root/.bun/bin:$PATH"

# Copy the app files to the Docker container
WORKDIR /app
COPY . .

# Install dependencies
RUN bun install

# Expose the app's port
EXPOSE 5000

# Command to run the Elysia app
CMD ["bun", "run", "src/index.ts"]
