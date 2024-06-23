const mongoose = require("mongoose");
//require('dotenv').config();
const dotenv = require("dotenv");
dotenv.config();

const mongo_url=process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    console.log("Connecting to DB");
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/Career_Guidance_Portal");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB error", error);
  }
};

module.exports = connectDB;