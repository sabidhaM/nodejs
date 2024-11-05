async function main() {
  const HelloWorld = await ethers.getContractFactory("dataupdate");
  console.log("Deploying Contract...")
 // const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/VE_FnTjO5GysPHrYdYQE2kVQVEP0uIqV");
  const helloWorld = await HelloWorld.deploy("sabitha");
  /*const tx = {
    from: "0xb158f825c535Ca511087d2a03aD1329A675eEA60",
    to: "0x638B3DC0Cd809dcBFc035aB9862448bb0db8850b",
    data: "0x3d7403a300000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010476f6f64204279652c20576f726c642100000000000000000000000000000000",
    gasLimit: 0, // Adjust this value as needed
  };*/
  
 // const txResponse = await providers.sendTransaction(tx);
  //console.log("Contract deployed to address:",  txResponse.contractAddress);

  const txHash = helloWorld.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  console.log("Contract deployed to address:",  txReceipt.contractAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


