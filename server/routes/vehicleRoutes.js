const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Get all vehicles' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create a new vehicle' });
});

module.exports = router;
