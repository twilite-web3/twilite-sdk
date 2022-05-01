export {}
const axios = require('axios')
const config = require('../../config.json')
const { compile } = require('../utils/compile')


module.exports = {
  estimateDeployment: async (params: { apiKey: string; network: string, contract: string }) => {
    const compiled = await compile(params)
    const bytecode = compiled.bytecode
    const response = await axios.get(`${config.endpoint}contract/estimateDeployment`, {
      headers: {
        'Authorization': params.apiKey,
      },
      params: {
        network: params.network,
        bytecode,
      }
    })
    return response.data
  }
}