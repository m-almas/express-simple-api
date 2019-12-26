const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

//Import routes
const postsRoute = require('./routes/posts');
const authRoute = require('./routes/auth');

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', authRoute);
app.use('/posts', postsRoute);


//Home routes
app.get('/', (req, res) => {
    res.send("it is home now");
});


const db_connectionStr = process.env.NODE_ENV === "development" ?
    process.env.DB_CONNECTION_DEV : process.env.DB_CONNECTION_TEST
//Connect to DB
mongoose.connect(
    db_connectionStr,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log('connected to db')
)

//starting our app 
app.listen(3000);