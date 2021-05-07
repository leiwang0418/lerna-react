# react app 测试例子
从用户的角度,尽可能忽略细节的情况下,模拟用户与系统交互的特定场景,即集成测试.

[参考react-app-integration-tests-sample
](https://github.com/AntonRublev360/react-app-integration-tests-sample/blob/master/package.json)

## 需求详情
1.用户输入github用户名
2.显示输入用户名所拥有的所有仓库

## 项目包含如下依赖:
- API请求 ([axios](https://github.com/axios/axios))
- 国际化 ([react-intl](https://formatjs.io/docs/react-intl))
- 状态管理 ([redux](https://github.com/reduxjs/redux) + [redux-thunk](https://github.com/reduxjs/redux-thunk))
- web组件及样式 ([@material-ui/styles](https://material-ui.com/styles/basics))
- 单页面路由 ([react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom))
- 图标([@material-ui/icons](https://material-ui.com/components/material-icons/)) 

项目创建 create react app(typescript)

## 添加依赖
```sh
lerna add axios packages/test-sample
lerna add react-intl packages/test-sample
lerna add redux packages/test-sample
lerna add redux-thunk packages/test-sample
lerna add @material-ui/core packages/test-sample
lerna add @material-ui/styles packages/test-sample
lerna add react-router-dom packages/test-sample
lerna add @types/react-router-dom packages/test-sample
lerna add @material-ui/icons packages/test-sample
```

## 集成测试包
```sh
```