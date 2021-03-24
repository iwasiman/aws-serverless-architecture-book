exports.handler = function(event, context, callback) {
    // いろいろ省略
    let params = {
     PipelineId: {使用開始したElastic TranscoderのID}, 
     OutputKeyPrefix: {出力フォルダ},
     Input: { Key: {入力ファイル名} },
     Outputs: [
       {出力のプリセット群}
     ]
    };
    elasticTranscoder.createJob(params, function(error, data) {
      if (error) {
        callback(error);
    });
  };