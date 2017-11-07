const setupAutocomplete = (arr) => {
  return arr.map((v) => {
    return { label: v }
  })
}

module.exports = { setupAutocomplete }
