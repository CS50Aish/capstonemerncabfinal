import React, { useEffect, useState } from "react";
import axios from 'axios';

const BookingList = () => {
    
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const intervalID = setInterval(() => {
            window.location.reload();
        }, 30000);

        fetchBookings();

        return () => clearInterval(intervalID);
    }, []);


    const fetchBookings = async () => {
        try{
            const response = await axios.get('http://localhost:5000/bookings');
            setBookings(response.data);
        }
        catch(err){
            console.error('Error Fetching Bookings');
        }
    };

    const handleUpdate = async (id) => {
        try{
            await axios.put(`http://localhost:5000/bookings/${id}`, {status: 'Confirmed'});
            fetchBookings();
        }
        catch(err){
            console.error('Error updating booking');
        }
    }

    const handleDelete = async (id) => {
        try{
            await axios.delete(`http://localhost:5000/bookings/${id}`);
            fetchBookings();
        }
        catch(err){
            console.error('Error deleting booking');
        }
    }

    const handleCancel = async (id) => {
        try{
            await axios.put(`http://localhost:5000/bookings/${id}`, {status: 'Cancelled'});
            fetchBookings();
        }
        catch(err){
            console.error('Error updating booking');
        }
    }

    return (
        <div>
            <h2>Bookings</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking._id}>
                        {booking.employeeName} &nbsp; booked &nbsp; a &nbsp; cab &nbsp; from &nbsp; 
                        {booking.pickupLocation} &nbsp; to &nbsp; 
                        {booking.dropLocation} &nbsp; on &nbsp; {new Date(booking.bookingDate).toLocaleDateString()}
                        &nbsp; with &nbsp; status &nbsp; {booking.status} &nbsp; &nbsp;
                        <button onClick={() => handleUpdate(booking._id)}>Confirm</button> &nbsp; &nbsp;
                        <button onClick={() => handleCancel(booking._id)}>Cancel</button> &nbsp; &nbsp;
                        <button onClick={() => handleDelete(booking._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default BookingList;