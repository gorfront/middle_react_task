# To-Do List Server

This is a Node.js Express server written in TypeScript for managing a to-do list. You can add new tasks, remove tasks, change their status, and check pending or completed tasks.

## Features

- Add new to-do items
- Remove existing items
- Change status of tasks (pending/completed)
- View pending and completed tasks

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installation

```bash
yarn install
```

### Running the Server

The server runs on **port 5000**.

```bash
yarn start
```

## Project Structure

```
server/
├── src/
│   └── ... (TypeScript source files)
├── package.json
├── tsconfig.json
└── README.md
```

## API Endpoints

- `POST /todos` - Add a new to-do
- `DELETE /todos/:id` - Remove a to-do
- `PUT /todos/:id/status` - Change status of a to-do
- `GET /todos?status=pending|completed` - List to-dos by status

## License

MIT
