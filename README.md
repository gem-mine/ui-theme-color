# ui-theme-color
结合 webpack，处理 ant、fish 的主题颜色处理方案

webpack 中的处理：
```
const { ThemeColorPlugin } = require('@gem-mine/ui-theme-color/webpack')

// 在插件中添加
new ThemeColorPlugin()
```

在切换主题颜色的地方：
```
const { changeColor } = require('@gem-mine/ui-theme-color/browser')

// 切换主题颜色，color值为：#aabbcc
changeColor(color)
```

