const monocloud_breakboard = require('monocloud-breakboard');
const monocloud_dashboard_fetch = require('monocloud-dashboard-fetch');
const redux = require('redux');
const debug = require('debug');
const chalk = require('chalk');
const ipfs_http_client = require('ipfs-http-client');
const nodemon = require('nodemon');
const ethereumjs_util = require('ethereumjs-util');
const jquery = require('jquery');
const babel_core = require('babel-core');
const webpack = require('webpack');
const validator = require('validator');
const moment = require('moment');
const web3 = require('web3');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name? ', answer => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});

const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log('Users:', users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
getUsers();

const countOccurrences = (arr, val) => {
  return arr.reduce((acc, curr) => (curr === val ? acc + 1 : acc), 0);
};
console.log(countOccurrences([1, 2, 3, 4, 4, 4, 5], 4));

// Deploy a smart contract using Hardhat
const hre = require('hardhat');
const { ethers } = hre;

async function main() {
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.deploy();
  await contract.deployed();

  console.log('Contract deployed to:', contract.address);
}

main().catch(err => {
  console.error('Error deploying contract:', err);
});

const net = require('net');
const server = net.createServer((socket) => {
  socket.end('Hello from TCP server!\n');
});
server.listen(1337, '127.0.0.1');

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// Convert a string to title case
function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}
console.log('Title case:', toTitleCase('hello world'));

// Get the Ethereum network ID
web3.eth.net.getId().then(networkId => {
  console.log('Network ID:', networkId);
}).catch(err => {
  console.error('Error getting network ID:', err);
});

const path = require('path');
console.log(`The file name is ${path.basename(__filename)}`);

const timerId = setTimeout(() => console.log('You will see this message after 3 seconds'), 3000);
clearTimeout(timerId);

const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret).update('Hello HMAC').digest('hex');
console.log(`HMAC: ${hash}`);

const url = require('url');
const myUrl = new URL('https://example.com/foo/bar?query=string');
console.log('Pathname:', myUrl.pathname);
console.log('Query:', myUrl.searchParams.get('query'));