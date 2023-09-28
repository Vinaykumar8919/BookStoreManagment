const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const userModel = require('../Model/user.model'); // Replace with the correct path to your user model

router.post('/login', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    // Check if the user exists by their email
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // You can generate a token or use sessions for authentication here
    // For simplicity, we'll just send a success message
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
