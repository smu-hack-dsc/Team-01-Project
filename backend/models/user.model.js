const Skill = require('./skill.model')
const Interest = require('./interest.model')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    //the following is the field
    {
        name:{
            firstName: {
                type: String,
                required: true
            }, 
            lastName: {
                type: String,
                required: true
            }
        },
        password: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date, //YYYY-MM-DD
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /.+\@.+\..+/
        },
        availability: {
            //to confirm how availability will look like
            //maybe as a boolean to show when they are free (like Linkedin)
            //or by months to show their availability
            
        },
        interest: [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Interest'
        }],
        skills: [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Skill'
        }],
        badges: [{ //TODO: create a new collection KIV
            type: String
        }]
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;