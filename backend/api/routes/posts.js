const app = require('express').Router();
// const multer = require('multer');
const controller = require('../controllers/post.controller');
// const { GridFsStorage } = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
const fileUpload = require('express-fileupload');
app.use(fileUpload());
const { Authorize } = require('../../middleware/auth');



app.route('/')
    .post(Authorize(), controller.create) // WORKING
    .get(Authorize(), controller.getLatest); // WORKING

app.route('/myposts')
    .get(Authorize(), controller.getByUser); // WORKING

app.route('/:postId')
    .delete(Authorize(), controller.remove); // PENDING


module.exports = app;