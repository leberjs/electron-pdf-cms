const settings = require('electron-settings')

const sDeleteAll = () => {
  settings.deleteAll()
}

module.exports = { sDeleteAll }