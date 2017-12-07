const { join } = require('path')

import { getFileName } from './fs.util'
import constants from './constants'

const setupAutocomplete = (arr, rootDir) => {
  return arr.map((v) => {
    return {
      label: v,
      filesPath: join(rootDir, v, constants.filesParentDir)
    }
  })
}

const setupModalTable = (arr, path) => {
  let id = 0
  return arr.map((v) => {
    id += 1

    let p = join(path, v).replace('D:\\', '')
    console.log(p)

    return {
      id,
      fullName: v,
      baseName: getFileName(v, constants.filesExt).toLocaleUpperCase(),
      path: p
    }
  })
}

// const getImage = (source) => {
//   const img = new PDFImage(source)
//   return img.convertPage().then((path) => {
//     return path
//   })
// }

module.exports = { setupAutocomplete, setupModalTable }
