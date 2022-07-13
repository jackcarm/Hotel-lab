import React from 'react';

import { postGuest } from "../service/HotelService";

function NewGuestForm({ addGuest }) {

    // useState for each form entry
    const [formData, setFormData] = usetState({});

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

            {/* edit this! need dropdown menu */}
            <label htmlFor="checked-in">CheckedIn:</label>
            <input onChange={onChange} type="boolean" id="checkedIn" required />

            <input type="submit" value="Save" id="save" />

        </form>
    )

}

export default NewGuestForm;