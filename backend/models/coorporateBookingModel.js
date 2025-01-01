const mongoose = require('mongoose');
const coorporateBookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    Subject: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    candidates: { type: Number, required: true },
    institute: { type: String, required: true },
    Mode: { type: String,enum:['Online','Offline'], required: true },

})
module.exports= mongoose.model('CoorporateBooking',coorporateBookingSchema)