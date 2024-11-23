const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./router/userRouter')
const events = require('./router/events');
const { Connection } = require('./config/dbConnect');
const app = express();
const PORT = 5000;

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  credentials: true
}));
app.use(bodyParser.json());

// mongoose.connect('mongodb+srv://ogconstructionsolution:L2NTcLrtTMrbDLPj@cluster0.6wxkv.mongodb.net/growmax?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected')).catch(err => console.error(err));

// Routes
app.use('/api/events', events);
app.use('/api/programs', require('./router/programs'));
app.use('/api/enquiries', require('./router/enquiries'));
app.use('/api/user',user)

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(PORT,async()=>{
  try {
      await Connection
      console.log('database connected');
      console.log(`Server running on port ${PORT}`)
  } catch (error) {
      console.log(error)
  }
})
