  // いろいろ省略
  let params = {
    Bucket: {バケット名},
    Key: {キーのファイル名},
    ACL: 'public-read'
  };
  s3.putObjectAcl(params, function(err, data) {
    if (err) {
      callback(err);
    }
  });