//create web server
const express = require('express');
const app = express();
//connect to database
const mongoose = require('mongoose');
//import body-parser
const bodyParser = require('body-parser');
//import cors
const cors = require('cors');
//import path
const path = require('path');
//import routes
const comments = require('./routes/api/comments');
//import dotenv
require('dotenv').config();

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(cors());

// DB Config
const db = process.env.MONGO_URI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));