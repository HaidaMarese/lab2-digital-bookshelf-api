# Digital Bookshelf API

A RESTful API built with Express and Mongoose to manage a library's book collection. This API supports full CRUD operations: Create, Read, Update, and Delete book records.

---

## Features

- Create new book records
- Retrieve all books
- Retrieve a single book by ID
- Update book details
- Delete a book
- MongoDB Atlas integration using Mongoose
-  Add book reviews for a user
- See all users and their reviews

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

---

##  Project Structure
```
digital-bookshelf-api/
│
├── db/
│   └── connection.js
├── models/
│   ├── Book.js
│   └── User.js
├── routes/
│   ├── bookRoutes.js
│   └── userRoutes.js
├── .env
├── .gitignore
├── server.js
└── README.md

```
## Clone the repo:

   ```bash
   git clone https://github.com/your-username/digital-bookshelf-api.git
   cd digital-bookshelf-api
   ```
 ##  Initialize and install dependencies

- npm init -y
- npm install express dotenv mongoose
- npm install -D nodemon

## Create a .env file

- MONGODB_URI="your_connection_string_here"

## .gitignore

- node_modules/
- .env

##  Run the server

- node server.js

## Screenshot 


## API Endpoints

- Book Routes

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/books`     | Get all books       |
| GET    | `/api/books/:id` | Get a book by ID    |
| POST   | `/api/books`     | Create a new book   |
| PUT    | `/api/books/:id` | Update a book by ID |
| DELETE | `/api/books/:id` | Delete a book by ID |


- User Routes

| Method | Endpoint                             | Description                |
| ------ | ------------------------------------ | -------------------------- |
| POST   | `/api/users`                         | Create a new user          |
| GET    | `/api/users`                         | Get all users with reviews |
| POST   | `/api/users/:userId/reviews/:bookId` | Add a book review by user  |


  


