export.handler = function(event, context, callback) {
    if (!event.authorizationToken) {
      callback('トークンがない!');
      return;
    }
    // Authorization: Bearer XXX のXXXを取得
    let token = event.authorizationToken.split(' ')[1];
    let secretBuffer = new Buffer({環境変数のAuth0シークレット});
    jwt.verify(token, secretBuffer, function(err, decoded) {
      if (err) {
        callback('JWTで認証失敗!');
      } else {
        // 下のIAMポリシーがAPI Gatewayに返される。内部関数で生成したり。
        callback(null, {JSオブジェクト形式で作られたIAMポリシー});
      }
    });
  };
  