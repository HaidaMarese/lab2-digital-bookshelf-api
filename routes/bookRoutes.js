// Task 4: API Routes
// In the routes/ directory, create a bookRoutes.js file.
// Use express.Router() to create a new router instance.
// Implement the five core CRUD endpoints on this router:
// Create: POST / - Creates a new book using the data in req.body.
// Read All: GET / - Retrieves all books from the database.
// Read One: GET /:id - Retrieves a single book by its _id.
// Update: PUT /:id - Updates a book by its _id using the data in req.body.
// Update: PATCH /:id - Updates part of a book by its _id.
// Delete: DELETE /:id - Deletes a book by its _id.

import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

// Create: POST /
router.post("/", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

// Read All: GET /
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Read One: GET /:id
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

//  PUT /:id
router.put("/:id", async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Book not found" });
    res.json(updated);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

//  PATCH /:id
router.patch("/:id", async (req, res) => {
  try {
    const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    
    if (!updated) return res.status(404).json({ message: "Book not found" });
    res.json(updated);

  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Delete: DELETE /:id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Book.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

export default router;
