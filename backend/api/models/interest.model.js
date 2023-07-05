// UPDATED: to check if we should make the interest enums within the user and activity
// API TESTING:
// VALIDATIONS:
// TODO: 
const mongoose = require("mongoose");

const interestSchema = mongoose.Schema({
    interest: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Interest = mongoose.model('Interest', interestSchema);

module.exports = Interest;