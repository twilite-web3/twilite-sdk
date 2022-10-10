const axios = require('axios')
const config = require('../../config.json')
const { FeeMarketEIP1559Transaction } = require('@ethereumjs/tx')
const Common = require('@ethereumjs/common').default
const { poll } = require('../utils/poll')
const { compile } = require('../utils/compile')


const constructContract = async (params: { apiKey: string; address: string; network: string; gasLimit: string }, compiled: { abi: Array<object>; bytecode: string }) => {
  try {
    const abi = JSON.stringify(compiled.abi)
    return await axios.get(`${config.endpoint}contract/constructContract`, {
      headers: {
        'x-api-key': params.apiKey,
      },
      params: {
        abi,
        bytecode: compiled.bytecode,
        address: params.address,
        network: params.network,
        gasLimit: params.gasLimit ? params.gasLimit : null,
      }
    })
  } catch(error) {
    throw error
  }
}

const signContract = async (constructedContract: any, params: { apiKey: string; address: string; network: string; hardfork: string; gasLimit: string; privateKey: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string } }) => {
  try {
    const common = new Common({ chain: params.network, hardfork: params.hardfork })
    const transaction = FeeMarketEIP1559Transaction.fromTxData(constructedContract, { common })
    const signed = transaction.sign(Buffer.from(params.privateKey, 'hex'))
    const serializedTransaction = '0x' + signed.serialize().toString('hex')
    return serializedTransaction
  } catch(error) {
    throw error
  }
}

const sendSignedContract = async (signedContract: string, params: { apiKey: string; network: string }) => {
  try {
    return await axios.get(`${config.endpoint}contract/sendContract`, {
      headers: {
        'x-api-key': params.apiKey,
      },
      params: {
        contract: signedContract,
        network: params.network,
      }
    })
  } catch(error) {
    throw error
  }
}

module.exports = {
  deploy: async (params: { apiKey: string; address: string; network: string; hardfork: string; gasLimit: string, privateKey: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string } }) => {
    try {
      const compiled = await compile(params)
      const abi = compiled.abi
      const constructedContract = await constructContract(params, compiled)
      const signedContract = await signContract(constructedContract.data, params)
      const txHash = await sendSignedContract(signedContract, params)
      console.log('transaction hash:', txHash.data)
      const pollResponse = await poll(txHash.data, params)
      return {
        response: pollResponse,
        abi,
      }
    } catch(error) {
      throw error
    }
  }
}
