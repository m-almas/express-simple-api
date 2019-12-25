const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

//Import routes
const postsRoute = require('./routes/posts');
const authRoute = require('./routes/auth');

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/user', authRoute);
app.use('/posts', postsRoute);


//Home routes
app.get('/', (req, res) => {
    res.send("it is home now");
});



//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log('connected to db')
);

//starting our app 
app.listen(3000);