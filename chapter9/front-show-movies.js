firebase.initializeApp({設定群});
// 接続しているかが分かるFirebase提供のフラグ。
let is ConnectRef = firebase.database().ref('.info/connected');
let nodeRef = firebase.database.ref('videos'); // videosノードを参照

// このフラグで画面が今オンライン/オフラインかが分かって制御できる
isConnectRef.on('value', function(snap) {
  if (snap.val() ===true) {
    // UIでローディング表示を消したり
  }
});

// 新しい動画が追加されると実行されるクロージャ
nodeRef.on('child_added', function(childSnapshot) {
  // UIで動画１件の表示を足す処理。変数childSnapshotに中身が入っている
});
// 既存の動画が変更されると実行されるクロージャ
nodeRef.on('child_changed', function(childSnapshot) {
  // UIで動画１件の表示を変更する処理。変数childSnapshotに中身が入っている
});

