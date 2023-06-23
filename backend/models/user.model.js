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
            //maybe as a boolean to show when they are free (liked Linkedin)
            //or by months to show their availability
            
        },
        interest: [{ //TODO: create a new collection
            type: String
        }],
        skills: [{ //TODO: create a new collection
            type: String
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