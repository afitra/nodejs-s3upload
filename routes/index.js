var express = require('express');
var router = express.Router();
var uploadController = require("../controller/index")
const upload = require('../helpers/uploadV2');

/* GET home page. */
router.post('/upload',  upload.single('uploaded_file'),  uploadController.uploadFile );

module.exports = router;
