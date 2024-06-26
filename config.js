const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables based on the environment
dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

const mongo_url = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    console.log("Connecting to DB");
    const conn = await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected to ${mongo_url}`);
  } catch (error) {
    console.error("MongoDB error", error);
  }
};

module.exports = connectDB;
