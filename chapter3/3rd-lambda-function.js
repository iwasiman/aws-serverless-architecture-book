exports.handlerの内部で呼ぶ内部関数で、
// S3バケット内の動画をローカルの/tmpに展開
let file = fs.createWriteStream(('/tmp' + {ローカル上のファイル名} );
let stream= s3.getObject({
  Bucket: {バケット名},
  Key: {キーのファイル名}
  }).createReadStream().pipe(file);

steam.on('error', function(error) {
  callback(error);
});
stream.on('close', function() {
  // 展開し終わったら次の内部関数へ
});

// ffprobe ユーティリティを使ってメタデータを抽出
let cmd = 'bin/ffprobe -.....{オプションやファイル名など}';
// exec関数でコマンド実行！
exec(cmd, function(error, stdout, stderr) {
  if (error === null) {
    // エラーがなかったら変数stdoutの中が出力のメタデータなので
    // メタデータ用の別のS3バケットに保存
  } else {
    console.log(stderr);
    callback(error);
  }
});