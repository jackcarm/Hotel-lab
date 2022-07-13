const express = require('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router')

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('hotel_hub');
        const hotelCollection = db.collection('hotel');
        const hotelRouter = createRouter(hotelCollection);
        app.use('/api/hotel', hotelRouter);
    });

app.listen(9000, function () {
    console.log(`Listening on port ${this.address().port}`);
});