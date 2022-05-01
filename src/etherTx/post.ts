export {}
const axios = require('axios')
const { FeeMarketEIP1559Transaction } = require('@ethereumjs/tx')
const Common = require('@ethereumjs/common').default
const config = require('../../config.json')
const { poll } = require('../utils/poll')


const sendSignedTx = async (serializedTransaction: string, params: { apiKey: string; network: string }) => {
  return await axios.get(`${config.endpoint}etherTx/send`, {
    headers: {
      'Authorization': params.apiKey,
    },
    params: {
      transaction: serializedTransaction,
      network: params.network,
    }
  })
}

const signTx = (tx: string, params: { privateKey: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string } }) => {
  const common = new Common({ chain: 'ropsten', hardfork: 'london' }) // TODO: make chain dynamic
  const transaction = FeeMarketEIP1559Transaction.fromTxData(tx, { common })
  const signed = transaction.sign(Buffer.from(params.privateKey, 'hex'))
  const serializedTransaction = '0x' + signed.serialize().toString('hex')
  return serializedTransaction
}

const construct = async (params: { apiKey: string; to: string; from: string; value: string; network: string; gasLimit: string }) => {
  return await axios.get(`${config.endpoint}etherTx/construct`, {
    headers: {
      'Authorization': params.apiKey,
    },
    params: {
      to: params.to,
      from: params.from,
      value: params.value,
      network: params.network,
      gasLimit: params.gasLimit ? params.gasLimit : null,
    }
  })
}

module.exports = {
  post: async (params: { apiKey: string; to: string; from: string; value: string; network: string; gasLimit: string; privateKey: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string } }) => {
    const constructResponse = await construct(params)
    const signTxResponse = signTx(constructResponse.data, params)
    const txHash = await sendSignedTx(signTxResponse, params)
    console.log('transaction hash:', txHash.data)
    const pollResponse = await poll(txHash.data, params)
    return pollResponse
  }
}