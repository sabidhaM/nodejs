const Wallet = require('ethereumjs-wallet');

//generate a new wallet
const wallet = Wallet.default.generate();

console.log(`privete key: ${wallet.getPrivateKeyString()}`);
console.log(`Public key: ${wallet.getPublicKeyString()}`);
console.log(`ethereum address: ${wallet.getAddressString()}`);
