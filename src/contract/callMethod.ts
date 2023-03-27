export {}
const axios = require('axios')
const config = require('../../config.json')
const { FeeMarketEIP1559Transaction } = require('@ethereumjs/tx')
const Common = require('@ethereumjs/common').default
const { poll } = require('../utils/poll')


const constructMethod = async (params: { apiKey: string; network: string; contractAddress: string; fromAddress: string; abi: Array<object>; method: string; arguments: Array<string>; gasLimit: string }) => {
  try {
    const response = await axios.get(`${config.endpoint}contract/constructMethod`, {
      headers: {
        'x-api-key': params.apiKey,
      },
      params: {
        network: params.network,
        contractAddress: params.contractAddress,
        fromAddress: params.fromAddress,
        abi: JSON.stringify(params.abi),
        method: params.method,
        arguments: JSON.stringify(params.arguments),
        gasLimit: params.gasLimit ? params.gasLimit : null,
      }
    })
    return response.data
  } catch(error) {
    throw error
  }
}

const sign = (tx: object, params: { network: string; privateKey: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string } }) => {
  try {
    const common = new Common({ chain: params.network, hardfork: 'merge' })
    const transaction = FeeMarketEIP1559Transaction.fromTxData(tx, { common })
    const signed = transaction.sign(Buffer.from(params.privateKey, 'hex'))
    const serializedTransaction = '0x' + signed.serialize().toString('hex')
    return serializedTransaction
  } catch(error) {
    throw error
  }
}

const sendSigned = async (signedResult: string, params: { apiKey: string; network: string }) => {
  try {
    return await axios.get(`${config.endpoint}contract/sendMethodCall`, {
      headers: {
        'x-api-key': params.apiKey,
      },
      params: {
        transaction: signedResult,
        network: params.network,
      }
    })
  } catch(error) {
    throw error
  }
}

module.exports = {
  callMethod: async (params: { apiKey: string; network: string; contractAddress: string; fromAddress: string; abi: Array<object>; method: string; arguments: Array<string>; gasLimit: string; privateKey: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string } }) => {
    try {
      const constructMethodResult = await constructMethod(params)
      const signResult = sign(constructMethodResult, params)
      const txHash = await sendSigned(signResult, params)
      console.log('transaction hash:', txHash.data)
      const pollResponse = await poll(txHash.data, params)
      return pollResponse
    } catch(error) {
      throw error
    }
  }
}
