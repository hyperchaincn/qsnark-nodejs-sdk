var qsnack = require('../qsnart/api.js')

var qsnack = new qsnack.Qsnack()

qsnack.queryBlock("number","latest ",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})

qsnack.queryBlockPage("1","3",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})

qsnack.queryBlockRange("2","4",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})

qsnack.compileContract("contract test{}",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})

qsnack.deployContract("0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a72305820b4c36b8b61723f302432d246407a061599017f8607ed26f1c053b5ecc63a54200029","0x3713c3d01ae09cf32787c9c66c9c0781cf4b613d",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})


qsnack.deployContractSync("0x60606040523415600e57600080fd5b5b603680601c6000396000f30060606040525b600080fd00a165627a7a72305820b4c36b8b61723f302432d246407a061599017f8607ed26f1c053b5ecc63a54200029","0x3713c3d01ae09cf32787c9c66c9c0781cf4b613d",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})

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


qsnack.contractStatus("0xd3a7bdd391f6aa13b28a72690e19d2ab3d845ac8",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})


qsnack.transactionCount(function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})

qsnack.queryTransaction("0xed70377c261bfdc7dd7f4fc15c8961c145f9457186d6ff95f60907e9fb63d827",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})


qsnack.transactionTxreceipt("0xed70377c261bfdc7dd7f4fc15c8961c145f9457186d6ff95f60907e9fb63d827",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})

qsnack.discardTransaction("1515140350903604865","1515140350903604867",function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})

qsnack.createAccount(function(error,response,body){
     if(!error && response.statusCode == 200){
        console.log(JSON.parse(body))
     }else{
        console.error(error,response.statusCode);
     }
})
