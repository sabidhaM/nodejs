const crypto = require('crypto');
const readline = require('readline');

// function to create a hash from a given text
function createHash(text) {
    return crypto.createHash('sha256').update(text).digest('hex');

}

// create readline interface for command line input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

// prompt user for input
rl.question('Enter the text :', (originalText)=>{
    //create hash 
    const hashText = createHash(originalText);

    // output the hash and original text
    console.log('original Text:', originalText);
    console.log('Hash Text:', hashText);
   
    // close the readline interface
    rl.close();

})
