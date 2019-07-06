const generate = require('@ant-design/colors/lib/generate').default

function getSerials(color, client) {
  const lightNum = 9
  const devide10 = 10
  // 淡化（即less的tint）
  const lightens = new Array(lightNum).fill(undefined).map((_, i) => {
    return client.varyColor.lighten(color, i / devide10)
  })
  const colorPalettes = generate(color)
  return lightens.concat(colorPalettes)
}

exports.getSerials = getSerials
