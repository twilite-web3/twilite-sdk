export {}
const axios = require('axios')
const config = require('../../config.json')


module.exports = {
  getBalance: async (params: { apiKey: string; address: string; network: string }) => {
    try {
      const response = await axios.get(`${config.endpoint}account/getBalance`, {
        headers: {
          'x-api-key': params.apiKey,
        },
        params: {
          address: params.address,
          network: params.network
        }
      })
      return response.data
    } catch(error) {
      throw error
    }
  }
}