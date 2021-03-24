  // いろいろ省略
  let database = firebase.database.ref(); // ツリーのルート取得
  // videosがノード(=RDBのテ―ブル)、videoKeyをキーとして１件UPDATE
  database.child('videos').child(videoKey)
    .set({
      transcoding: false,
      key: {S3のキー(ファイル名)},
      bucket: {バケット名}
    })
    .catch(function (err) {
      callback(err); // エラー処理
    });
