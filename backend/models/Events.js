const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  type: { type: String, enum: ['upcoming', 'completed'], required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Event', EventSchema);
