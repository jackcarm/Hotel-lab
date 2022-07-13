import React from 'react';
import Booking from './Booking';

function AllBookings({ guests, deleteGuest }) {
    if (!guests) return <h2>No Guests in the Hotel</h2>

    // map function to build all <Booking /> components and return each
    const guestList = guests.map((guest) => {
        return (
            <>
                <Booking guest={guest} key={guest._id} deleteGuest={deleteGuest} />
            </>
        )
    })

    return (
        <>
            {guestList}
        </>
    );

}

export default AllBookings;