export {}
const axios = require('axios')
const config = require('../../config.json')


const getReceipt = async (txHash: string, params: { apiKey: string; network: string }) => {
  try {
    return await axios.get(`${config.endpoint}utils/poll`, {
      headers: {
        'x-api-key': params.apiKey,
      },
      params: {
        txHash,
        network: params.network,
      }
    })
  } catch(error) {
    throw error
  }
}

const wait = function () {
  return new Promise(resolve => {
    setTimeout(resolve,6000)
  })
}

module.exports = {
  poll: async (txHash: string, params: { timeout: number; apiKey: string; network: string; }) => {
    try {
      let timeLeft = 600000 // 10 minutes
      if (params.timeout) {
        timeLeft = params.timeout
      }
      let result = await getReceipt(txHash, params)
      console.log('Getting receipt...')
      while (!result.data && timeLeft > 0) {
        await wait()
        result = await getReceipt(txHash, params)
        timeLeft = timeLeft - 6000
      }
      if (timeLeft < 1) {
        return 'Polling timed out. If you want to override this timeout and increase it, you can add "timeout" to your twilite method call. See <INSERT LINK HERE> for more details.'
      }
      return result.data
    } catch(error) {
      throw error
    }
  }
}
