# Docker Setup for SAUX Component Library

This project includes Docker configuration for easy setup and development.

## Quick Start with Docker Compose

The simplest way to get started locally:

```bash
docker-compose up --build
```

Storybook will be available at `http://localhost:6006`

## Docker Commands

### Build the Docker image
```bash
docker build -t saux-component-library .
```

### Run development environment (with hot reload)
```bash
docker run -it --rm \
  -p 6006:6006 \
  -v $(pwd):/app \
  -v /app/node_modules \
  saux-component-library
```

### Run in production mode (build only, no Storybook)
```bash
docker run -it --rm \
  -e NODE_ENV=production \
  saux-component-library \
  pnpm run build
```

### Run Storybook build
```bash
docker run -it --rm \
  saux-component-library \
  pnpm run build-storybook
```

## What's Included

- **Dockerfile**: Multi-stage build for optimized image size
  - Build stage: Installs deps and builds the project + Storybook
  - Runtime stage: Lightweight Alpine Linux with only production dependencies

- **.dockerignore**: Excludes unnecessary files from Docker build context

- **docker-compose.yml**: Convenient dev environment with:
  - Volume mounts for hot reload
  - Port 6006 exposed for Storybook
  - Development environment configuration

## Local Development

### Using Docker Compose (recommended)
```bash
docker-compose up --build
```

### Without Docker Compose
```bash
# Build and run with volume mounts
docker run -it --rm \
  -p 6006:6006 \
  -v $(pwd):/app \
  -v /app/node_modules \
  --name saux-lib \
  saux-component-library
```

Access Storybook at `http://localhost:6006`

## Environment Variables

- `NODE_ENV`: Set to `production` to skip dev dependencies (default: `development`)

## Troubleshooting

**Port 6006 already in use?**
```bash
docker-compose down  # Stop existing container
docker-compose up --build
```

**Need to rebuild from scratch?**
```bash
docker-compose down -v  # Remove volumes
docker system prune -a  # Clean up all Docker resources
docker-compose up --build
```

**Want to run custom commands inside the container?**
```bash
docker-compose exec component-library pnpm <command>
```
