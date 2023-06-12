# Twilite SDK: Ethereum Development Simplified
The easiest way to develop applications that utilize the Ethereum blockchain.

</br>

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Understanding Ethereum Networks](#understanding-ethereum-networks)
4. [Requirements and Installation](#requirements-and-installation)
5. [Adding Ether to Your Account](#adding-ether-to-your-account)
6. [Usage](#usage)
    - [Create Account](#create-account)
    - [Get Balance](#get-balance)
    - [Get Costs](#get-costs)
    - [Estimate Ether Transaction](#estimate-ether-transaction)
    - [Send Ether](#send-ether)
    - [Estimate Cost of Contract Deployment](#estimate-cost-of-contract-deployment)
    - [Deploy Contract](#deploy-contract)
    - [Get Contract Variable](#get-contract-variable)
    - [Estimate Contract Method Call](#estimate-contract-method-call)
    - [Call Contract Method](#call-contract-method)
7. [Understanding Costs](#understanding-costs)
8. [Private Key Security](#private-key-security)

</br>

## Overview

TwiLite SDK is designed to greatly simplify your development process for the Ethereum blockchain. By automating the majority of tasks, it allows you to focus on making straightforward JavaScript-based method calls using the TwiLite SDK. With TwiLite, you can effortlessly send Ether, deploy and interact with smart contracts, and much more, all while enjoying significantly less complexity than other libraries or approaches.

For instance, with TwiLite SDK, you can deploy a smart contract using just a single method call that automatically handles smart contract compilation, gas estimation, and deployment. This simplicity ensures a smoother, more efficient development experience for your Ethereum projects.

If you would like to see and interact with an example implementation of TwiLite SDK, check out the "workbench" section of the twilite website: https://www.twilite.co/workbench.

</br>

## Features

TwiLite SDK is a powerful and user-friendly toolset for Ethereum blockchain development, offering a wide range of features to help you write, deploy, and interact with smart contracts. Below, we highlight some key features of TwiLite SDK:

#### *1. Smart Contract Management*

TwiLite SDK streamlines the process of writing smart contracts in Solidity, allowing you to focus on writing your contract logic while automating common tasks like compilation, deployment, and interaction. With TwiLite SDK, you can quickly test your smart contracts and smoothly transition them to production on the main network.

#### *2. Sending Ether*

Effortlessly perform Ether transactions on the Ethereum network using TwiLite SDK. This includes sending Ether between accounts or interacting with smart contracts that have payable functions. The SDK's simple API allows you to create transactions with minimal effort, regardless of the network you're working on.

#### *3. Account Management*

Creating and managing Ethereum accounts is made easy with TwiLite SDK. You can generate new accounts with a single method call. Further, you can conveniently check balances of your accounts.

#### *4. Gas and Transaction Cost Estimation*

Estimating the costs of transactions and smart contract interactions is crucial for efficient operations on the Ethereum network. TwiLite SDK includes built-in functionalities that enable you to estimate costs both in terms of gas and Ether, giving you greater control over your project's costs and ensuring you can optimize your smart contract interactions.

With TwiLite SDK's comprehensive suite of features, you'll experience a smooth and efficient development process while creating powerful and secure Ethereum projects.

</br>

## Understanding Ethereum Networks

Before diving into Ethereum development with TwiLite SDK, it is essential to understand the concept of networks. In the context of Ethereum, networks are separate blockchain instances. There are two main types of networks: Mainnet and Testnets.

### Mainnet

Mainnet is the primary Ethereum network, where real Ether is used. Transactions on the Mainnet consume real Ether for gas fees, and any operations performed here have real-world implications. It is generally used for deploying and interacting with production-ready applications and contracts.

### Testnets

Testnets, on the other hand, are separate networks designed for testing purposes. They use fake Ether (also known as test Ether) to facilitate development, testing, and debugging of your programs and applications without incurring real-world costs. Testnets are an excellent environment to ensure your smart contracts work correctly and securely before deploying them on the Mainnet.

There are several Ethereum testnets available. For the best experience with the TwiLite SDK, we recommend using the **Goerli** test network. It offers a reliable and efficient environment to test your Ethereum applications while taking advantage of TwiLite SDK's simplicity and streamlined workflow.

</br>

## Requirements and Installation

1. You'll need a twilite account and an API key. If you haven't done so already, head over to https://www.twilite.co and create an account. It's free to get started. Then, log in and go to the account page to get your API key: https://www.twilite.co/account.
2. Run `npm i twilite-sdk` to install the package.

</br>

## Adding Ether to Your Account

To fully utilize TwiLite SDK's functionality, you'll need to add Ether to your account. You can add testing Ether by using a faucet, which allows you to use Ether on a test network. To add Ether to your account, follow these steps:

1. To prevent bots and abuse, the Goerli faucet requires a minimum mainnet balance of 0.001 ETH on the wallet address being used. You can add this small amount of Ether to your account by purchasing it through a reputable exchange such as Coinbase and transferring it to a wallet.
2. Follow these instructions to add mainnet Ether to your account: https://help.coinbase.com/en/wallet/managing-account/buy-crypto
3. Once you have a minimum mainnet balance of 0.001 ETH, visit the Goerli test network faucet at https://goerlifaucet.com/ to add testing Ether to your account.

</br>

## Usage

To get started, import (or require) the twilite-sdk in your project.

```javascript
import twilite from 'twilite-sdk';

...
```
</br>

### Create Account

The `create` method provided by TwiLite SDK allows you to quickly and easily generate a new account that can be used on the Ethereum blockchain. When you call this method, it returns an object containing a public key, private key, and address for the newly created account.

To create a new account, simply call the `create` method from the TwiLite SDK as shown below:

```javascript
const account = twilite.account.create();
```

#### *Output*

The `create` method returns an object with the following properties:

- `privateKey`: A unique private key associated with the account.
- `publicKey`: The corresponding public key for the account.
- `address`: The Ethereum address associated with the account.

Here's an example of the returned object:

```json
{
   "privateKey": "f8c531ce408f2737f284f18cacbdfadf904115dbcf996b172aee6ec1c0d1c386",
   "publicKey": "38cd5eeee1132c565d799b4278bb4762d2d8d2290aa36e2d4fb01e664937beb72e3f0c7c706f7fbc22263110343fb96fb586b48819596a650872df02e0e1f959",
   "address": "0x48f84b5a93e8966e361e874ff9e4fdf945ad8c94"
}
```

Now you have a new account ready to use on the Ethereum blockchain!
Note: This account can be used on both mainnet (with real ether) and test networks such as "Goerli" for prototyping with fake ether.

</br>

### Get Balance

The `getBalance` method provided by TwiLite SDK allows you to retrieve the balance (in Ether) of a specified Ethereum account. To use this method, you need to provide `apiKey`, `address`, and `network` as arguments.

To retrieve the balance of a specified account, call the `getBalance` method from the TwiLite SDK as shown below:

```javascript
const result = await twilite.account.getBalance({
  apiKey: '<YOUR_API_KEY_HERE>', // string
  address: '<ACCOUNT_ADDRESS_HERE>', // string
  network: '<NETWORK_HERE>', // string. This can either be 'mainnet' or 'goerli'
});
```

Make sure to replace `<YOUR_API_KEY_HERE>`, `<ACCOUNT_ADDRESS_HERE>`, and `<NETWORK_HERE>` with the respective values for your use case.

#### *Output*

The `getBalance` method returns a string that contains the balance of the specified account in Ether.

For example, if the balance of the account is 3.50 Ether, the returned string would look like:

```
"3.5"
```

Use the `getBalance` method to easily keep track of the account balance and manage your funds on the Ethereum network.

</br>

### Get Costs

The `getCosts` method provided by TwiLite SDK allows you to retrieve the current costs associated with transactions on the Ethereum network. Using this method, you can obtain information about base fee, gas price, max priority fee per gas, and max fee per gas.

To retrieve the current costs for your specified network, call the `getCosts` method from the TwiLite SDK as shown below:

```javascript
const result = await twilite.utils.getCosts({
  apiKey: '<YOUR_API_KEY_HERE>', // string
  network: '<NETWORK_HERE>', // string. This can either be 'mainnet' or 'goerli'
});
```

Make sure to replace `<YOUR_API_KEY_HERE>` and `<NETWORK_HERE>` with the respective values for your use case.

#### *Output*

Here's an example of the returned object:

```json
{
  "baseFee": 3156059466,
  "gasPrice": 3147505989, // wei
  "maxPriorityFeePerGas": 30652934, // wei
  "maxFeePerGas": 6342771866 // wei
}
```
If you need help with understanding what this output means, head over to the [Understanding Costs](#understanding-costs) section of this README. 

Utilize the `getCosts` method to stay informed about transaction costs on the Ethereum network and optimize your project's gas consumption.

</br>

### Estimate Ether Transaction

The `estimate` method provided by TwiLite SDK under `twilite.etherTx` allows you to estimate the costs associated with sending Ether to a specific address. This method helps you manage and optimize your Ether transactions on the Ethereum network.

To estimate the costs of sending Ether to a specified address, call the `estimate` method from the TwiLite SDK as shown below:

```javascript
const result = await twilite.etherTx.estimate({
  apiKey: '<YOUR_API_KEY_HERE>', // string
  to: '<TO_ADDRESS_HERE>', // string
  network: '<NETWORK_HERE>', // string. This can either be 'mainnet' or 'goerli'
});
```

Make sure to replace `<YOUR_API_KEY_HERE>`, `<TO_ADDRESS_HERE>`, and `<NETWORK_HERE>` with the respective values for your use case.

#### *Output*

Here's an example of the returned object:

```json
{
  "estimatedTotalCost": 0.000019319498016, // ether
  "baseFee": 664327071, 
  "gasPrice": 919976096, // wei
  "maxPriorityFeePerGas": 255649025, // wei
  "maxFeePerGas": 1584303167, // wei
  "gasLimit": 21000 
}
```

If you need help with understanding what this output means, head over to the [Understanding Costs](#understanding-costs) section of this README. 

</br>

### Send Ether

The `post` method provided by TwiLite SDK under `twilite.etherTx` allows you to send ether to a specific address on the Ethereum network.

#### *Properties*

- `apiKey`: (string) Your API key for the TwiLite SDK. This is required for authentication and authorization purposes.
- `to`: (string) The Ethereum address that will receive the Ether. This must be a valid Ethereum address.
- `from`: (string) The Ethereum address that the Ether will be sent from. This must be a valid Ethereum address and have enough Ether to cover the transaction.
- `value`: (string) The amount of Ether to send, specified in Ether (not Wei). This must be a valid number and not exceed the available balance of the `from` address.
- `privateKey`: (string) The private key of the `from` address. This is required to sign the transaction and prove ownership of the address. Keep this key secure and never share it with anyone.
- `network`: (string) The Ethereum network to use for the transaction. This can either be `'mainnet'` for the main Ethereum network or `'goerli'` for the Goerli test network.
- `gasLimit`: (string, optional) The maximum amount of gas you are willing to spend on the transaction. If not specified, the SDK will estimate the gas limit for you. This is not required for the transaction, but can be useful to set an upper limit on gas fees.
- `timeout`: (number, optional) The maximum amount of time (in milliseconds) to wait for the transaction to be mined. Defaults to 10 minutes (600000 milliseconds) if not specified. This is not required for the transaction, but can be useful to set a timeout for long-running transactions.

To send ether to a specified address, call the `post` method from the TwiLite SDK as shown below:

```javascript
const result = await twilite.etherTx.post({
  apiKey: '<YOUR_API_KEY_HERE>', // string
  to: '<ADDRESS_TO_RECEIVE_ETHER>', // string
  from: '<ADDRESS_THAT_THE_ETHER_COMES_FROM>', // string
  value: '<AMOUNT_OF_ETHER_TO_SEND_HERE>', // string
  privateKey: '<PRIVATE_KEY_OF_FROM_ADDRESS_HERE>', // string
  network: '<NETWORK_HERE>', // string, This can either be 'mainnet' or 'goerli'
  gasLimit: '<OPTIONAL_GAS_LIMIT_HERE>', // string, This is NOT required for the transaction
  timeout: <OPTIONAL_TIMEOUT_HERE>, // number, milliseconds. Defaults to 10 minutes / 600000 milliseconds if not specified. This is NOT required for the transaction.
});
```

Make sure to replace the placeholders (`<...>`) with the respective values for your use case.

#### *Output*

The `post` method returns an object containing the following properties:

- `blockHash`: The hash of the block in which the transaction was included.
- `blockNumber`: The number of the block containing the transaction.
- `contractAddress`: The address of the contract created, if applicable (null for simple Ether transfers).
- `cumulativeGasUsed`: The total gas used by all transactions in the block up to and including this transaction.
- `effectiveGasPrice`: The effective gas price (in Wei) paid for the transaction.
- `from`: The address that the Ether was sent from.
- `gasUsed`: The amount of gas used by this specific transaction.
- `logs`: An array of log entries generated by the transaction.
- `logsBloom`: A Bloom filter representing the logs generated by the transaction.
- `status`: The status of the transaction (true for success, false for failure).
- `to`: The address the Ether was sent to.
- `transactionHash`: The hash of the transaction.
- `transactionIndex`: The transaction's index position within the block.
- `type`: The type of the transaction.
- `totalCost`: The total cost (in Ether) of the transaction, including gas fees.

Here's an example of the returned object:

```json
{
  "blockHash": "0x3db042fc6ca8355f94e646264a9ffa42107163f70c4adaa28c6f878395747b8d",
  "blockNumber": 9047146,
  "contractAddress": null,
  "cumulativeGasUsed": 10044989,
  "effectiveGasPrice": "0x4d4f",
  "from": "0x2bd6fbfda256cebac13931bc3e91f6e0f59a5e23",
  "gasUsed": 21000,
  "logs": [],
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "status": true,
  "to": "0x8de848683ea1f2e6a88508ef183efc704f5a690d",
  "transactionHash": "0x0360b0dfc0c09e4921d1c2201f84832a530f24409059ba52ed448a4469b0147b",
  "transactionIndex": 48,
  "type": "0x2",
  "totalCost": 4.15611e-10
}
```

Use the `post` method for sending Ether efficiently and securely on the Ethereum network.

</br>

### Estimate Cost of Contract Deployment

The `estimateDeployment()` method of `twilite-sdk` estimates the cost of deploying a specific contract on the Ethereum blockchain.

#### *Properties*

- `apiKey` (string): Your API key for the twilite-sdk. This is required to authenticate your requests to the service.
- `contract` (string): The contract code written in Solidity and wrapped in a string. This is the code for the smart contract you want to deploy.
- `solidityVersion` (string): The version of Solidity used to write the contract. This is important for compatibility purposes.
- `network` (string): The Ethereum network you want to deploy the contract on. This can either be 'mainnet' or 'goerli'.

#### *Example Method Call*

```javascript
const result = await twilite.contract.estimateDeployment({
	apiKey: '<YOUR_API_KEY_HERE>', // string
  contract: '<CONTRACT CODE WRITTEN IN SOLIDITY>', // solidity code wrapped in a string
  solidityVersion: '<SOLIDITY VERSION HERE>', // string
  network: '<NETWORK_HERE>', // string, This can either be 'mainnet' or 'goerli'
});
```

#### *Example Response*

```json
{
    "estimatedTotalCost": 0.000002263848324075, // ether
    "baseFee": 17,
    "gasPrice": 4748253, // wei
    "maxPriorityFeePerGas": 4748236, // wei
    "maxFeePerGas": 4748270, // wei
    "gasLimit": 476775
}
```
If you need help with understanding what this output means, head over to the [Understanding Costs](#understanding-costs) section of this README. 

</br>

### Deploy Contract

The `deploy` method is part of the `twilite.contract` object and is used to deploy a contract to the Ethereum blockchain. This method takes an object as an argument with the following properties:

#### *Properties*

- `apiKey` (string): Your API key for the twilite-sdk. This is required to authenticate your requests to the service.
- `contract` (string): The contract code written in Solidity and wrapped in a string. This is the code for the smart contract you want to deploy.
- `address` (string): The Ethereum address from which the contract will be sent. Ether will be deducted from this account in order to pay the costs of deployment.
- `privateKey` (string): The private key for the address specified in the `address` property. This is required to sign the deployment transaction.
- `network` (string): The Ethereum network you want to deploy the contract on. This can either be 'mainnet' or 'goerli'.
- `solidityVersion` (string): The version of Solidity used to write the contract. This is important for compatibility purposes.
- `gasLimit`: (string, optional) The maximum amount of gas you are willing to spend on the deployment. If not specified, the SDK will estimate the gas limit for you. This is not required for the deployment, but can be useful to set an upper limit on gas fees.
- `timeout`: (number, optional) The maximum amount of time (in milliseconds) to wait for the deployment to complete. Defaults to 10 minutes (600000 milliseconds) if not specified. This is not required for the deployment, but can be useful to set a timeout for long-running deployments.


#### *Example Method Call*

```javascript
const result = await twilite.contract.deploy({
  apiKey: '<YOUR_API_KEY_HERE>', // string
  contract: '<CONTRACT CODE WRITTEN IN SOLIDITY>', // solidity code wrapped in a string
  address: '<ACCOUNT_ADDRESS_HERE>', // string, address from which the contract will be sent. Ether will be deducted from this account in order to pay the costs of deployment
  privateKey: '<PRIVATE_KEY_FOR_ADDRESS_HERE>', // string
  network: '<NETWORK_HERE>', // string, This can either be 'mainnet' or 'goerli'
  solidityVersion: '<SOLIDITY VERSION HERE>', // string
  gasLimit: '<OPTIONAL_GAS_LIMIT_HERE>', // string, This is NOT required for the deployment
  timeout: <OPTIONAL_TIMEOUT_HERE>, // number, milliseconds. Defaults to 10 minutes / 600000 milliseconds if not specified. This is NOT required for the deployment.
});
```

#### *Response Properties*

The response object returned by the `deploy` method contains the following properties:

- `blockHash` (string): The hash of the block in which the deployment transaction was included.
- `blockNumber` (number): The number of the block in which the deployment transaction was included.
- `contractAddress` (string): The Ethereum address of the deployed contract.
- `cumulativeGasUsed` (number): The total amount of gas used in the block up to and including the deployment transaction.
- `effectiveGasPrice` (string): The effective gas price of the deployment transaction in wei.
- `from` (string): The Ethereum address from which the contract was deployed.
- `gasUsed` (number): The amount of gas used by the deployment transaction.
- `logs` (array): An array of log objects generated by the deployment transaction.
- `logsBloom` (string): The logs bloom filter of the deployment transaction.
- `status` (boolean): The status of the deployment transaction. `true` if the transaction was successful, `false` otherwise.
- `to` (null): The `to` field is `null` for contract deployment transactions.
- `transactionHash` (string): The hash of the deployment transaction.
- `transactionIndex` (number): The index of the deployment transaction within the block.
- `type` (string): The type of the deployment transaction.
- `totalCost` (number): The total cost of the deployment transaction in ether.
- `abi` (array): The Application Binary Interface (ABI) of the deployed contract. The ABI is an array of objects that describe the contract's functions, events, and variables. You can use this later to interact with the contract in order to get variable values or execute method calls.

#### *Example Response*

```json
{
  "response": {
    "blockHash": "0xdbcd1e9ee2a20be79577cfe9c85131dedd0f97d5330cec501ddf4ef8aa3965b5",
    "blockNumber": 9064554,
    "contractAddress": "0xad27203dB0d1374656fa1500e2e22656dc9b0cAB",
    "cumulativeGasUsed": 9017265,
    "effectiveGasPrice": "0x4873d8",
    "from": "0x2bd6fbfda256cebac13931bc3e91f6e0f59a5e23",
    "gasUsed": 476775,
    "logs": [],
    "logsBloom": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "status": true,
    "to": null,
    "transactionHash": "0xa6be109eca6c7c228b3b5892d95fa24edadbaec2e1531a3cb493c8238e867c61",
    "transactionIndex": 66,
    "type": "0x2",
    "totalCost": 0.0000022638459401999998
  },
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "firstDay",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "myString",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "myValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "secondDay",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_firstDay",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_secondDay",
          "type": "string"
        }
      ],
      "name": "setDays",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_myString",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_firstDay",
          "type": "string"
        }
      ],
      "name": "setString",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_myValue",
          "type": "uint256"
        }
      ],
      "name": "setValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}
```

With the data from this response, you can later interact with the deployed contract using its contract address and ABI.

</br>

### Get Contract Variable

The `getVariable` method is part of the `twilite.contract` object and is used to get the value of a variable included in a smart contract. This method takes an object as an argument with the following properties:

#### *Properties*

- `apiKey` (string): Your API key for the twilite-sdk. This is required to authenticate your requests to the service.
- `network` (string): The Ethereum network where the contract is deployed. This can either be 'mainnet' or 'goerli'.
- `contractAddress` (string): The Ethereum address of the deployed contract whose variable value you want to retrieve.
- `abi` (JSON array): The Application Binary Interface (ABI) of the deployed contract. The ABI is an array of objects that describe the contract's functions, events, and variables.
- `variableName` (string): The name of the variable whose value you want to retrieve.

#### *Example Method Call*

```javascript
const result = await twilite.contract.getVariable({
  apiKey: '<YOUR_API_KEY_HERE>', // string
  network: '<NETWORK_HERE>', // string, This can either be 'mainnet' or 'goerli'
  contractAddress: '<CONTRACT ADDRESS HERE>', // string
  abi: ['CONTRACT ABI HERE'], // JSON array
  variableName: '<VARIABLE NAME HERE>', // string
});
```

This method call returns the value of the specified variable in the smart contract. The value will be returned in the format specified in the contract's ABI (e.g., string, uint256, etc.). You can use this method to read the current state of a variable in a deployed contract without executing a transaction or modifying the contract's state.

</br>

### Estimate Contract Method Call

The `estimateMethodCall` method in the twilite-sdk allows you to estimate the cost of calling a specific method in a smart contract. This is useful for understanding the potential gas fees and other costs associated with interacting with a smart contract on the Ethereum blockchain.

#### *Properties*

- `apiKey` (string): Your API key for the twilite-sdk.
- `network` (string): The Ethereum network you want to interact with. This can either be 'mainnet' or 'goerli'.
- `contractAddress` (string): The address of the smart contract you want to call the method on.
- `fromAddress` (string): The address from which the method call will be made.
- `method` (string): The name of the method you want to call in the smart contract.
- `arguments` (Array): An array of arguments required by the method. If the method does not require any arguments, pass an empty array `[]`.
- `abi` (JSON array): The ABI (Application Binary Interface) of the smart contract.

#### *Example*

```javascript
const result = await twilite.contract.estimateMethodCall({
  apiKey: '<YOUR_API_KEY_HERE>', // string
  network: '<NETWORK_HERE>', // string, This can either be 'mainnet' or 'goerli'
  contractAddress: '<CONTRACT ADDRESS HERE>', // string
  fromAddress: '<FROM ADDRESS HERE>', // string
  method: '<METHOD NAME HERE>', // string
  arguments: ['ARRAY OF ARGUMENTS HERE'], // Array. If method does NOT require any arguments, put an empty array here ([])
  abi: ['CONTRACT ABI HERE'], // JSON array
});
```

#### *Response Properties*

The method returns an object containing the following properties:

- `estimatedTotalCost` (number): The estimated total cost of the method call in Ether.
- `baseFee` (number): The base fee for the transaction in Gwei.
- `gasPrice` (number): The gas price for the transaction in Wei.
- `maxPriorityFeePerGas` (number): The maximum priority fee per gas in Wei.
- `maxFeePerGas` (number): The maximum fee per gas in Wei.
- `gasLimit` (number): The gas limit for the transaction.

#### *Example Response*

```json
{
  "estimatedTotalCost": 1.199764409e-9, // ether
  "baseFee": 24,
  "gasPrice": 38641, // wei
  "maxPriorityFeePerGas": 38617, // wei
  "maxFeePerGas": 38665, // wei
  "gasLimit": 31049
}
```

If you need help with understanding what this output means, head over to the [Understanding Costs](#understanding-costs) section of this README. 

</br>

### Call Contract Method

The `callMethod` method in the twilite-sdk allows you to call a specific method in a smart contract on the Ethereum blockchain. This is useful for interacting with smart contracts and executing their functions.

#### *Properties*

- `apiKey` (string): Your API key for the twilite-sdk.
- `network` (string): The Ethereum network you want to interact with. This can either be 'mainnet' or 'goerli'.
- `contractAddress` (string): The address of the smart contract you want to call the method on.
- `fromAddress` (string): The address from which the method call will be made.
- `abi` (JSON array): The ABI (Application Binary Interface) of the smart contract.
- `method` (string): The name of the method you want to call in the smart contract.
- `arguments` (Array): An array of arguments required by the method. If the method does not require any arguments, pass an empty array `[]`.
- `privateKey` (string): The private key of the "from address" used to sign the transaction.
- `gasLimit`: (string, optional) The maximum amount of gas you are willing to spend on the contract method call. If not specified, the SDK will estimate the gas limit for you. This is not required for the contract method call, but can be useful to set an upper limit on gas fees.
- `timeout`: (number, optional) The maximum amount of time (in milliseconds) to wait for the contract method call to complete. Defaults to 10 minutes (600000 milliseconds) if not specified. This is not required for the method call, but can be useful to set a timeout for long-running method calls.

#### *Example*

```javascript
const result = await twilite.contract.callMethod({
  apiKey: '<YOUR_API_KEY_HERE>', // string
  network: '<NETWORK_HERE>', // string, This can either be 'mainnet' or 'goerli'
  contractAddress: '<CONTRACT ADDRESS HERE>', // string
  fromAddress: '<FROM ADDRESS HERE>', // string
  abi: ['CONTRACT ABI HERE'], // JSON array
  method: '<METHOD NAME HERE>', // string
  arguments: ['ARRAY OF ARGUMENTS HERE'], // Array. If method does NOT require any arguments, put an empty array here ([])
  privateKey: '<PRIVATE KEY OF "FROM ADDRESS" HERE>', // string
  gasLimit: '<OPTIONAL GAS LIMIT HERE>', // string, This is NOT required for the transaction
  timeout: <OPTIONAL TIMEOUT HERE>, // number, milliseconds. Defaults to 10 minutes / 600000 milliseconds if not specified. This is NOT required for the transaction.
});
```

#### *Response Properties*

The method returns an object containing the following properties:

- `blockHash` (string): The hash of the block in which the transaction was included.
- `blockNumber` (number): The block number in which the transaction was included.
- `contractAddress` (string|null): The address of the contract that was created, if any. If not, this will be `null`.
- `cumulativeGasUsed` (number): The total amount of gas used in the block up to and including this transaction.
- `effectiveGasPrice` (string): The effective gas price for the transaction in hexadecimal format.
- `from` (string): The address from which the method call was made.
- `gasUsed` (number): The amount of gas used by this specific transaction.
- `logs` (Array): An array of log objects generated by the transaction.
- `logsBloom` (string): The logs bloom filter for this transaction in hexadecimal format.
- `status` (boolean): The status of the transaction. `true` if the transaction was successful, `false` otherwise.
- `to` (string): The address of the smart contract the method was called on.
- `transactionHash` (string): The hash of the transaction.
- `transactionIndex` (number): The index of the transaction in the block.
- `type` (string): The type of the transaction in hexadecimal format.
- `totalCost` (number): The total cost of the transaction in Ether.

#### *Example Response*

```json
{
  "blockHash": "0x046822f50a6aef94e7059032056fdb2fe302a35bfd8ee43f42fbd952ab6a7514",
  "blockNumber": 9123872,
  "contractAddress": null,
  "cumulativeGasUsed": 15968689,
  "effectiveGasPrice": "0x96ef",
  "from": "0x14e2f03bbf3fae2bdc248dc958715bf654a20275",
  "gasUsed": 31043,
  "logs": [],
  "logsBloom": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "status": true,
  "to": "0x8b6dfbc65c9dc677727d09134286f5a4ec2d570d",
  "transactionHash": "0x360f1b9ccc5b99e85d25f47302c4f42cfa6f68d82d209a62463f5545579e199f",
  "transactionIndex": 92,
  "type": "0x2",
  "totalCost": 1.1994704769999998e-9
}
```

</br>


## Understanding Costs

When working with the Ethereum blockchain, it's crucial to understand various cost-related terms to manage your transactions effectively. In one of the multiple twilite-sdk estimation calls, some (or all) of the following properties will be returned. Let's break down the key terms related to costs in TwiLite SDK:

### Estimated Total Cost

The estimated total cost is like your "bottom line" of all the other estimated costs. It is the total estimated cost (in ether) of the transaction. This cost is calculated from all of the other properties below. If there is one property within an estimate to take into consideration, it is this one.

### Base Fee

Base Fee is the minimum amount of gas units required to include a transaction on the Ethereum blockchain. This value ensures that a transaction is executed within a reasonable timeframe, and it varies depending on the network's congestion level.

### Gas Price

Gas Price (measured in Wei) represents how much each unit of gas costs for a transaction. The total gas cost for a transaction is the product of the gas price and the gas units consumed by the transaction. The gas price depends mainly on network conditions and miner preferences.

### Gas Limit

Gas Limit refers to the maximum units of gas that a transaction is authorized to use during its execution on the Ethereum network. This value acts as an upper bound to prevent excessive gas consumption and ensure resource optimization.

### Max Fee Per Gas

Max Fee Per Gas is an estimate of the maximum amount (in Wei) you are willing to pay per unit of gas to get your transaction included in a block. Setting this value helps control the total cost of a transaction. It is particularly useful during times of high network congestion when the gas prices can fluctuate rapidly.

### Max Priority Fee Per Gas

Max Priority Fee Per Gas is the minimum "tip" (in Wei) per unit of gas that incentivizes miners to mine your transaction. By offering a higher priority fee, you can improve the likelihood of your transaction being mined and included faster, especially during times of high network congestion.

Understanding these cost components will enable you to optimize your gas consumption and prioritize your transactions more effectively while working with TwiLite SDK and the Ethereum network.

</br>

## Private Key Security

TwiLite takes security very seriously and one important aspect of that is to keep private keys private. The TwiLite SDK NEVER sends private keys over a network and they ALWAYS remain local. We do this by signing transactions from the twilite-sdk package so that they are fully encrypted before being sent to the blockchain.

