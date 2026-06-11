"use strict";
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require('mysql');

const config = require("./config/index");
const { port, allowedDomains } = config;

const app = express();
app.use(express.json());
app.use(cors({origin: allowedDomains}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({
    extended: true
}));

const uploadRouter = require('./routes/uploadcsv');

app.use('/upload', uploadRouter);

// Start the server and listen for connections
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
