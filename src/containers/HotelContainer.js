import React, { useEffect, useState } from 'react';
import HotelTitle from '../components/HotelTitle';
import NewGuestForm from '../components/NewGuestForm';
import AllBookings from '../components/AllBookings';

// import deconstructed service functions here to handle database queries
import { getGuests, deleteGuest as apiDeleteGuest } from "../service/HotelService";

function HotelContainer() {

  // useState for allGuests
  const [allGuests, setAllGuests] = useState([]);
  // useState for newGuest from form?

  // useEffect to load all guests on page refresh only
  useEffect(() => {
    getGuests()
      .then((data) => {
        setAllGuests(data)
      })
  }, []);

  // function takes in a guest from the newGuestForm
  // creates a new copied array of all guests from the useState
  // adds a guest to the copied list
  // sets the list to the useState
  const addGuest = (guest) => {
    const copiedList = [...allGuests, guest];
    setAllGuests(copiedList);
  }

  // function to delete a guest from the allGuests useState
  // takes in an id, supplied by the allBookings component
  // creates a new copied list from allGuests useState
  // deletes guest from the database
  // sets all guests as the
  const deleteGuest = (id) => {
    apiDeleteGuest(id).then(() => {
      const copiedGuests = [...allGuests];
      const guestToDelete = copiedGuests.find(guest => guest._id === id);
      copiedGuests.splice(guestToDelete, 1);
      setAllGuests(copiedGuests);
    })
  }

  return (
    <>
      <HotelTitle />
      <NewGuestForm addGuest={addGuest} />
      <AllBookings guests={allGuests} />
    </>
  )
}

export default HotelContainer;