const {Schema} = require("mongoose");

const skillSchema = new Schema({
    skill: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = { skillSchema };