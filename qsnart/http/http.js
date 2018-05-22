var request = require('request')

exports.get = function(url, tokens, callback){
  console.log( tokens?tokens.getAccessToken():"null")
    request({
        url: url,
        method: "GET",
        headers: {
            "Authorization": tokens?tokens.getAccessToken():"",
        },
    }, function(error, response, body) {
        callback(error, response, body)
    });
}

exports.postjson = function(url, tokens, requestData, callback){
    request({
        url: url,
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization": tokens?tokens.getAccessToken():"",
        },
        body: JSON.stringify(requestData)
    }, function(error, response, body) {
        callback(error, response, body)
    });
}

exports.postform = function(url, tokens, requestData, callback){
    request({
        url: url,
        method: "POST",
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Authorization": tokens?tokens.getAccessToken():"",
        },
        form: requestData,
    }, function(error, response, body) {
        callback(error, response, body)
    });
}
