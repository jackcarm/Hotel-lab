import React, { useState } from 'react';

import { postGuest } from '../service/HotelService';

function NewGuestForm({ addGuest }) {

    // useState for each form entry
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        checkedIn: true
    });

    // function to return a full guest object to the main component
    // save guest object to the database from here
    // reset the useState after sending the info up
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // service function to save to database
        // send guest object to main container
        postGuest(formData).then((data) => {
            addGuest(data);
        })
    }

    const onChange = (evt) => {
        formData[evt.target.id] = evt.target.value;
        setFormData(formData);
    }


    return (
        <form className="" onSubmit={handleSubmit} method="post">

            <label htmlFor="name">Name:</label>
            <input onChange={onChange} type="text" id="name" v-model="name" required />

            <label htmlFor="email">Email Address:</label>
            <input onChange={onChange} type="email" id="email" required />

            <label htmlFor="checkedIn">Checked In:</label>
            <select default={true} onChange={onChange} id="checkedIn" required>
                <option value={true}>Checked In</option>
                <option value={false}>Not Checked In</option>
            </select>

            <input type="submit" value="Save" id="save" />

        </form>
    )

}

export default NewGuestForm;