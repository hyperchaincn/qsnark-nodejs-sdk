# 趣链开发者平台 Qsnart Nodejs SDK
提供开发者平台接口封装，Nodejs版  

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
