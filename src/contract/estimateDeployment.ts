export {}
const axios = require('axios')
const { config } = require('../../config.ts')
const { compile } = require('../utils/compile')


module.exports = {
  estimateDeployment: async (params: { apiKey: string; network: string, contract: string }) => {
    try {
      const compiled = await compile(params)
      const bytecode = compiled.bytecode
      const response = await axios.get(`${config().host}contract/estimateDeployment`, {
        headers: {
          'x-api-key': params.apiKey,
        },
        params: {
          network: params.network,
          bytecode,
        }
      })
      return response.data
    } catch(error) {
      throw error
    }
  }
}