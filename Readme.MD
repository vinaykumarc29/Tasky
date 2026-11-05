# Tasky Backend

A lightweight RESTful API for managing tasks, built with Node.js, Express, and MongoDB.

🚀🚀Deployed Link : https://tasky-nwzl.onrender.com

## Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- A MongoDB instance (local or MongoDB Atlas)

### 2. Installation
Clone the repository and install dependencies:

```bash
cd Tasky-Backend
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URL=your_mongodb_connection_string
PORT=your_port_number
```

### 4. Run the Server

- **Development mode** (with auto-reload):
  ```bash
  npm run dev
  ```
The server runs by default at `http://localhost:4000`.

---

## API Endpoints

Base URL: `http://localhost:4000`

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Health check & info | None |
| `GET` | `/docs` | API documentation summary | None |
| `GET` | `/api/task/` | Retrieve all tasks | None |
| `POST` | `/api/task/` | Create a new task | `{ "task": "Task description" }` |
| `GET` | `/api/task/:id` | Retrieve a task by ID | None |
| `PATCH` | `/api/task/:id` | Update an existing task | `{ "task": "Updated description" }` |
| `DELETE` | `/api/task/:id` | Delete a task by ID | None |

