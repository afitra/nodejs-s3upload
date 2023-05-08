var express = require('express');
var router = express.Router();
var uploadController = require("../controller/index")
const upload = require('../helpers/uploadV2');

/* GET home page. */
router.post('/ok/upload',  upload.single('uploaded_file'),  uploadController.uploadFile );
router.post('/upload-multi', upload.array('files_upload', 50),  uploadController.uploadMulti );

module.exports = router;
