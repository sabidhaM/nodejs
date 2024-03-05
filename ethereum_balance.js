const {ethers, providers} = require("ethers");
const {formatUnits} = require("@ethersproject/units");

const provider = new ethers.providers.AlchemyProvider('goerli', 'YSO7gWJinC6kEg0tnF0XXUxXO8aKRTB4');

async function getBalance(){
    try{
        let address = "0xb158f825c535Ca511087d2a03aD1329A675eEA60";
        let balance = await provider.getBalance(address);
        let ethBalance = formatUnits(balance, "ether");
        console.log("balance", ethBalance);
        let block = await provider.getBlock();
        console.log("block", block);
        let blockNo = await provider.getBlockNumber();
        console.log("blockNo", blockNo);

    }catch(e){
        console.error(e);
    }
}
getBalance();
