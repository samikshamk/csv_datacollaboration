"use strict";
require('dotenv').config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import uploadRouter from './routes/uploadRoute';
import recordRouter from './routes/recordRoute';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// API routes
app.use('/upload', uploadRouter);
app.use('/records', recordRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});