// //Task 3: Book Schema and Model
// In the models/ directory, create a Book.js file.
// Define a schema for a Book with the following fields and validation rules:
// title: A String, which is required.
// author: A String, which is required.
// isbn: A String, which must be unique.
// publishedDate: A Date.
// inStock: A Boolean, with a default value of true.
// Compile this schema into a model named Book and export it.


import mongoose from "mongoose";

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    unique: true,
  },
  publishedDate: {
    type: Date,
  },
  inStock: {
    type: Boolean,
    default: true,
  },

  // These are my optional fields
  summary: {
    type: String,
    maxlength: 500,
  },
  ratings: {
    type: [Number], 
    default: [],
  },
  averageRating: {
    type: Number,
    default: 0,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
