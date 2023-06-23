const {Schema} = require("mongoose");

const interestSchema = new Schema({
    skill: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = { interestSchema };