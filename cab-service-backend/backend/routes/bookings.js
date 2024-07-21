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
})

router.put('/:id', async(req, res) => {
    try{
        const updateBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true} );
        res.status(200).json(updateBooking);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})

router.delete('/:id', async(req, res) => {
    try{
        await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Booking Deleted'});
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})



module.exports = router;