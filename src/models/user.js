const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Age: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    Zip_Code: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean, 
      default: false },
    deletedAt: {
      type: Date }, 
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);
module.exports = User;