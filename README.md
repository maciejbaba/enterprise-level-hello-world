# Enterprise-Level Hello World

> A production-ready, enterprise-grade "Hello World" application demonstrating microservices architecture, containerization, and modern DevOps practices.

## 🏗️ Architecture

This application breaks down the classic "Hello World" message into individual microservices, where each letter is served by its own dedicated service. This ensures maximum scalability, maintainability, and enterprise compliance.

### Microservices Overview

- **Orchestrator Service** (Port 3000): Coordinates all letter services and assembles the final message
- **H Service** (Port 3001): Serves the letter "H"
- **E Service** (Port 3002): Serves the letter "E"  
- **L1 Service** (Port 3003): Serves the first "L"
- **L2 Service** (Port 3004): Serves the second "L"
- **O Service** (Port 3005): Serves the letter "O"
- **W Service** (Port 3006): Serves the letter "W"
- **R Service** (Port 3007): Serves the letter "R"
- **D Service** (Port 3008): Serves the letter "D"

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maciejbaba/enterprise-level-hello-world.git
   cd enterprise-level-hello-world
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run with Docker Compose (Recommended)**
   ```bash
   docker-compose up --build
   ```

4. **Or run locally**
   ```bash
   # Start all letter services
   npm run start:letters

   # In a new terminal, start the orchestrator
   npm start
   ```

### Access the Application

- **Main Application**: http://localhost:3000
- **Individual Letter Services**: http://localhost:3001-3008

## 📚 API Documentation

### Orchestrator Service (Port 3000)

#### `GET /`
Returns the complete "Hello World" message assembled from all microservices.

**Response:**
```json
{
  "message": "Hello World"
}
```

### Letter Services (Ports 3001-3008)

Each letter service provides the following endpoints:

#### `GET /letter`
Returns the specific letter for this service.

**Response:**
```json
{
  "letter": "H"
}
```

#### `GET /health`
Health check endpoint for monitoring.

**Response:**
```json
{
  "status": "healthy",
  "uptime": 12345.67
}
```

#### `GET /metrics`
Basic metrics for monitoring and observability.

**Response:**
```json
{
  "totalRequests": 42,
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## 🛠️ Development

### Available Scripts

- `npm start` - Start the orchestrator service
- `npm run start:letters` - Start all letter services concurrently
- `npm run start:h` - Start only the H service
- `npm run start:e` - Start only the E service
- `npm run start:l1` - Start only the first L service
- `npm run start:l2` - Start only the second L service
- `npm run start:o` - Start only the O service
- `npm run start:w` - Start only the W service
- `npm run start:r` - Start only the R service
- `npm run start:d` - Start only the D service

### Project Structure

```
├── src/
│   ├── letters/           # Individual letter microservices
│   │   ├── h.ts          # H letter service
│   │   ├── e.ts          # E letter service
│   │   ├── l1.ts         # First L letter service
│   │   ├── l2.ts         # Second L letter service
│   │   ├── o.ts          # O letter service
│   │   ├── w.ts          # W letter service
│   │   ├── r.ts          # R letter service
│   │   └── d.ts          # D letter service
│   └── orchestrator.ts   # Main orchestrator service
├── app.ts                # Simple Express app (legacy)
├── docker-compose.yml    # Docker Compose configuration
├── Dockerfile           # Container configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## 🐳 Docker

### Build and Run

```bash
# Build all services
docker-compose build

# Run all services
docker-compose up

# Run in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

### Individual Service Testing

You can test individual services:

```bash
# Test the orchestrator
curl http://localhost:3000

# Test individual letter services
curl http://localhost:3001/letter  # Returns {"letter": "H"}
curl http://localhost:3002/letter  # Returns {"letter": "E"}
# ... and so on
```

## 🔧 Configuration

### Environment Variables

Each service can be configured with environment variables:

- `PORT` - Port number for the service
- `H_SERVICE_URL` - URL for the H service (orchestrator only)
- `E_SERVICE_URL` - URL for the E service (orchestrator only)
- ... (similar for other services)

### Service URLs

By default, services communicate using Docker internal networking. For external testing, you can override service URLs:

```bash
export H_SERVICE_URL=http://localhost:3001
export E_SERVICE_URL=http://localhost:3002
# ... etc
```

## 🏢 Enterprise Features

- **Microservices Architecture**: Each letter runs as an independent service
- **Health Checks**: All services include `/health` endpoints
- **Metrics & Monitoring**: Request counting and basic metrics
- **Containerization**: Full Docker support with multi-service orchestration
- **CORS Support**: Cross-origin request handling
- **Error Handling**: Graceful failure handling with fallback responses
- **Scalability**: Each service can be scaled independently
- **Service Discovery**: Environment-based service URL configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🎯 Why This Exists

This project serves as a humorous yet educational example of:
- Over-engineering simple problems
- Microservices architecture principles
- Container orchestration
- Modern web development practices
- Enterprise software development patterns

Perfect for demonstrating how to make a simple "Hello World" application "enterprise-ready" with modern DevOps practices!

---

**Note**: This is a satirical project demonstrating enterprise software development patterns applied to the simplest possible application. It's both a learning tool and a gentle commentary on modern software complexity.