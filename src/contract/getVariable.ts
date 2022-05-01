export {}
const axios = require('axios')
const config = require('../../config.json')


module.exports = {
  getVariable: async (params: { apiKey: string; network: string; contractAddress: string; abi: Array<object>; variableName: string }) => {
    const response = await axios.get(`${config.endpoint}contract/getVariable`, {
      headers: {
        'Authorization': params.apiKey,
        // 'x-api-key': '<ADD HERE>',
      },
      params: {
        network: params.network,
        contractAddress: params.contractAddress,
        abi: JSON.stringify(params.abi),
        variableName: params.variableName,
      }
    })
    return response.data
  }
}
