# 使用`React Styleguidist`管理组件

## 安装其它依赖包，`packages.json`

```sh
lerna add @types/node packages/ra-material-ui
lerna add @types/react packages/ra-material-ui
lerna add @types/react-dom packages/ra-material-ui
lerna add prop-types packages/ra-material-ui
lerna add react packages/ra-material-ui
lerna add react-dom packages/ra-material-ui
lerna add typescript packages/ra-material-ui
lerna add react-styleguidist packages/ra-material-ui

lerna add ts-jest packages/ra-material-ui -D
lerna add jest packages/ra-material-ui -D
lerna add @testing-library/jest-dom packages/ra-material-ui -D
lerna add @testing-library/react packages/ra-material-ui -D
lerna add @types/jest packages/ra-material-ui -D
```

## 重新配置`tsconfig.json`,完整内容如下：
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "esModuleInterop": true,
    "jsx": "react-jsx",
    "skipLibCheck": true,
    "strict": true
  }
}

```

## 配置package.json
```json
  "scripts": {
    "styleguide": "styleguidist server",
    "build": "styleguidist build"
  },
```

## 参照`react-styleguidist([https://github.com/styleguidist/react-styleguidist])`实现开发

## 配置index.js不生成文档
项目根目录下创建`styleguide.config.js`文件，内容如下：
```js
module.exports = {
  components: 'src/**/[A-Z]*.tsx'
}
```
