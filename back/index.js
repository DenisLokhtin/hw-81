const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const linksRoute = require('./app/linksRoute');

const app = express();

app.use(express.json());
app.use(cors());

const port = 8002;

app.use('/links', linksRoute);

const run = async () => {
    await mongoose.connect('mongodb://localhost');

    app.listen(port, () => {
        console.log('Server started on port ', port);
    });
};

run().catch(e => console.log(e));


