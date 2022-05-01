export {}
const axios = require('axios')
const config = require('../../config.json')


module.exports = {
  getCosts: async (params: { apiKey: string; network: string }) => {
    const response = await axios.get(`${config.endpoint}utils/getCosts`, {
      headers: {
        'Authorization': params.apiKey,
      },
      params: {
        network: params.network
      }
    })
    let data = response.data
    delete data['gasLimit']
    return data
  }
}
