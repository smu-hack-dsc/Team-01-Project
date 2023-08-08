const app = require('express').Router();
const controller = require('../controllers/post.controller');
const fileUpload = require('express-fileupload');
// app.use(fileUpload());

const { Authorize } = require('../../middleware/auth');



app.route('/')
    .post(Authorize(), fileUpload({createParentPath: true}), controller.create) // WORKING
    .get(controller.getLatest); // WORKING

app.route('/communities')
    .post(controller.communitiesFilter) // WORKING

app.route('/myposts')
    .get(Authorize(), controller.getByUser); // WORKING

app.route('/:postId')
    .delete(controller.remove); // PENDING


module.exports = app;