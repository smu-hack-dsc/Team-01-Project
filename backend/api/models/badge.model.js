// UPDATED: to check if we should make the interest enums within the user and activity
// API TESTING:
// VALIDATIONS:
// TODO: 
const mongoose = require('mongoose')

const badgeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        volunteerOrg: {
            type: mongoose.Schema.Types.ObjectId
        },
        description: {
            type: String
        }

    }
)

const Badge = mongoose.model('Badge', badgeSchema);

module.exports = Badge;