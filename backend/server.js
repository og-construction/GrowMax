const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/dbConnect');

// Import routes
const userRouter = require('./router/userRouter');
const eventsRouter = require('./router/events');
const programsRouter = require('./router/programs');
const enquiriesRouter = require('./router/enquiries');

const app = express();
const PORT = process.env.PORT || 5001;

// Add Content Security Policy to fix CSP violations
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' https://vercel.live; connect-src 'self' https://vercel.live"
  );
  next();
});

// CORS configuration
app.use(
  cors({
    origin: ['https://growmax.ogcs.co.in/', 'http://localhost:3000','http://localhost:3001','http://localhost:3002','http://localhost:3003'],
    credentials: true,
  })
);

// Middleware
app.use(bodyParser.json());

app.get("/",(req,res)=>{
  res.send("growmax backend started")
})
// Routes
app.use('/api/user', userRouter);
app.use('/api/events', eventsRouter);
app.use('/api/programs', programsRouter);
app.use('/api/enquiries', enquiriesRouter);

// Initialize Database and Start Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
