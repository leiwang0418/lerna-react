# 使用`React Styleguidist`管理组件

## 安装其它依赖包，`packages.json`

```sh
lerna add react-styleguidist packages/ra-material-ui
lerna add @emotion/react packages/ra-material-ui
lerna add @emotion/styled packages/ra-material-ui
```

## 重新配置`tsconfig.json`,添加内容如下：
```json
"resolveJsonModule": true
```

## 配置package.json
```json
  "scripts": {
    "styleguide": "yarn lang && styleguidist server",
    "build": "yarn lang && styleguidist build",
    "test": "yarn lang && jest --watchAll",
    "lang": "yarn extract && yarn compile",
    "extract": "formatjs extract \"src/**/*.tsx\" --out-file src/lang/zh.json",
    "compile": "formatjs compile src/lang/zh.json --out-file src/compiled-lang/zh.json"
  },
```

## 参照`react-styleguidist([https://github.com/styleguidist/react-styleguidist])`实现开发

## 配置index.js不生成文档
项目根目录下创建`styleguide.config.js`文件，内容如下：
```js
const path = require("path");

module.exports = {
  components: "src/[A-Z]**/*.tsx",
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/Wrapper"),
  },
};

```
