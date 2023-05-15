export {}
const axios = require('axios')
const { config } = require('../../config.ts')


module.exports = {
  estimate: async (params: { apiKey: string; to: string; network: string }) => {
    try {
      const response = await axios.get(`${config().host}etherTx/estimate`, {
        headers: {
          'x-api-key': params.apiKey,
        },
        params: {
          to: params.to,
          network: params.network,
        }
      })
      return response.data
    } catch(error) {
      throw error
    }
  }
}