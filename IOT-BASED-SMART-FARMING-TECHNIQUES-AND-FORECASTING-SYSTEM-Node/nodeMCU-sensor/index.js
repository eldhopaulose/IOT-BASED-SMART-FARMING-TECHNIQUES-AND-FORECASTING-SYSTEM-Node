
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = normalizePort(process.env.PORT || '7001');

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
// replace with your desired IP address

// Connection URL and database name
const url = 'mongodb+srv://eldhopaulose0485:xyzel_025@cluster0.4sjqm.mongodb.net/NodeMcu?retryWrites=true&w=majority';

// Set up default mongoose connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("Connected successfully to MongoDB Atlas");
});

// Define schema for sensor data
const SensorSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  soil_moisture: Number,
  ph: Number,
  N: Number,
  P: Number,
  K: Number
  
}, { timestamps: true });

// Create model from schema
const Sensor = mongoose.model('Sensor', SensorSchema);

app.use(cors());
// Use body-parser middleware to parse request body
app.use(bodyParser.json());

// Set up a route to handle POST requests from the sensor
// app.post('/api/data', (req, res) => {
//     // Create new document from request body
//     const sensorData = new Sensor(req.body);
  
//     // Save document to database
//     sensorData.save()
//       .then((data) => {
//         console.log("Data inserted:", data);
//         res.sendStatus(200);
//       })
//       .catch((err) => {
//         res.sendStatus(500);
//         console.error(err);
//       });
//   });
  

app.post('/api/data', async (req, res) => {
    try {
      // Find and delete the previous document
      const previousData = await Sensor.deleteMany();
      console.log('Previous data deleted:', previousData);
  
      // Create new document from request body
      console.log(req.body)
      const sensorData = new Sensor(req.body);
  
      // Save document to database
      const savedData = await sensorData.save();
  
      console.log('New data inserted:', savedData);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  


// Start server on specific IP address and port
app.listen(port, () => {
  console.log(`Server listening at:${port}`);
});

