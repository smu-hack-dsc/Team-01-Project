const express = require('express');
const app = express();
const mongoose = require('mongoose');
const swagger = require('./utils/swagger');
const cors = require('cors'); 
require("dotenv").config();

const userRouter = require('./api/routes/users');
const activityRouter = require('./api/routes/activity');
const signupRouter = require('./api/routes/signup');
const postRouter = require('./api/routes/posts');
// const memberRouter = require('./api/routes/member');

app.use(express.json())
app.use(express.urlencoded({extended: true})) // true because we have nested data structures
app.use(swagger);
app.use(cors());

//routes
app.use('/user', userRouter);
app.use('/activity', activityRouter);
app.use('/signup', signupRouter);
app.use('/post', postRouter);
// app.use('/member', memberRouter);

app.get('/', (req, res) => {
    res.send("hihi");
});

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('connected to MongoDB');
        app.listen(4001, () => {
            console.log('app running on port 4001');
            console.log(`Docs available at http://localhost:4001/api-docs`);
        })
    }).catch((error) => {
        console.log(error);
    })
