const { S3Client } = require('@aws-sdk/client-s3');

const config = {
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET
    },
    endpoint:process.env.ENDPOINT
}
const s3 = new S3Client(config);

module.exports = s3;
