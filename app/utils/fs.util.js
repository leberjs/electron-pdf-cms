const { existsSync, readdirSync } = require('fs')
const { basename } = require('path')

const getDirectoryContents = (source) => {
  if (!isDirectory(source)) { return }
  return readdirSync(source)
}

const getFileName = (source, ext) => {
  return basename(source, ext)
}

/** internals */

const isDirectory = (source) => {
  return existsSync(source)
}

module.exports = { getDirectoryContents, getFileName }
