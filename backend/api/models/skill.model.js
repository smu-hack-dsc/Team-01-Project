// UPDATED: to check if we should make the skills enum within the user and activity
// API TESTING:
// VALIDATIONS:
// TODO: 

const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
    skill: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;