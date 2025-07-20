import express from "express";
import mongoose from "mongoose";
import User from "../models/User.js";
import Book from "../models/Book.js";

const router = express.Router();

// Create new user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Book review to user, auto update book ratings and averageRating
router.post("/:userId/reviews/:bookId", async (req, res) => {
  try {
    const { userId, bookId } = req.params;
    const { rating, comment } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ error: "Book not found" });

    // Review to user
    const review = { book: book._id, rating, comment };
    user.reviews.push(review);
    await user.save();

    // Rating to book and update average
    book.ratings.push(rating);
    book.averageRating =
      book.ratings.reduce((sum, r) => sum + r, 0) / book.ratings.length;
    await book.save();

    res.status(201).json({
      message: "Review added",
      userReview: review,
      updatedBook: {
        title: book.title,
        averageRating: book.averageRating,
        totalRatings: book.ratings.length,
      },
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().populate("reviews.book");
    res.status(200).json(users);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
