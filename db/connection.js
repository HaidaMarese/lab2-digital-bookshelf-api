import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const uri = process.env.MONGODB_URI;

const db = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected successfully to MongoDB!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

export default db;
