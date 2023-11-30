const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');


const app = express();
const port = normalizePort(process.env.PORT || '7001');
app.set('port', port);
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
// Connection URI and options
const uri = 'mongodb+srv://eldhopaulose0485:xyzel_025@cluster0.4sjqm.mongodb.net/NodeMcu?retryWrites=true&w=majority';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Define a schema for the sensor data
const SensorSchema = new mongoose.Schema({
    temperature: Number,
    humidity: Number,
    soil_moisture: Number,
    ph: Number,
    
  });

// Create a model based on the schema
const Sensor = mongoose.model('Sensor', SensorSchema);

app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected successfully to MongoDB Atlas');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB Atlas:', err);
  });

// Define a route that fetches the sensor data
app.get('/api/data', async (req, res) => {
    try {
      // Find all documents in the collection
      const sensorData = await Sensor.find().exec();
  
      console.log('Found the following documents:');
      console.log(sensorData);
  
      res.json(sensorData);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
