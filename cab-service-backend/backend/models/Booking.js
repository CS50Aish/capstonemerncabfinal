const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    employeeId: String,
    employeeName: String,
    pickupLocation: String,
    dropLocation: String,
    bookingDate: Date,
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending',
    }
});

module.exports = mongoose.model('Booking', bookingSchema);
