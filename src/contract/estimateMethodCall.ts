export {}
const axios = require('axios')
const config = require('../../config.json')


module.exports = {
  estimateMethodCall: async (params: { apiKey: string; network: string; abi: Array<object>; contractAddress: string; arguments: Array<String>; method: string; fromAddress: string }) => {
    const response = await axios.get(`${config.endpoint}contract/estimateMethodCall`, {
      headers: {
        'Authorization': params.apiKey,
      },
      params: {
        network: params.network,
        abi: JSON.stringify(params.abi),
        contractAddress: params.contractAddress,
        arguments: JSON.stringify(params.arguments),
        method: params.method,
        fromAddress: params.fromAddress,
      }
    })
    return response.data
  }
}