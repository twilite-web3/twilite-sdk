# Twilite SDK: Ethereum Development Simplified
The easiest way to develop applications that utilize the Ethereum blockchain.

</br>

## Overview

TwiLite SDK is designed to greatly simplify your development process for the Ethereum blockchain. By automating the majority of tasks, it allows you to focus on making straightforward JavaScript-based method calls using the TwiLite SDK. With TwiLite, you can effortlessly send Ether, deploy and interact with smart contracts, and much more, all while enjoying significantly less complexity than other libraries or approaches.

For instance, with TwiLite SDK, you can deploy a smart contract using just a single method call that automatically handles smart contract compilation, gas estimation, and deployment. This simplicity ensures a smoother, more efficient development experience for your Ethereum projects.

If you would like to see and interact with an example implementation of TwiLite SDK, check out the "workbench" section of the twilite website: https://www.twilite.co/workbench.

</br>

## Table of Contents

1. [Features](#features)
3. [Requirements and Installation](#requirements-and-installation)
4. [Understanding Ethereum Networks](#understanding-ethereum-networks)
5. [Getting Started](#getting-started)

</br>

## Features

*Contracts*
- Write, deploy and interact with smart contracts

*Transactions*
- Send ether to another account

*Utilities*
- Create accounts, check balances and get costs

</br>

## Requirements and Installation

1. You'll need a twilite account and an API key. If you haven't done so already, head over to https://www.twilite.co and create an account. It's free to get started. Then, log in and go to the account page to get your API key: https://www.twilite.co/account.
2. Run `npm i twilite-sdk` to install the package.

</br>

## Understanding Ethereum Networks

Before diving into Ethereum development with TwiLite SDK, it is essential to understand the concept of networks. In the context of Ethereum, networks are separate blockchain instances. There are two main types of networks: Mainnet and Testnets.

### Mainnet

Mainnet is the primary Ethereum network, where real Ether is used. Transactions on the Mainnet consume real Ether for gas fees, and any operations performed here have real-world implications. It is generally used for deploying and interacting with production-ready applications and contracts.

### Testnets

Testnets, on the other hand, are separate networks designed for testing purposes. They use fake Ether (also known as test Ether) to facilitate development, testing, and debugging of your programs and applications without incurring real-world costs. Testnets are an excellent environment to ensure your smart contracts work correctly and securely before deploying them on the Mainnet.

There are several Ethereum testnets available, such as Ropsten, Rinkeby, and Goerli. For the best experience with the TwiLite SDK, we recommend using the **Goerli** test network. It offers a reliable and efficient environment to test your Ethereum applications while taking advantage of TwiLite SDK's simplicity and streamlined workflow.

</br>

## Getting Started

The following are a handful of basic examples to get you started. For more detailed documentation and examples, check out the "API Documentation" section of this README.

To get started, import (or require) the twilite-sdk in your project.

```javascript
import twilite from 'twilite-sdk';

...
```
</br>

### Create Account

The `create` method provided by TwiLite SDK allows you to quickly and easily generate a new account that can be used on the Ethereum blockchain. When you call this method, it returns an object containing a public key, private key, and address for the newly created account.

### Usage Example

To create a new account, simply call the `create` method from the TwiLite SDK as shown below:

```javascript
const account = twilite.account.create();
```

### Output

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