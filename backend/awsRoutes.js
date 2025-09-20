const express = require('express');
require("dotenv").config({path: "./config.env"});
const {S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand} = require("@aws-sdk/client-s3");
const {getSignedUrl} = require("@aws-sdk/s3-request-presigner");
const {v4: uuidv4} = require("uuid");
let awsRoutes = express.Router();

const s3Bucket = "knitting-workspace-storage";

const s3Client = new S3Client({
    region: "us-east-2",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }
});
// Get one 
awsRoutes.route("/pdfs/:id").get(async (request, response) => {
    const key = request.params.id;
    const command = new GetObjectCommand({
        Bucket: s3Bucket,
        Key: key 
    });
    const signedUrl = await getSignedUrl(s3Client, command, {expiresIn: 60*10 });
    response.json({signedUrl});
});

// Create one
awsRoutes.route("/pdfs").post(async (request, response) => {
    try {
        const file = request.files[0];
        const key = `patterns/${Date.now()}-${uuidv4()}-${file.originalname}`;
        const bucketParams = {
            Bucket: s3Bucket,
            Key: key,
            Body: file.buffer,
            ContentType: file.mimetype
        };
        await s3Client.send(new PutObjectCommand(bucketParams));
        response.json({key});    
    } catch (error) {
        console.error(error);
        response.status(500).json({error: "Failed to upload PDF"});
    }
    
});

// Delete one
// awsRoutes.route("/images/:id").delete(async (request, response) => {
 
//     response.json(data);
// });


module.exports = awsRoutes;