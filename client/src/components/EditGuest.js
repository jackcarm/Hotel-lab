import React, { useState } from 'react';

import { updateGuest as apiUpdateGuest } from '../service/HotelService';

function EditGuest({ guest, updateGuest, updateBooking }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        checkedIn: true
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // service function to save to database
        // send guest object to main container
        apiUpdateGuest(formData).then((data) => {
            updateGuest(data);
            updateBooking();
        })
    }

    const onChange = (evt) => {
        formData[evt.target.id] = evt.target.value;
        setFormData(formData);
    }

    return (
        <form className="" onSubmit={handleSubmit} method="post">

            <label htmlFor="name">Name:</label>
            <input value={guest.name} onChange={onChange} type="text" id="name" v-model="name" />

            <label htmlFor="email">Email Address:</label>
            <input value={guest.email} onChange={onChange} type="email" id="email" />

            <label htmlFor="checkedIn">Checked In:</label>
            <select value={guest.CheckedIn} default={true} onChange={onChange} id="checkedIn" >
                <option value={true}>Checked In</option>
                <option value={false}>Not Checked In</option>
            </select>

            <input type="submit" value="Save" id="save" />

        </form>
    )

}

export default EditGuest;