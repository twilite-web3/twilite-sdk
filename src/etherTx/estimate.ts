export {}
const axios = require('axios')
const config = require('../../config.json')


module.exports = {
  estimate: async (params: { apiKey: string; to: string; network: string }) => {
    const response = await axios.get(`${config.endpoint}etherTx/estimate`, {
      headers: {
        'x-api-key': params.apiKey,
      },
      params: {
        to: params.to,
        network: params.network,
      }
    })
    return response.data
  }
}