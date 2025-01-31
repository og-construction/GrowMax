const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  eventType: { type: String, required: true },
  secondField: { type: String, required: true },  // College/Company Name
  name: { type: String, required: true },
  event: { type: String, required: true },
  attendees: { type: Number, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
