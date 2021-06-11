# react app 测试例子

从用户的角度,尽可能忽略细节的情况下,模拟用户与系统交互的特定场景,即集成测试.

[参考 react-app-integration-tests-sample
](https://github.com/AntonRublev360/react-app-integration-tests-sample)
[参考 redux官方demo](https://github.com/reduxjs/cra-template-redux-typescript)

## 需求详情

1.用户输入 github 用户名 2.显示输入用户名所拥有的所有仓库

## 项目包含如下依赖:

-   国际化 ([react-intl](https://formatjs.io/docs/react-intl))
-   状态管理 ([redux](https://github.com/reduxjs/redux) + [redux-thunk](https://github.com/reduxjs/redux-thunk))
-   web 组件及样式 ([@material-ui/styles](https://material-ui.com/styles/basics))
-   单页面路由 ([react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom))
-   图标([@material-ui/icons](https://material-ui.com/components/material-icons/))

-   国际化自动提取([@format/cli](https://formatjs.io/docs/tooling/cli))
-   国际化自动生成id([babel-plugin-formatjs](https://formatjs.io/docs/getting-started/installation))
-   配置babel以支持自动生成国际化的`id`映射([@craco/craco](https://github.com/gsoft-inc/craco))
-   类别名([craco-alias](https://github.com/risenforces/craco-alias))

项目创建 create react app(typescript)

## 添加依赖

```sh
lerna add @craco/craco packages/test-sample
lerna add react-intl packages/test-sample
lerna add redux packages/test-sample
lerna add react-redux packages/test-sample
lerna add @types/react-redux packages/test-sample
lerna add @reduxjs/toolkit packages/test-sample

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
lerna add babel-plugin-formatjs packages/test-sample -D
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
import { useIntl, defineMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
    header: {
        margin: theme.spacing(3, 0, 2, 0),
    },
}));

const message = defineMessage({
    defaultMessage: '{username}的公共仓库:',
    description: '仓库列表头信息',
});

const PublicRepositoriesList = () => {
    const classes = useStyles();
    const intl = useIntl();
    const username = 'lei';
    return (
        <Container maxWidth="md">
            <Typography
                variant="h3"
                component="h1"
                className={classes.header}
                gutterBottom
            >
                {intl.formatMessage(message, { username })}
            </Typography>
        </Container>
    );
};

export default PublicRepositoriesList;

```

## 提取国际化脚本命令(路径及名字可以自己修改)
- 其中国际化id按建议为自动生成
```sh
yarn extract 'src/**/*.tsx' --out-file src/lang/zh.json --id-interpolation-pattern '[sha512:contenthash:base64:6]'
```
- 在`package.json`中配置编译脚本
```json
"scripts": {
    ...
    "compile": "formatjs compile"
  }
```
- 执行脚本
```sh
yarn compile src/lang/zh.json --ast --out-file src/compiled-lang/zh.json
```

# CRA使用react-intl推荐的自动生成id，需要配置babel
## 使用`craco`配置formatjs

- 配置craco启动
```json
  "scripts": {
    - "start": "react-scripts start",
    + "start": "craco start",
    - "build": "react-scripts build",
    + "build": "craco build",
    - "test": "react-scripts test",
    + "test": "craco test",
  },
```

## 根目录添加craco.config.js配置formatjs的babel
```json
module.exports = {
    babel: {
        plugins: [
            [
                'formatjs',
                {
                    idInterpolationPattern: '[sha512:contenthash:base64:6]',
                    ast: true,
                },
            ],
        ],
    },
};

```

## 显示测试覆盖率
```sh
yarn test --coverage --watchAll=false
```

## 添加集成测试依赖包

```sh
lerna add nock packages/test-sample -D
```

## 根目录下创建test文件夹用于存放集成测试相关JS

## 配置别名

```
lerna add craco-alias packages/test-sample -D
```

## 配置`tsconfig.json`

### 项目根目录添加`tsconfig.extend.json`文件,配置别名,完整内容如下
```json
{
    "compilerOptions": {
        "baseUrl": "./src",
        "paths": {
            "@utils": ["./utils/test-utils.tsx"],
            "@store": ["./store/index.tsx"],
            "@hooks": ["./store/hooks.tsx"]
        }
    }
}

```

### 修改`tsconfig.json`引入`tsconfig.extend.json`
```
{
+ "extends": "./tsconfig.extend.json",
  "compilerOptions": {
   ...
}

```

### 配置`craco.config.js`添加别名插件,完整配置如下:
```js
const CracoAlias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: './src',
                tsConfigPath: './tsconfig.extend.json'
            }
        }
    ],
    babel: {
        plugins: [
            [
                'formatjs',
                {
                    idInterpolationPattern: '[sha512:contenthash:base64:6]',
                    ast: true
                }
            ]
        ]
    }
};

```
## 使用`jest`+`puppeteer`进行端到端测试

### 安装`puppetter`
```sh
lerna add puppeteer packages/test-sample -D
lerna add jest-puppeteer packages/test-sample -D
lerna add @types/puppeteer packages/test-sample -D
lerna add @types/jest-environment-puppeteer packages/test-sample -D
lerna add @types/expect-puppeteer packages/test-sample -D
```

### 根目录下建立e2e测试目录，并配置添加`jest.config.js`配置文件，内容如下：
```js
module.exports = {
  preset: "jest-puppeteer",
  testRegex: "./*\\.spec\\.tsx$",
};

```

### 修改`package.json`，添加如下配置
```json
  "scripts": {
    ...
+    "test:e2e": "jest -c e2e/jest.config.js",
+    "test:e2eWatch": "jest -c e2e/jest.config.js --watchAll",
    ...
  },
```

### 项目根目录添加`jest-puppeteer.config.js`，支持`puppeteer`测试自动启动，完成后自动关闭配置，内容如下：
```js
module.exports = {
  server: {
    command: `yarn start`,
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
}
```

### e2e目录添加测试文件夹，编写测试文件`index.spec.tsx`,内容如下：
```tsx
describe("Index page", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:3000");
  });

  it("should be search page", async () => {
    await expect(page).toFill(
      'input[placeholder="请输入GitHub用户名"]',
      "leiwang0418"
    );
    await page.click("button[type=submit]", { text: "查看仓库列表" });
    await expect(page).toMatchElement("h1", { text: "leiwang0418的公共仓库:" });
    await expect(page).toMatchElement("ul");
  });
});

```

### 运行e2e测试
```sh
yarn test:e2e
```