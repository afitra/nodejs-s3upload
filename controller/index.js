const upload = require('../helpers/uploadV2');
class beritaController {


    static  uploadFile(req, res, next) {
        try {
            res.json(req.file);
            
        } catch (error) {
            console.log(error.message);
        }
    }
    static  uploadMulti(req, res, next) {
        try {
            res.json(req.files);
            
        } catch (error) {
            console.log(error.message);
        }
    }

}



module.exports = beritaController
