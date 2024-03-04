const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const vehicleRoutes = require('./vehicleRoutes');
const bookingRoutes = require('./bookingRoutes');

router.use('/users', userRoutes);
router.use('/vehicles', vehicleRoutes);
router.use('/bookings', bookingRoutes);

module.exports = router;
