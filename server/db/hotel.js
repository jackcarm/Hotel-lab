use hotel_hub;
db.dropDatabase();

db.hotel.insertMany([
    {
        name: "John Smith",
        email: "JohnSmith@gmail.com",
        checkedIn: true
    },
    {
        name: "Bob Marley",
        email: "BobMarley@gmail.com",
        checkedIn: true
    },
    {
        name: "Elton John",
        email: "EltonJohn@gmail.com",
        checkedIn: false
    },

]);