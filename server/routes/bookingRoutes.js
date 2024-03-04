const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all bookings' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create a new booking' });
});

module.exports = router;
