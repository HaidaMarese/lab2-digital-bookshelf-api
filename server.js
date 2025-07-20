// Task 5: Server Configuration
// In server.js:
// Set up your Express application.
// Use the express.json() middleware to parse request bodies.
// Mount your book router at a base path, like /api/books.
// Start the server on a specified port.

import express from "express";
import dotenv from "dotenv";
import db from "./db/connection.js";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to DB
db();

// === Middleware === 
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is up ");
});

// === Routes ===
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

// === Start Server ===
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));




