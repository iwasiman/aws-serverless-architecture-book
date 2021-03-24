// 初期処理
let firebase = require('firebase');
firebase.initializeApp({
  serviceAccount: {環境変数から取得}
  databaseUrl: {環境変数から取得}
});

exports.hander = function(event, context, callback) {
  // コールバックが呼び出されるとLambdaが待つのをやめて一時停止
  context.callbackWaitsForEmptyEventLoop = false;
  
  // 中の内部関数で...
  let database = firebase.database.ref(); // ツリーのルート取得
  // videosがノード(=RDBのテ―ブル)、そこにkeyをキーとして１件INSERT
  database.child('videos').child(key)
    .set({
      transcoding: true
    })
    .then(function (){
      callback(null, 'Firebaseに保存完了!');
    })
    .catch(function (err) {
      callback(err); // エラー処理
    });
  
};
