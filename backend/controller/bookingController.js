const Booking = require('../models/bookingModel');

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { eventType, secondField, name, event, attendees, location } = req.body;

    // Validate required fields
    if (!eventType || !secondField || !name || !event || !attendees || !location) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }

    // Create a new booking document
    const newBooking = new Booking({
      eventType,
      secondField,
      name,
      event,
      attendees,
      location,
    });

    // Save to the database
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: 'Booking successful', booking: savedBooking });
} catch (error) {
  console.error('Error creating booking:', error);
  res.status(500).json({ message: 'Server error', error: error.message });
}
};

module.exports = { createBooking };
