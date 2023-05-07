var express = require('express');
var router = express.Router();
const multer  = require('multer')
let bucketUpload = require("../helpers/bucketUpload")



const storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, '')
  }
})
// const upload = multer({ storage: multer.memoryStorage() })
const upload = multer({ storage });


/* GET home page. */
router.post('/upload',  upload.single('uploaded_file'),   async  (req, res, next)=> {
 try {
   var product =   await bucketUpload(req.file)
   
   res.status(200).send(product)
  
 } catch (error) {
  res.send(error.message)
 }
  // ⛔️ Setting headers after the response has been sent
 
});

module.exports = router;
