const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.error('Ensure your IP is whitelisted and credentials are correct.');
    process.exit(1);
  }
}

module.exports = { connectDB };
