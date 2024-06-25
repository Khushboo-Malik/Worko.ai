require('dotenv').config();
const express= require ("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const connectDB = require("../config.js");
const userRoutes = require('./routes/user');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({
    extended: true
  }));

const PORT = process.env.PORT || 4000;

app.route("/").get((req, res) => {
    res.json({message: "Hello World"});
})

app.use('/api', userRoutes); 

connectDB();


server=app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})