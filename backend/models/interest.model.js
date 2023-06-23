const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Skill = mongoose.model('skill', skillSchema);

module.exports = { skillSchema };