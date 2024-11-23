const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Ensure this is included
const bcrypt = require('bcrypt');
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    addresses: [
        {
            country: { type: String },
            city: { type: String },
            address1: { type: String },
            address2: { type: String },
            zipCode: { type: Number },
            addressType: { type: String },
        }
    ],
    registeredProgram: { type: String, required: true }, // Store the program name

        attendedEvents: [{ type: ObjectId, ref: "Event" }], // Reference to Event model
}, { timestamps: true });

// Hash the password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.createPasswordResetToken = async function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    return resetToken;
}

// Method to compare password
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
