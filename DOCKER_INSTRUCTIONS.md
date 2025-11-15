# Running My Portfolio with Docker

## Prerequisites
- Install Docker Desktop from https://www.docker.com/products/docker-desktop

## Quick Start

### Option 1: Pull from Docker Hub
```bash
docker pull YOUR_DOCKERHUB_USERNAME/my-portfolio:latest
docker run -p 3000:3000 YOUR_DOCKERHUB_USERNAME/my-portfolio:latest
```

### Option 2: Build from Source
```bash
# Clone or download this repository
cd my-portfolio

# Build the image
docker build -t my-portfolio .

# Run the container
docker run -p 3000:3000 my-portfolio
```

## Access the Portfolio
Open your browser and go to: http://localhost:3000

## Stop the Container
Press `Ctrl + C` in the terminal

## Additional Commands

### Run in background (detached mode)
```bash
docker run -d -p 3000:3000 --name my-portfolio-app my-portfolio:latest
```

### Stop background container
```bash
docker stop my-portfolio-app
```

### Remove container
```bash
docker rm my-portfolio-app
```

### View running containers
```bash
docker ps
```