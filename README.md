# Twilite SDK: Ethereum Development Simplified
The easiest way to develop applications that utilize the Ethereum blockchain.

</br>

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Understanding Ethereum Networks](#understanding-ethereum-networks)
4. [Requirements and Installation](#requirements-and-installation)
5. [Usage](#usage)
6. [Understanding Costs](#understanding-costs)

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

There are several Ethereum testnets available, such as Ropsten, Rinkeby, and Goerli. For the best experience with the TwiLite SDK, we recommend using the **Goerli** test network. It offers a reliable and efficient environment to test your Ethereum applications while taking advantage of TwiLite SDK's simplicity and streamlined workflow.

</br>

## Requirements and Installation

1. You'll need a twilite account and an API key. If you haven't done so already, head over to https://www.twilite.co and create an account. It's free to get started. Then, log in and go to the account page to get your API key: https://www.twilite.co/account.
2. Run `npm i twilite-sdk` to install the package.

</br>

## Usage

The following are a handful of basic examples to get you started. For more detailed documentation and examples, check out the "API Documentation" section of this README.

To get started, import (or require) the twilite-sdk in your project.

```javascript
import twilite from 'twilite-sdk';

...
```
</br>

### Create Account

The `create` method provided by TwiLite SDK allows you to quickly and easily generate a new account that can be used on the Ethereum blockchain. When you call this method, it returns an object containing a public key, private key, and address for the newly created account.

#### *Usage Example*

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

#### *Usage Example*

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

#### *Usage Example*

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

#### *Usage Example*

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


4. Getting Started
   - A quick-start guide to help users get up and running.
   - Code snippets or examples to illustrate how to use the package.

5. API Documentation
   - Detailed documentation on the package's API.
   - Description of each function, method, object, or class provided by the package.
   - Parameters, return values, and any exceptions that may be thrown.
   - Examples to show how to use each API element.

7. Examples and Use Cases
   - Real-world examples or case studies demonstrating the use of the package.
   - Code samples or tutorials for common use cases.

8. Troubleshooting and FAQ
   - Common issues or questions that users may encounter, along with their solutions.

9. Contributing
   - Guidelines for those who wish to contribute to the development of the package (if applicable).
   - How to submit bug reports, feature requests, or pull requests.

10. Changelog
    - A list of changes, updates, and improvements made to the package over time, specifying the version number for each update.

11. License
    - Information about the package's license (e.g., MIT, GPL, etc.).

12. Contact and Support
    - How users can get in touch with the package's maintainers for help or support.
    - Links to community resources, such as forums or Slack channels, if available.