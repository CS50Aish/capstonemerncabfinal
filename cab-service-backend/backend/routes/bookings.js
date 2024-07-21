const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async(req, res) => {
    try{
        const newBooking = new Booking(req.body);
        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
});

router.get('/', async(req, res) => {
    try{
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;