## 使用`story`创建组件

## 安装`cross-env`
```sh
lerna add cross-env packages/ra-material-ui -D
```
## 安装其它依赖包，`packages.json`配置最终结果如下（这里直接改了配置文件，重新安装的，没使用lerna 一个个包安装，原理一样）：
```json
{
  "name": "ra-material-ui",
  "version": "0.0.1",
  "description": "ui components with material-ui",
  "author": "lei <lei.wang0418@gmail.com>",
  "homepage": "",
  "license": "MIT",
  "main": "src/index.ts",
  "scripts": {
    "build-storybook": "cross-env STORYBOOK_DISPLAY_WARNING=true DISPLAY_WARNING=true build-storybook -c ./",
    "debug": "cross-env NODE_OPTIONS=--inspect-brk STORYBOOK_DISPLAY_WARNING=true DISPLAY_WARNING=true start-storybook -p 9011 -c ./",
    "storybook": "cross-env STORYBOOK_DISPLAY_WARNING=true DISPLAY_WARNING=true start-storybook -p 9011 -c ./"
  },
  "dependencies": {
    "@storybook/addon-controls": "6.3.0-alpha.15",
    "@storybook/addon-essentials": "6.3.0-alpha.15",
    "@storybook/react": "6.3.0-alpha.15",
    "@types/node": "^15.0.0",
    "@types/react": "^17.0.4",
    "@types/react-dom": "^17.0.3",
    "prop-types": "15.7.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "typescript": "^4.2.4"
  },
  "devDependencies": {
    "cross-env": "^7.0.3"
  }
}
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
  },
  "include": ["src/**/*", "main.ts"]
}

```

## 配置storybook, 在`ra-material-ui`目录下，新建`main.ts`,完整内容如下：
```
// main.ts

import type { StorybookConfig } from '@storybook/react/types';

module.exports = {
  stories: ['./src/**/*.stories.*'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          parser: 'typescript',
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-storyshots',
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
  core: {
    builder: 'webpack4',
  },
  features: {
    postcss: false,
  },
} as StorybookConfig;
```


### `src/components/button/`目录下创建`button.tsx`文件，内容如下：
```tsx
// src/components/button/button.tsx
import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label = 'Hello', ...props }) => (
  <button {...props}>{label}</button>
);
```

### `src/components/button/`目录下创建`button.stories.tsx`文件，内容如下：
* 为页面导出两个buttons,放到 Examples / Button 
* WithArgs 按钮支持通过storybook直接修改标题
* Basic按钮为普通按钮，且不可改
* 同时都生成doc及用法

```tsx
// src/components/button/button.stories.tsx
import React from 'react';
import { Meta } from '@storybook/react';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Examples / Button',
  argTypes: { onClick: { action: 'click ' } },
} as Meta;

export const WithArgs = (args: any) => <Button {...args} />;
WithArgs.args = { label: 'With args' };

export const Basic = () => <Button label="Click me" />;
```

### 启动组件项目
```sh
yarn lerna run storybook --stream
```

### 配置任意位置通过yarn启动,`lerna-react`根目录,packages.json添加
```json
  "scripts": {
    ...
    "story": "yarn lerna run storybook --stream"
    ...
  }
```

### yarn 启动
```sh
yarn story
```

# 测试

### 支持`typescript` `unit`测试
* 安装依赖包
```sh
lerna add jest packages/ra-material-ui
lerna add ts-jest packages/ra-material-ui
lerna add @types/jest packages/ra-material-ui
lerna add @testing-library/react packages/ra-material-ui
lerna add @testing-library/jest-dom  packages/ra-material-ui
```