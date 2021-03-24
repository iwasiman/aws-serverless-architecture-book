// jsonwebtokenとrequestモジュールをインポートしておく

exprots.handler = function(event, context, callback) {
    if (!event.authToken) {
      // トークンがない場合の処理
    }
    // Authorization: Bearer XXXと飛んでくるのでXXXを抽出
    let token = event.authToken.split(' ')[1];
    let secretBuffer = new Buffer({環境変数からAuth0シークレット取得});
    jwt.verify(token, secretBuffer, function(err, decoded) {
        if (err) {
          // エラー処理でcallback('失敗!!'); を呼ぶ
        } else {
          let body = {'id_token': token};
        }
        // Auth0のドメインにある/tokeninfo というリソースを指定。
        let options = {いろいろ};
        request(options, function(error, response, body) {
          if (!error && response.statusCode === 200) {
            callback(null, body); // 本来の通信先と通信して正常時
          } else {
            callback('失敗!');
          }
        });
  
      }
    })
  };
  