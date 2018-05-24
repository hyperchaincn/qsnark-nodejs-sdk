# 趣链开发者平台 Node.js SDK
帮助Node.js开发者便利的使用趣链开发者平台API

# 安装
```
npm install qsnart  
```

# 使用  
```

var qsnart = require('qsnart')

qsnart.conf.ACCESS_KEY = ' ';
qsnart.conf.SECRET_KEY = ' ';
qsnart.conf.PHONE = ' ';
qsnart.conf.PASSWORD = ' ';

var api = new qsnart.core.Qsnack()

api.queryBlock("number",2,function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log("Blocks ===>",JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

# 接口
## 授权
### 1.获取Token
无特殊需求不需要主动获取，调用其他接口前会检查token并自动获取token和保持。
```
qsnack.getAccessToken()
```

### 2.刷新Token
Token失效可主动刷新
```
qsnack.refreshAccessToken()
```

## 区块
### 1.查询区块信息
```
qsnack.queryBlock("number","latest ",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

### 2.分页获取区块信息
```
qsnack.queryBlockPage("1","3",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

### 3.查询某范围内区块信息
```
qsnack.queryBlockRange("2","4",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

## 交易
### 1.获取交易总数
```
qsnack.transactionCount(function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

### 2.通过hash查询某交易
```
qsnack.queryTransaction("0xed70377c261bfdc7dd7f4fc15c8961c145f9457186d6ff95f60907e9fb63d827",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

### 3.查询交易回执
```
qsnack.transactionTxreceipt("0xed70377c261bfdc7dd7f4fc15c8961c145f9457186d6ff95f60907e9fb63d827",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})

```

### 4.查询无效交易
```
qsnack.discardTransaction("1515140350903604865","1515140350903604867",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

## 合约
### 1.编译合约
```
qsnack.compileContract("contract test{}",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

### 2.部署合约
```
异步
qsnack.deployContract("0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a72305820b4c36b8b61723f302432d246407a061599017f8607ed26f1c053b5ecc63a54200029","0x3713c3d01ae09cf32787c9c66c9c0781cf4b613d",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})

同步
qsnack.deployContractSync("0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a72305820b4c36b8b61723f302432d246407a061599017f8607ed26f1c053b5ecc63a54200029","0x3713c3d01ae09cf32787c9c66c9c0781cf4b613d",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

### 3.获取调用方法Payload
```
var abi = "[{\"constant\":false,\"inputs\":[{\"name\":\"num1\",\"type\":\"uint32\"},{\"name\":\"num2\",\"type\":\"uint32\"}],\"name\":\"add\",\"outputs\":[],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getSum\",\"outputs\":[{\"name\":\"\",\"type\":\"uint32\"}],\"payable\":false,\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"increment\",\"outputs\":[],\"payable\":false,\"type\":\"function\"}]"
var args = ["1","2"]
var func = "add"
qsnack.getPayload(abi,args,func,function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

### 4.调用合约方法
```
var data =   {
        "Const": false,
        "From": "0x3713c3d01ae09cf32787c9c66c9c0781cf4b613d",
        "Payload": "34141",
        "To": "0x8255340c2c4a1aec4010d2b6fdbb98727c65523d"
  }
qsnack.invokeContract(data,function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

### 5.同步调用合约方法
```
var data =   {
        "Const": false,
        "From": "0x3713c3d01ae09cf32787c9c66c9c0781cf4b613d",
        "Payload": "34141",
        "To": "0x8255340c2c4a1aec4010d2b6fdbb98727c65523d"
  }
qsnack.invokeContractSync(data,function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

### 6.合约维护
```
var data =   {
        "From": "0x19a170a0413096a9b18f2ca4066faa127f4d6f4a",
        "Operation": 1,
        "Payload": "0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a72305820b4c36b8b61723f302432d246407a061599017f8607ed26f1c053b5ecc63a54200029",
        "To": "0xd3a7bdd391f6aa13b28a72690e19d2ab3d845ac8"
        }
qsnack.maintainContract(data,function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

### 7.查询合约状态
```
qsnack.contractStatus("0xd3a7bdd391f6aa13b28a72690e19d2ab3d845ac8",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```

## 账户
### 1.新建区块链账户
```
qsnack.createAccount(function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
```
