export {}
const axios = require('axios')
const { FeeMarketEIP1559Transaction } = require('@ethereumjs/tx')
const Common = require('@ethereumjs/common').default
const { config } = require('../../config.ts')
const { poll } = require('../utils/poll')


const sendSignedTx = async (serializedTransaction: string, params: { apiKey: string; network: string }) => {
  try {
    return await axios.get(`${config().host}etherTx/send`, {
      headers: {
        'x-api-key': params.apiKey,
      },
      params: {
        transaction: serializedTransaction,
        network: params.network,
      }
    })
  } catch(error) {
    throw error
  }
}

const signTx = (tx: string, params: { network: string; privateKey: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string } }) => {
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

const construct = async (params: { apiKey: string; to: string; from: string; value: string; network: string; gasLimit: string }) => {
  try {
    return await axios.get(`${config().host}etherTx/construct`, {
      headers: {
        'x-api-key': params.apiKey,
      },
      params: {
        to: params.to,
        from: params.from,
        value: params.value,
        network: params.network,
        gasLimit: params.gasLimit ? params.gasLimit : null,
      }
    })
  } catch(error) {
    throw error
  }
}

module.exports = {
  post: async (params: { apiKey: string; to: string; from: string; value: string; network: string; gasLimit: string; privateKey: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string } }) => {
    try {
      const constructResponse = await construct(params)
      const signTxResponse = signTx(constructResponse.data, params)
      const txHash = await sendSignedTx(signTxResponse, params)
      console.log('transaction hash:', txHash.data)
      const pollResponse = await poll(txHash.data, params)
      return pollResponse
    } catch(error) {
      throw error
    }
  }
}