const NodeRSA = require('node-rsa');

const key = new NodeRSA({ b:1024 });
let secret = "This is a non readable secret";

var encryptedString = key.encrypt(secret,'base64');//public
console.log("encryptedString :",encryptedString);

var decrptedString = key.decrypt(encryptedString,'utf8');// private
console.log("decryptedString :",decrptedString);
