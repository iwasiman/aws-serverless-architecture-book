let AWS = require('aws-sdk');
let stepFunctions = new AWS.StepFunctions();
let params = {
  stateMachineArn: {ステートマシンのARN},
  input: {この例では入力となるバケット名とファイル名},
  name: {好きなラベル名}
};
stepFunctions.startExecution(params, function(err, data) {
  if (err) {
    callback(err);
  } else {
    callback(null, 'ステートマシン実行開始! execututionArn: ' + data.executionArn);
  }
});
