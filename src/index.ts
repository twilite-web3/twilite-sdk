const { post } = require('./etherTx/post')
const { getBalance } = require('./account/getBalance')
const { getBalances } = require('./account/getBalances')
const { create } = require('./account/create')
const { deploy } = require('./contract/deploy')
const { estimate } = require('./etherTx/estimate')
const { estimateDeployment } = require('./contract/estimateDeployment')
const { estimateMethodCall } = require('./contract/estimateMethodCall')
const { getVariable } = require('./contract/getVariable')
const { callMethod } = require('./contract/callMethod')
const { getCosts } = require('./utils/getCosts')


module.exports = {

  etherTx: {
    estimate,
    post,
  },

  account: {
    getBalance,
    getBalances,
    create,
  },

  contract: {
    getVariable,
    deploy,
    estimateDeployment,
    estimateMethodCall,
    callMethod,
  },

  utils: {
    getCosts,
  },

}
