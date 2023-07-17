/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - password
 *         - email
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: The name of the user or volunteer organisation
 *         password:
 *           type: string
 *           description: The encrypted hash password of this account
 *         dateOfBirth:
 *           type: string
 *           format: date
 *           description: The date of birth of the user
 *         email: 
 *           type: string
 *           description: The email of the user
 *         interests:
 *           type: array
 *           items: 
 *             type: string
 *           description: The interests of the user
 *         skills:
 *           type: array
 *           items: 
 *             type: string
 *           description: The skills the user has
 *         badges:
 *           type: array
 *           items: 
 *             type: string
 *           description: The badges of the user as a result of their volunteering effort
 *         role:
 *           type: string
 *           description: The role of the account, with a default value of 'user' otherwise defined as 'volunteerOrg'
 *       example:
 *         id: 64b0d3b676091a24b5a5969e
 *         name: Alice Tan
 *         password: (encrypted)
 *         dateOfBirth: 2003-10-11
 *         email: alice.tan@test.com
 *         role: user
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The user managing API
 * /user/register:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Creating a user account
 *         schema: 
 *           type: object
 *           required: 
 *             - name
 *             - password
 *             - email
 *           properties:
 *             name: 
 *               type: string
 *               example: Alice Tan
 *             password:
 *               type: string
 *               example: "12345678"
 *             dateOfBirth:
 *               type: string
 *               format: date
 *               example: 2003-10-11
 *             email: 
 *               type: string
 *               example: "alice.tan@test.com"
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data: 
 *                   type: object
 *                   properties: 
 *                     id:
 *                       type: string
 *                       example: 64b0d3b676091a24b5a5969e
 *                     name: 
 *                       type: string
 *                       example: Alice Tan
 *                     email: 
 *                       type: string
 *                       example: alice.tan@test.com
 *                     role: 
 *                       type: string
 *                       example: user
 *       500:
 *         description: Some server error
 *
 */

/**
 * @swagger
 * /user/{userId}:
 *   post:
 *     summary: User login
 *     tags: [User]
 *     security: 
 *       basicAuth: []
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to login
 *         schema: 
 *           type: object
 *           required: 
 *             - email
 *           properties: 
 *             email: 
 *               type: string
 *               example: "alice.tan@test.com"
 *             password:
 *               type: string
 *               example: "12345678"
 *     responses:
 *       200:
 *         description: The login user.
 *         content:
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 data: 
 *                   type: object
 *                   properties: 
 *                     id:
 *                       type: string
 *                       example: 64b0d3b676091a24b5a5969e
 *                     name: 
 *                       type: string
 *                       example: Alice Tan
 *                     email: 
 *                       type: string
 *                       example: alice.tan@test.com
 *                     role: 
 *                       type: string
 *                       example: user
 *                 token: 
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODk1NjgyNTEsImlhdCI6MTY4OTU2NjQ1MSwic3ViIjoiNjRiMGQzYjY3NjA5MWEyNGI1YTU5NjllIn0.XwmCVCCt_KIgVbU_6qP7ivPamIoHwSJWX8xbYpo-JYg
 * 
 *       500:
 *         description: Some server error
 *
 */


/**
 * @swagger
 * /user/{userId}:
 *   get:
 *     summary: Login user profile
 *     tags: [User]
 *     security: 
 *       basicAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user id
 *     responses:
 *       200:
 *         description: The login user.
 *         content:
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 data: 
 *                   type: object
 *                   properties: 
 *                     id:
 *                       type: string
 *                       example: 64b0d3b676091a24b5a5969e
 *                     name: 
 *                       type: string
 *                       example: Alice Tan
 *                     email: 
 *                       type: string
 *                       example: alice.tan@test.com
 *                     role: 
 *                       type: string
 *                       example: user 
 *       500:
 *         description: Some server error
 */