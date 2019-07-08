const client = require('webpack-theme-color-replacer/client')
const { getSerials } = require('./helper')

function changeColor(color) {
  if (!color) {
    return Promise.resolve()
  }
  const options = {
    // new colors array, one-to-one corresponde with `matchColors`
    newColors: getSerials(color, client),
    changeUrl(cssUrl) {
      // while router is not `hash` mode, it needs absolute path
      return `/${cssUrl}`
    }
  }
  return client.changer.changeColor(options, Promise)
}

exports.changeColor = changeColor
