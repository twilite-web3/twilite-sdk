const keythereum = require('keythereum')
const util = require('ethereumjs-util')


module.exports = {
  create: () => {
    const account = keythereum.create()
    const privateKey = account.privateKey
    const privateKeyString = privateKey.toString('hex')
    const publicKey = util.privateToPublic(privateKey)
    const publicKeyString = publicKey.toString('hex')
    const addressBuffer = util.pubToAddress(publicKey)
    const address = util.bufferToHex(addressBuffer)
    return {
      privateKey: privateKeyString,
      publicKey: publicKeyString,
      address,
    }
  }
}
