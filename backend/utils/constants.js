module.exports = {

    // HTTP Status Codes
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,

    //API Defaults
    LOGGED_IN: 'logged_in',
    USER: 'user',
    VOLUNTEERORG: 'volunteerOrg',
    ROLES: ['user', 'volunteerOrg'],
    SKILLS: ['english', 'chinese', 'malay', 'hindi', 'teaching', 'caregiving', 'cooking', 'driving'],
    INTERESTS: ['elderly', 'environment', 'children', 'tutoring', 'animals'],
    BADGES: ["Completed 10 Hours", "Completed 20 Hours", "Completed 30 Hours", "Completed 40 Hours", "Completed 50 Hours", 
            "Completed 60 Hours", " Completed 70 Hours", "Completed 80 Hours", "Completed 90 Hours", "Completed 100 Hours", 
            "Completed 150 Hours", "Completed 200 Hours"],

    //Messages
    NO_RECORD_FOUND: 'No record found for given details',
    VALIDATION_ERROR: 'Validation Error',
    INVALID_CREDENTIALS: 'Invalid email or password, Please check and try again',
    EMAIL_EXIST: 'Email is already in use by another account',
    USER_REGISTERED: 'User has registered already',
    USER_VO_MEMBER: 'Volunteer and Volunteer Organisation cannot be the same',
    POST_MADE_BEFORE: 'A post for this activity has been made by the user before!'

}