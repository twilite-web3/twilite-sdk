export {}
const axios = require('axios')
const config = require('../../config.json')


module.exports = {
  getBalances: async (params: { apiKey: string; addresses: Array<string>; network: string }) => {

    try {

      const response = await axios.get(`${config.endpoint}account/getBalance`, {
        headers: {
          'x-api-key': params.apiKey,
        },
        params: {
          addresses: JSON.stringify(params.addresses),
          network: params.network
        }
      })
      return response.data

    } catch(error) {

      throw error;

    }

  }

}