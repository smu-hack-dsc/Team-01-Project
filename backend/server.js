const express = require('express')
const app = express()
const mongoose = require('mongoose')

const userRouter = require('./routes/users')
const activityRouter = require('./routes/activity')
const volunteerOrgRouter = require('./routes/volunteerOrg')
const signupRouter = require('./routes/signup')

app.use(express.json())

//routes
app.use('/user', userRouter)
app.use('/flight', activityRouter)
app.use('/volunteerOrg', volunteerOrgRouter)
app.use('/signup', signupRouter)

app.get('/', (req, res) => {
    res.send("hihi")
})

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://admin:eaFtN7I1P3XAfXjA@volunteer-app.kjzmuic.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('connected to MongoDB')
        app.listen(3000, () => {
            console.log('app running on port 3000')
        })
    }).catch((error) => {
        console.log(error)
    })
