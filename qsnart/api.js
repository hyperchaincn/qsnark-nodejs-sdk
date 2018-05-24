var http = require('./http/http.js')
var addr = require('./constant.js')
var token = require('./token/token.js')

exports.Qsnack = Qsnack

function Qsnack(tokens){
    this.Tokens = tokens || new token.Tokens()
}

// 获取Access Token
Qsnack.prototype.getAccessToken = function (callback) {
  var c = this
  var url = addr.HOST+addr.GET_ACCESS_TOKEN_API
  http.postform(url,null,this.Tokens.toArgs(),function(error,response,body){
       if(!error && response.statusCode == 200){
          c.Tokens.setToken(JSON.parse(body))
          console.log("获得AccessToken:",c.Tokens.getAccessToken())
          if(callback){
            callback()
          }
       }else{
          console.error(error,response.statusCode);
       }
    })
};

// 刷新Access Token
Qsnack.prototype.refreshAccessToken = function () {
  var url = addr.HOST + addr.REFRESH_ACCESS_TOKEN_API
  var data = {
    "refresh_token":this.Tokens.token.refresh_token,
    "client_id":this.Tokens.accessKey,
    "client_secret":this.Tokens.secretKey,
  }
  var c = this

  http.postform(url,null,data,function(error,response,body){
       if(!error && response.statusCode == 200){
          c.Tokens.setToken(JSON.parse(body))
          console.log("刷新AccessToken:",c.Tokens.getAccessToken())
       }else{
          console.error(error,response.statusCode);
       }
  })
}

Qsnack.prototype.authWrapper = function (func){
  var c = this
  if (!c.Tokens.token){
     this.getAccessToken(function(){
       func(c.Tokens)
     })
     return
  }
  func(c.Tokens)
}

// 查询区块信息
Qsnack.prototype.queryBlock = function (type,value,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.QUERY_BLCOK_API+"?type="+type+"&value="+value
     http.get(url,token,callback)
  })
}

// 查询区块信息(分页)
Qsnack.prototype.queryBlockPage = function (index,pageSize,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.QUERY_BLCOK_PAGE_API+"?index="+index+"&pageSize="+pageSize
     http.get(url,token,callback)
  })
}

// 按区间查询区块
Qsnack.prototype.queryBlockRange = function (from,to,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.QUERY_BLCOK_RANGE_API+"?from="+from+"&to="+to
     http.get(url,token,callback)
  })
}

// 编译合约
Qsnack.prototype.compileContract = function (code,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.COMPILE_CONTRACT_API
     var data = {
       "CTCode":code
     }
     http.postjson(url,token,data,callback)
  })
}

// 部署合约
Qsnack.prototype.deployContract = function (bin,from,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.DEPLOY_CONTRACT_API
     var data = {
       "Bin":bin,
       "From":from,
     }
     http.postjson(url,token,data,callback)
  })
}

// 同步部署合约
Qsnack.prototype.deployContractSync = function (bin,from,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.DEPLOY_CONTRACT_SYNC_API
     var data = {
       "Bin":bin,
       "From":from,
     }
     http.postjson(url,token,data,callback)
  })
}

// 获取 Payload
//调用合约需要转入合约方法与合约参数编码后的input字节码,该接口可为用户返回Payload
Qsnack.prototype.getPayload = function (abi,args,func,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.GET_PAYLOAD_API
     var data = {
       "Abi":abi,
       "Args":args,
       "Func":func,
     }
     http.postjson(url,token,data,callback)
  })
}

// 调用合约
Qsnack.prototype.invokeContract = function (data,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.INVOKE_CONTRACT_API
     http.postjson(url,token,data,callback)
  })
}

// 同步调用合约
Qsnack.prototype.invokeContractSync = function (data,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.INVOKE_CONTRACT_API
     http.postjson(url,token,data,callback)
  })
}

// 合约维护
Qsnack.prototype.maintainContract = function (data,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.MAINTAIN_CONTRACT_API
     http.postjson(url,token,data,callback)
  })
}

// 合约状态
Qsnack.prototype.contractStatus = function (address,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.CONTRACT_STATUS_API+"?address="+address
     http.get(url,token,callback)
  })
}

// 查询交易总数
Qsnack.prototype.transactionCount = function (callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.TRANSACTION_COUNT_API
     http.get(url,token,callback)
  })
}

// 查询交易信息
Qsnack.prototype.queryTransaction = function (hash,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.QUERY_TRANSACTION_API+"?hash="+hash
     http.get(url,token,callback)
  })
}

// 交易信息回执
Qsnack.prototype.transactionTxreceipt = function (txhash,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.TRANSACTION_TXRECEIPT_API+"?txhash="+txhash
     http.get(url,token,callback)
  })
}

// 非法交易
Qsnack.prototype.discardTransaction = function (start,end,callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.DISCARD_TRANSACTION_API+"?start="+start+"&end="+end
     http.get(url,token,callback)
  })
}

// 新建区块链账户
Qsnack.prototype.createAccount = function (callback) {
  this.authWrapper(function(token){
     var url = addr.HOST + addr.CREATE_ACCOUNT_API
     http.get(url,token,callback)
  })
}
