// Ethers JS: First interaction with Hardhat blockchain.
////////////////////////////////////////////////////////////

// Exercise 0. Load dependencies and network provider.
//////////////////////////////////////////////////////

// a. Require the `dotenv` and `ethers` packages.
// Hint: As you did multiple times now.

// Your code here!
require('dotenv').config();
const ethers = require ("ethers");

//console.log(process.env);

// Exercise 1. Create a JSON RPC Provider for the Hardhat blockchain.
/////////////////////////////////////////////////////////////////////

// Hint: you will find the info printed to console after you start the hardhat
// blockchain.

// Your code here!
const hardhatUrl = 'http://127.0.0.1:8545/';
const hardhatProvider = new ethers.JsonRpcProvider(hardhatUrl);


// Exercise 2. Let's query the provider.
////////////////////////////////////////

// Hardhat Blockchain is too long. Let's call it NUMA.
// Print to console the network name, chain id, and block number of NUMA.

const networkInfo = async () => {
   
    let net = await hardhatProvider.getNetwork();
    console.log('Exercise 2 -- HARDHAT INFO: ');
    console.log('Network Name: ', net.name);
    console.log('Chain Id: ', net.chainId);

    let blockNumber = await hardhatProvider.getBlockNumber();
    console.log('Block No.: ', blockNumber)
};

networkInfo();


// Exercise 3. Connect a signer to the Hardhat blockchain.
//////////////////////////////////////////////////////////

// Hint: you will find the info printed to console after you start the hardhat
// blockchain.

let hhPrivateKey = "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a";

// Your code here!
const signer = new ethers.Wallet(hhPrivateKey, hardhatProvider); 

// b. Print the next nonce necessary to send a transaction.
// Hint: .getNonce()

const getNonce = async() => {

    let nonce = await signer.getNonce();
    console.log('Exercise 3b');
    console.log('Nonce: ', nonce);
};

getNonce();


// Exercise 4. Check gas.
/////////////////////////

// a. Let's get some gas from the faucet. What is the faucet's address? 
// Check the slides in ILIAS.
// Hint: only accessible within UniMa network.

// b. Check your balance on UniMa network.

const checkBalance = async () => {

    let balance = await hardhatProvider.getBalance(signer.address);
    console.log('Exercise 4b');
    console.log('Address : ', signer.address);
    console.log('Balance : ', balance);
};
checkBalance();

// Exercise 5. Send a transaction.
//////////////////////////////////

// Send some Ether from one of your accounts to another one on NUMA.

const account2 = process.env.METAMASK_1_ADDRESS;
const accountNUMA = process.env.METAMASK_2_ADDRESS;

const sendTransaction = async () => {

    const hardhatSigner = signer;

    console.log('Exercise 5');

    console.log('Hardhat address :', hardhatSigner);
    console.log('Account2 address :', accountNUMA);

    let b1 = await hardhatProvider.getBalance(hardhatSigner.address);
    let b2 = await hardhatProvider.getBalance(accountNUMA);

    b1 = ethers.formatEther(b1);
    b2 = ethers.formatEther(b2);

    tx = await hardhatSigner.sendTransaction({
        to: accountNUMA,
        value: ethers.parseEther("0.0001")
    });

    console.log('Waiting in mempools...');
    await tx.wait();

    console.log('Transaction is mined!')

    let ub1 = await hardhatProvider.getBalance(hardhatSigner.address);
    let ub2 = await hardhatProvider.getBalance(accountNUMA);

    ub1 = ethers.formatEther(ub1);
    ub2 = ethers.formatEther(ub2);

    console.log('Balance for: ', signer.address, 'before: ', b1, '// after: ', ub1);
    console.log('Balance for: ', accountNUMA, 'before: ', b2, '// after: ', ub2);

};
sendTransaction();


const sendTransaction2 = async () => {

    const hardhatSigner = signer;

    console.log('Exercise 5b');

    console.log('Hardhat address :', hardhatSigner);
    console.log('Account2 address :', account2);

    let b1 = await hardhatProvider.getBalance(hardhatSigner.address);
    let b2 = await hardhatProvider.getBalance(account2);

    b1 = ethers.formatEther(b1);
    b2 = ethers.formatEther(b2);

    tx = await hardhatSigner.sendTransaction({
        to: account2,
        value: ethers.parseEther("0.0001")
    });

    console.log('Waiting in mempools...');
    await tx.wait();

    console.log('Transaction is mined!')

    let ub1 = await hardhatProvider.getBalance(hardhatSigner.address);
    let ub2 = await hardhatProvider.getBalance(account2);

    ub1 = ethers.formatEther(ub1);
    ub2 = ethers.formatEther(ub2);

    console.log('Balance for: ', signer.address, 'before: ', b1, '// after: ', ub1);
    console.log('Balance for: ', account2, 'before: ', b2, '// after: ', ub2);

};


sendTransaction2();