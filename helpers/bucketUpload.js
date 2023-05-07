var  { Upload } = require("@aws-sdk/lib-storage");
var  { S3Client, S3,AbortMultipartUploadCommand,PutObjectCommand, AwsClient } =require ("@aws-sdk/client-s3");
const multerS3 = require('multer-s3');

module.exports=  async  (file)=>{
 
      

        const client = new S3Client({
            region: process.env.AWS_REGION,
            credentials:{
                accessKeyId:process.env.AWS_ACCESS_KEY_ID,              
                secretAccessKey:process.env.AWS_ACCESS_KEY_SECRET,      
                
            },
            endpoint:"https://is3.cloudhost.id",
        })
        
        var filename = `${Date.now().toString()}-${file.originalname}`
        // console.log(">>>",file.buffer);
        const params = {
            Bucket:process.env.AWS_BUCKET_NAME,      // bucket that we made earlier
            Key:filename,               // Name of the image
            Body:file.buffer,                    // Body which will contain the image in buffer format
            ACL:"public-read",                 // defining the permissions to get the public link
            // ACL:"public-read-write",                 // defining the permissions to get the public link
            ContentType:file.mimetype                 // Necessary to define the image content-type to view the photo in the browser with the link
        };

        // params (map) — peta parameter untuk diteruskan ke permintaan unggahan. Parameter "Tubuh" harus ditentukan baik pada layanan atau dalam opsi params.
        // queueSize (Number) — default: 4 — ukuran manajer antrian bersamaan untuk mengunggah bagian secara paralel. Setel ke 1 untuk mengunggah bagian secara sinkron. Perhatikan bahwa pengunggah akan menyangga paling banyak byte queueSize * partSize ke dalam memori pada waktu tertentu.
        // partSize (Number) — default: 5mb — ukuran dalam byte untuk setiap bagian yang akan diunggah. Sesuaikan ukuran part untuk memastikan jumlah part tidak melebihi maxTotalParts. Lihat minPartSize untuk ukuran bagian minimum yang diizinkan.
        // leavePartsOnError (Boolean) — default: false — apakah akan membatalkan unggahan multipart jika terjadi kesalahan. Setel ke true jika Anda ingin menangani kegagalan secara manual.
        // service (AWS.S3) — objek layanan S3 opsional yang digunakan untuk permintaan. Objek ini mungkin memiliki parameter terikat yang digunakan oleh pengupload.
        // tags (Array<map>) — Tag yang akan diterapkan ke objek yang diunggah. Setiap tag harus memiliki Key dan Value key.
        var fileUploaded=  {
            client:client,
            params,
            tags:[{Key: 'tag1', Value: 'value1'}, {Key: 'tag2', Value: 'value2'}],
            queueSize: 4,
            partSize: 1024 * 1024 * 5,
            leavePartsOnError:false


        }
    
       try {
        var pararel = new Upload(fileUploaded)
        pararel.on("httpUploadProgress", (progress) => {
            console.log(" ----- ",progress);
          });
        
          await pararel.done();
       } catch (error) {
        res.send(error.message)
       }
    
        
    
    
}