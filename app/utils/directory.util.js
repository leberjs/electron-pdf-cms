const { existsSync, readdirSync } = require('fs')
const { join } = require('path')

const getDirectories = (source) => {
  if (!isDirectory(source)) { return }
  return readdirSync(source)
}

/** internals */

const isDirectory = (source) => {
  return existsSync(source)
}

module.exports = { getDirectories }