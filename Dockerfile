# Build stage
FROM node:20-alpine AS builder

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy workspace files and package files
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./

# Copy all source and config files
COPY src/ ./src/
COPY tsconfig.json rollup.config.js vite.config.ts ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build the project
RUN pnpm run build

# Build storybook (optional - remove if not needed)
RUN pnpm run build-storybook

# Development/Production runtime stage
FROM node:20-alpine

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy workspace files from builder
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./

# Copy source and config files
COPY src/ ./src/
COPY tsconfig.json rollup.config.js vite.config.ts ./

# Install dependencies (production deps only by default)
RUN pnpm install --frozen-lockfile --prod=${NODE_ENV:-true}

# Copy built artifacts from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/storybook-static ./storybook-static

# Expose port for Storybook (if running in development)
EXPOSE 6006

# Default command - can be overridden
CMD ["pnpm", "storybook"]
