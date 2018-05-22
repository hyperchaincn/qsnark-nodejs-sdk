var conf = require('../conf.js')

exports.Tokens = Tokens;

function Tokens(accessKey, secretKey, phone, password) {
    this.accessKey = accessKey || conf.ACCESS_KEY;
    this.secretKey = secretKey || conf.SECRET_KEY;
    this.phone = secretKey || conf.PHONE;
    this.password = password || conf.PASSWORD;

    this.token = null
    /*
    Token
    {
      "access_token": "P5EALRU-O_EIT1PEJAHYQG",
      "expires_in": 7200,
      "refresh_token": "HAGQZRWXWNYL3FNMC_UAXG",
      "scope": "all",
      "token_type": "
    }
    */
}

Tokens.prototype.toArgs = function () {
    return {
      "phone":this.phone,
      "password":this.password,
      "client_id":this.accessKey,
      "client_secret":this.secretKey,
    }
}

Tokens.prototype.setToken = function(token) {
  this.token = token
}

Tokens.prototype.getAccessToken = function () {
    return this.token.access_token
}

Tokens.prototype.getRefreshToken = function() {
  return this.token.refresh_token
}
