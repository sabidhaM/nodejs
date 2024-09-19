require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/VE_FnTjO5GysPHrYdYQE2kVQVEP0uIqV",
      accounts: [`0b9104bf3abbd0b04666a6b9d3a5e3ddeee20e0703ba91901d40d0b179be3ac4`],
    },
  },
};
