# react app 测试例子

从用户的角度,尽可能忽略细节的情况下,模拟用户与系统交互的特定场景,即集成测试.

[参考 react-app-integration-tests-sample
](https://github.com/AntonRublev360/react-app-integration-tests-sample/blob/master/package.json)

## 需求详情

1.用户输入 github 用户名 2.显示输入用户名所拥有的所有仓库

## 项目包含如下依赖:

-   API 请求 ([axios](https://github.com/axios/axios))
-   国际化 ([react-intl](https://formatjs.io/docs/react-intl))
-   状态管理 ([redux](https://github.com/reduxjs/redux) + [redux-thunk](https://github.com/reduxjs/redux-thunk))
-   web 组件及样式 ([@material-ui/styles](https://material-ui.com/styles/basics))
-   单页面路由 ([react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom))
-   图标([@material-ui/icons](https://material-ui.com/components/material-icons/))

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

# 国际化内容动态提取

## 添加依赖

```
lerna add @formatjs/cli packages/test-sample -D
```

## 修改`package.json`

```json
"scripts": {
    ...
+    "extract": "formatjs extract"
  },
```

## 添加可提取国际化例子

```
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';

const useStyles = makeStyles((theme) => ({
    header: {
        margin: theme.spacing(3, 0, 2, 0)
    }
}));

const PublicRepositoriesList = () => {
    const classes = useStyles();
    const intl = useIntl();
    const username = 'test';
    return (
        <Container maxWidth="md">
            <Typography variant="h3" component="h1" className={classes.header} gutterBottom>
                {intl.formatMessage({
                    defaultMessage: 'New Password',
                    description: 'placeholder text'
                })}
            </Typography>
        </Container>
    );
};

export default PublicRepositoriesList;
```

## 提取国际化脚本命令(路径及名字可以自己修改)
- 其中国际化id按建议为自动生成
```sh
yarn extract 'src/**/*.tsx' --out-file lang/zh.json --id-interpolation-pattern '[sha512:contenthash:base64:6]'
```

## 集成测试包

```sh

```
