## `lerna` + `storybook` + `craco` + `typescript`

## 安装 lerna

```sh
yarn global add lerna
```

## 创建根目录

```sh
mkdir lerna-react
cd lerna-react

lerna init --independent
#or(使用统一版本)
lerna init
```

## 项目结构

![floder-structure](README_img/root_structure.png)

## 创建一个公共组件库

```sh
lerna create ra-material-ui
```
## 配置`ra-material-ui`建ra-material-ui`请参考`lerna-react/packages/ra-material-ui/package.json`

## 使用CRA创建typesctip react项目
```sh
cd packages/
yarn create react-app admin --template typescript
```

## admin中引入公共组件包
```sh
lerna --scope admin add ra-material-ui
```
> todo 未完成其它组件调用功能

## 更新`admin/src/App.tsx`
```
import React from 'react';
import { Button } from 'ra-material-ui';

function App() {
  return <div className="App">
    <Button>ra-material-ui button component</Button>
  </div>;
}

export default App;

```
会发现出错，原因是react-dom 只在当前`src` `node_modules`下查询引用，而非其它子项目，基于这种问题，有很多处理方法,如复制代码，eject以后重定义src路径，通过查询重定义路径等。
* craco
* react-app-rewired
* cra-overrides, etc
* eject

## 使用`craco`支持src可配置
```sh
lerna add @craco/craco packages/admin
lerna add craco-babel-loader packages/admin
```
## react子项目根目录添加admin/craco.config.js配置
```js
const path = require('path');
const cracoBabelLoader = require('craco-babel-loader')
const resolvePackage = relativePath => path.resolve(__dirname,relativePath);

module.exports = {
    plugins:[{
      plugin:cracoBabelLoader,
      options:{
         includes:[resolvePackage('../ra-material-ui')],
         excludes:[/node_modules/]
      }
   }]
};

```

## 修改pacekage.json使用`craco`命令，替换`react-scripts`
```json
  "scripts": {
    - "start": "react-scripts start",
    + "start-admin": "craco start",
    - "build": "react-scripts build",
    + "build": "craco build",
    - "test": "react-scripts test",
    + "test": "craco test",
  },
```

## 支持任意位置启动 admin
* 修改`lerna-react/package.json`文件
```json
    "scripts": {
        ...
        + "admin": "yarn lerna run start-admin --stream"
        ...
    }
```
