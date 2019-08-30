const ThemeColorReplacer = require('@gem-mine/webpack-theme-color-replacer')
const { getSerials } = require('./helper')

function changeSelector(selector, prefixCls) {
  switch (selector) {
    case `.${prefixCls}-calendar-today .${prefixCls}-calendar-date`:
      return `:not(.${prefixCls}-calendar-selected-date)` + selector
    case `.${prefixCls}-btn:focus,.${prefixCls}-btn:hover`:
      return `.${prefixCls}-btn:focus:not(.${prefixCls}-btn-primary),.${prefixCls}-btn:hover:not(.${prefixCls}-btn-primary)`
    case `.${prefixCls}-btn.active,.${prefixCls}-btn:active`:
      return `.${prefixCls}-btn.active:not(.${prefixCls}-btn-primary),.${prefixCls}-btn:active:not(.${prefixCls}-btn-primary)`
    default:
      return `body ${selector}`
  }
}

function ThemeColorPlugin(params = {}) {
  const { prefixCls = 'fish', primaryColor = '#1890ff', ...options } = params
  if (!options.fileName) {
    options.fileName = 'theme-colors-[contenthash:8].css'
  }
  if (!options.matchColors) {
    options.matchColors = getSerials(primaryColor, ThemeColorReplacer)
  }
  if (!options.changeSelector) {
    options.changeSelector = function(selector) {
      return changeSelector(selector, prefixCls)
    }
  }

  return new ThemeColorReplacer(options)
}

exports.changeSelector = changeSelector
exports.ThemeColorPlugin = ThemeColorPlugin
