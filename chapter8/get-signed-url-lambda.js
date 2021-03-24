const params = {Bucket: bucket_name, key: file_name, Expires: 18000};
let url = s3.getSignedUrl('getObject', params);
