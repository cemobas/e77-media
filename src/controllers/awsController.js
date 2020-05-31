var awsConfig = require('aws-config');
const fs = require('fs');
var AWS = require('aws-sdk');

export const getImage = (req, res) => {
    var filePath = `${req.params.dir}/${req.params.id}/${req.params.index}.jpg`;
    console.log('Trying to download file', filePath);

    var s3 = new AWS.S3({
        accessKeyId: process.env.S3_KEY,
        secretAccessKey: process.env.S3_SECRET
    });

    var options = {
        Bucket: 'e77-media',
        Key: filePath,
    };

    s3.getObject(options, function(err, data) {
        if (err) {
            console.log("ERR getImage: " + err);
        } else {
            console.log('download OK: ' + filePath);
            res.attachment(filePath);
            res.send(data.Body);
        }
    });
}

export const getAuthorImage = (req, res) => {
    var filePath = `${req.params.dir}/${req.params.nickname}.jpg`;
    console.log('Trying to download file', filePath);

    var s3 = new AWS.S3({});

    var options = {
        Bucket: 'e77-media',
        Key: filePath,
    };

    s3.getObject(options, function(err, data) {
        if (err) {
            console.log("ERR getAuthorImage: " + err);
        } else {
            console.log('download OK: ' + filePath);
            res.attachment(filePath);
            res.send(data.Body);
        }
    });
}

export const uploadImage = (req, res) => {

    var s3 = new AWS.S3();
    var filePath = `./public/bruxel.jpg`
    var destination = `${req.params.dir}/${req.params.id}/${req.params.index}.jpg`;
    console.log('Trying to upload file ', filePath);

    var params = {
        Bucket: 'e77-media',
        Body : fs.createReadStream(filePath),
        Key : destination
    };

    s3.upload(params, function (err, data) {
        if (err) {
            console.log("ERR uploadImage: ", err);
        }
        if (data) {
            console.log("Uploaded in: ", data.Location);
        }
    });
}