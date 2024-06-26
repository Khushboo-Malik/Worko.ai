const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipCode: {
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