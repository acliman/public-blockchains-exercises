require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "localhost"
};
