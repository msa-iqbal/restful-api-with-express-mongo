# **Todo API with Express and MongoDB**

A RESTful API for managing TODO items built using **Node.js**, **Express.js**, and **MongoDB**. This project provides routes to perform CRUD operations for Todo tasks.

## Features

- **Create** single or multiple Todo items.
- **Read** all Todos or a specific Todo by ID.
- **Update** Todo items dynamically by ID.
- **Delete** Todo items by ID.
- Well-structured API with proper error handling.
- MongoDB as the database for persistence.

## Technologies Used

| Technology | Description                    |
| ---------- | ------------------------------ |
| Node.js    | JavaScript runtime environment |
| Express.js | Web framework for Node.js      |
| MongoDB    | NoSQL database for storage     |
| Mongoose   | ODM for MongoDB                |
| Postman    | API testing tool               |

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Start MongoDB**: Ensure MongoDB is running locally on `mongodb://127.0.0.1:27017`.

4. **Run the server**:

   ```bash
   node index.js
   ```

   Server will run on: `http://localhost:3000`.

## Folder Structure

```bash
todo-api/
│
├── routeHandler/          # API route definitions
│   └── todoHandler.js     # CRUD routes for Todos
│
├── schemas/               # Mongoose schemas
│   └── todoSchemas.js     # Todo schema definition
│
├── index.js               # Main application file
│
└── package.json           # Project metadata and dependencies
```

## API Endpoints

### 1. GET All Todos

- **Endpoint**: `/todo`

- **Method**: `GET`

- **Description**: Fetches all Todos with status "active" (default).

- **Response**:

  ```json
  {
    "result": [
      { "title": "Task 1", "description": "Learn Node.js" },
      { "title": "Task 2", "description": "Learn Express.js" }
    ],
    "message": "Success"
  }
  ```

### 2. GET a Todo by ID

- **Endpoint**: `/todo/:id`
- **Method**: `GET`
- **Description**: Fetch a specific Todo item by ID.

### 3. POST a Todo

- **Endpoint**: `/todo`

- **Method**: `POST`

- **Description**: Add a new Todo item.

- **Request Body**:

  ```json
  {
    "title": "Learn Mongoose",
    "description": "Understand ODM for MongoDB"
  }
  ```

- **Response**:

  ```json
  {
    "message": "Todo was inserted successfully!",
    "data": { "title": "Learn Mongoose", "description": "..." }
  }
  ```

### 4. POST Multiple Todos

- **Endpoint**: `/todo/all`

- **Method**: `POST`

- **Description**: Add multiple Todo items.

- **Request Body**:

  ```json
  [
    { "title": "Todo 1", "description": "Description 1" },
    { "title": "Todo 2", "description": "Description 2" }
  ]
  ```

### 5. PUT (Update) a Todo by ID

- **Endpoint**: `/todo/:id`

- **Method**: `PUT`

- **Description**: Update fields of a Todo item dynamically.

- **Request Body**:

  ```json
  {
    "status": "inactive",
    "title": "Updated Title"
  }
  ```

### 6. DELETE a Todo by ID

- **Endpoint**: `/todo/:id`
- **Method**: `DELETE`
- **Description**: Deletes a specific Todo by ID.

## **Contributing**

Contributions are welcome! Follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```bash
   git checkout -b feature-branch
   ```

3. Commit changes:

   ```bash
   git commit -m "Add your message"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-branch
   ```

5. Open a pull request.

## **License**

This project is open-source and available under the **MIT License**.
