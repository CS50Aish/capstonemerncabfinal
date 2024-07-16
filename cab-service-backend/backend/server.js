const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/cabBookingDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(bodyParser.json());

const bookingRoutes = require('./routes/bookings');
app.use('/bookings', bookingRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});