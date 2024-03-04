const express = require('express');
const router = express.Router();

// Example user routes
router.get('/', (req, res) => {
  res.json({ message: 'Get all users' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create a new user' });
});

module.exports = router;
