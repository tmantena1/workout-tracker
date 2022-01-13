const express = require('express');
const mongoose = require('mongoose');
const routes = require ('./routes');
const logger = require("morgan");

const PORT = process.env.port || 3001;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use(express.static('public'))

// Connect to mongoDB

mongoose.connect(process.env.MONgODB_URI || "mongodb+srv://tmantena:password123!!@cluster0.e7vdf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true
} );

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
