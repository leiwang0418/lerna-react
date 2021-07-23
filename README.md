## `lerna` + `react-styleguide` + `craco` + `typescript`

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
yarn create react-app ra-material-ui --template typescript
```
* 配置ra-material-ui(packages/ra-material-ui/README.md)

## 使用CRA创建typesctip react项目
```sh
cd packages/
yarn create react-app admin --template typescript
```

* 配置`ra-material-ui(packages/admin/README.md)

* admin模块具体配置](packages/admin/README.md)

## 配置支持 yarn workspace  

 * 配置 lerna-react/package.json  
 ![lerna-react/package.json](README_img/root.package.json.png)
 * 配置 lerna-react/lerna.json  
 ![lerna-react/lerna.json](README_img/root.lerna.json.png)

## 基本启动命令 (全局启动命令配置在各项目最后有写)最终的`lerna-react/package.json`文件为:
```json
{
    "name": "root",
    "private": true,
    "devDependencies": {
        "lerna": "^4.0.0"
    },
    "workspaces": [
        "packages/*"
    ],
    "npmClient": "yarn",
    "scripts": {
        "guide": "yarn lerna run styleguide --stream",
        "admin": "yarn lerna run start --stream"
    }
}

```
## 全局命令
```sh
yarn guide
yarn admin
```

## 基于CRA(create-react-app)添加测试项目`test-sample`
```sh
cd packages/
yarn create react-app test-sample --template typescript
lerna clean
yarn install
```
## 启动
```sh
cd packages/test-sample
yarn start
```

* 此项目，暂时不调用其它模块，故不与其它模块做集成，着重点关注于测试本身
![测试相关说明](packages/admin/README.md)