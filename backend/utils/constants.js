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
    ROLES: ['user', 'volunteerOrg'],
    SKILLS: ['english', 'chinese', 'malay', 'hindi', 'teaching', 'caregiving', 'cooking', 'driving'],

    //Messages
    NO_RECORD_FOUND: 'No record found for given details',
    VALIDATION_ERROR: 'Validation Error',
    INVALID_CREDENTIALS: 'Invalid email or password, Please check and try again',
    EMAIL_EXIST: 'Email is already in use by another account',
    USER_REGISTERED: 'User has registered already',
    USER_VO_MEMBER: 'Volunteer and Volunteer Organisation cannot be the same'

}