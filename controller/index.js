const upload = require('../helpers/uploadV2');
const logCreator= require("../helpers/logCreator")
const IP = require('ip');
class beritaController {


    static    uploadFile(req, res, next) {
        try {
            var data =req.file
            var logData={
                mode:"response",
                id:req.id,
                method:req.method,
                status:201,
                endpoind:req.originalUrl,
                host:IP.address(),
                message:"suceess",
                context:data,
                time:"",
            }
   
            if(!req.file){
                  throw new Error("BROKEN");
             } 
             logCreator("http",logData)
            
        } catch (error) {
            var logData={
                mode:"response",
                id:req.id,
                method:req.method,
                status:400,
                endpoind:req.originalUrl,
                host:IP.address(),
                message:"file not found",
                context:null,
                time:"",
            }
            logCreator("error", logData)
            console.log(error.message);
        }
    }
    static  uploadMulti(req, res, next) {
        try {
            var data =req.file
            var logData={
                mode:"response",
                id:req.id,
                method:req.method,
                status:201,
                endpoind:req.originalUrl,
                host:IP.address(),
                message:"suceess",
                context:data,
                time:"",
            }
   
            if(!req.files){
                 throw new Error("BROKEN");
            } 
            logCreator("http",logData)
            
        } catch (error) {
            var logData={
                mode:"response",
                id:req.id,
                method:req.method,
                status:400,
                endpoind:req.originalUrl,
                host:IP.address(),
                message:"file not found",
                context:null,
                time:"",
            }
            logCreator("error", logData)
            console.log(error.message);
        }
    }

}



module.exports = beritaController

