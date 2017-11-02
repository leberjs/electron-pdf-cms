const settings = require('electron-settings')

const sGet = (setting) => {
  if (!hasSetting(setting)) {
    return false
  }

  return settings.get(setting)
}

const sSet = (key, value) => {
  settings.set(key, value)
}

/** internals **/

const hasSetting = (setting) => {
  return settings.has(setting)
}

module.exports = { sGet, sSet }