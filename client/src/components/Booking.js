import React, { useState } from 'react';
import EditGuest from './EditGuest';

function Booking({ guest, deleteGuest, updateGuest }) {

    const [edit, setEdit] = useState(false);

    const handleEditButton = () => {
        setEdit(true)
    }

    const updateBooking = () => {
        setEdit(false)
    }

    // build individual booking components with delete/edit buttons etc if required

    if (edit) return <EditGuest guest={guest} updateGuest={updateGuest} updateBooking={updateBooking} />
    return (
        <>
            <h1>{guest.name}</h1>
            <p>{guest.email}</p>
            <p>{(guest.checkedIn) ? 'Checked In' : 'Not Checked In'}</p>
            <button onClick={() => deleteGuest(guest._id)}>🗑</button>
            <button onClick={handleEditButton}>🔧</button>
        </>
    )

}

export default Booking;