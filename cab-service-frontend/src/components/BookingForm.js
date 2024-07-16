import React, { useState } from "react";
import axios from 'axios';

const BookingForm = () => {

    const [employeeId, setEmployeeId] = useState('');
    const [employeeName, setEmployeeName] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropLocation, setDropLocation] = useState('');
    const [bookingDate, setBookingDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBooking = {
            employeeId,
            employeeName,
            pickupLocation,
            dropLocation,
            bookingDate
        };

        try{
            await axios.post('http://localhost:5000/bookings', newBooking);
            alert('Booking Successful');
        }catch(err){
            alert("Error while Booking Cab");
        }
    }; 

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Employee ID:</label>
                <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}></input>
            </div>
            <div>
                <label>Employee Name:</label>
                <input type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)}></input>
            </div>
            <div>
                <label>Pickup Location:</label>
                <input type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}></input>
            </div>
            <div>
                <label>Drop Location:</label>
                <input type="text" value={dropLocation} onChange={(e) => setDropLocation(e.target.value)}></input>
            </div>
            <div>
                <label>Booking Date:</label>
                <input type="date" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)}></input>
            </div>
            <button type="submit">Book Cab</button>
        </form>
    )
}

export default BookingForm;