require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require("dotenv").config();
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');

/** @type import('hardhat/config').HardhatUserConfig */

import ('hardhat/config').HardhatUserConfig
const INFURA_KEY = process.env.INFURA_KEY;
const INFURA_URL = process.env.INFURA_GOERLI_API_URL;
const GOERLI_RPC_URL = `${INFURA_URL}${INFURA_KEY}`;

console.log(GOERLI_RPC_URL); 
console.log('------------------------')

// Beware: NEVER put real Ether into testing accounts.
const MM_PRIVATE_KEY = process.env.METAMASK_2_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "localhost" 
};

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "localhost",
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  },
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [ MM_PRIVATE_KEY ],
    },
    // unima1: {
    //   url: process.env.NOT_UNIMA_URL_2,
    //   accounts: [ MM_PRIVATE_KEY ],
    // },
    // unima2: {
    //   url: process.env.NOT_UNIMA_URL_2,
    //   accounts: [ MM_PRIVATE_KEY ],
    // },
  },
};