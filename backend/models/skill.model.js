const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
    skill: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;