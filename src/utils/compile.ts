export {}
const solcjs = require('solc-js')

const getSolcVersion = async (solidityVersion: string) => {
  try {
    const select = await solcjs.versions()
    const releases = select.releases
    let version
    releases.forEach((release: string | string[]) => {
      if (release.includes(solidityVersion)) {
        version = release
      }
    })
    return version
  } catch(error) {
    throw error
  }
}

const compileContract = async (params: { solidityVersion: string; contract: string }) => {
  try {
    const version = await getSolcVersion(params.solidityVersion) // MAX COMPATIBLE VERSION: 'v0.5.13-stable-2019.11.14'
    const compiler = await solcjs(version)
    const compiled = await compiler(params.contract)
    const abi = compiled[0].abi
    const bytecode = compiled[0].binary.bytecodes.bytecode
    return {
      abi,
      bytecode
    }
  } catch(error) {
    throw error
  }
}

module.exports = {
  compile: async (params: { solidityVersion: string; contract: string }) => {
    try {
      const compiled = await compileContract(params)
      return compiled
    } catch(error) {
      throw error
    }
  }
}