const crypto = require("crypto");

//  original data 
const data = "crucial secret key";

// Hashing (using SHA256)
const hash = crypto.createHash('sha256').update(data).digest('hex');
console.log(`Original data: ${data}`);
console.log("Hash:", hash);
