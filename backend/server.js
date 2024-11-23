const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./router/userRouter')
const events = require('./router/events')
const app = express();
const PORT = 5000;

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  credentials: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/consultancy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.error(err));

// Routes
app.use('/api/events', events);
app.use('/api/programs', require('./router/programs'));
app.use('/api/enquiries', require('./router/enquiries'));
app.use('/api/user',user)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
