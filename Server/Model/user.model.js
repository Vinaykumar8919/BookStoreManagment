// models/user.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
    lowercase: true, // Store emails in lowercase to ensure case-insensitive uniqueness
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String, // Store the file path or URL to the uploaded profile image
  },
  // You can add more fields as needed for your application
  // For example, roles, timestamps, etc.
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;