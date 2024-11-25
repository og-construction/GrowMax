const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./router/userRouter');
const events = require('./router/events');
const { Connection } = require('./config/dbConnect');

const app = express();
const PORT = 5000;

// Add Content Security Policy to fix CSP violations
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' https://vercel.live; connect-src 'self' https://vercel.live"
  );
  next();
});

// CORS configuration
app.use(cors({
  origin: ['https://growmax.ogcs.co.in'],
  credentials: true
}));

// Middleware
app.use(bodyParser.json());

// Database connection
app.listen(PORT, async () => {
  try {
    await Connection;
    console.log('Database connected');
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});

// Routes
app.use('/api/events', events);
app.use('/api/programs', require('./router/programs'));
app.use('/api/enquiries', require('./router/enquiries'));
app.use('/api/user', user);

module.exports = app;
