const testDir = 'D:/Dev/__TEST__/Menzner/TestData'

const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')



const getDirectories = () => {
  return readdirSync(testDir)
}

/** internals **/

const isDirectory = (source) => {
  lstatSync(source).isDirectory()
}

module.exports = { getDirectories }