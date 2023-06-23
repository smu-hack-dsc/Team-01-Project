const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = { skillSchema };