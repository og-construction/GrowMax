// routes/bookingRoutes.js
const express = require('express');
const { createBooking } = require('../controller/bookingController');
const router = express.Router();

// Sample route for booking
router.post('/booking',createBooking);

module.exports = router;
