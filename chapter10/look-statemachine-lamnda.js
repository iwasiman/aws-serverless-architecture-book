let pamrs = { executionArn : {実行開始時に返ってくるArn} };
stepFunctions.describeExecution(params, function(err, data) {
  if (err) {
  } else {
    //この中にステートマシン内部で実行された関数群がcallbackに渡した値が入っている
    console.log(data); 
  }
});
