"use strict";
const AWS = require("aws-sdk");
const fs = require("fs");
const { projectSourceDir } = require("../../server");

const s3bucket = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const uploadPdfToS3 = (item, fileName) => {
  let params = {
    Bucket: process.env.DOCS_BUCKET_NAME,
    Key: `pdf/${fileName}`,
    Body: item,
    ACL: "public-read",
    region: "ap-south-1",
  };
  const promise = new Promise(function (resolve, reject) {
    try {
      s3bucket.upload(params, function (err, uploadedFile) {
        if (err) {
          reject(err);
        } else {
          resolve(uploadedFile);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
  return promise;
};

module.exports = {
  uploadPdfToS3,
};
