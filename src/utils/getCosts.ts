export {}
const axios = require('axios')
const { config } = require('../../config.ts')


module.exports = {
  getCosts: async (params: { apiKey: string; network: string }) => {
    try {
      const response = await axios.get(`${config().host}utils/getCosts`, {
        headers: {
          'x-api-key': params.apiKey,
        },
        params: {
          network: params.network
        }
      })
      let data = response.data
      delete data['gasLimit']
      return data
    } catch(error) {
      throw error
    }
  }
}
