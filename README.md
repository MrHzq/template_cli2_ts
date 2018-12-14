# 准备

就是使用 **vue-cli2.0** 创建一个项目，一个正儿八经的 **vue-cli2.0** 的 **vue** 项目

# 开始

## 1.安装依赖

安装 vue 的官方插件 `npm i vue-class-component vue-property-decorator -S`
typescript 必须安装 `npm i typescript -D`
ts-loader 必须安装 `npm i ts-loader -D` **请注意：ts-loader 请与你的 webpack 版本对应，我的 webpack 版本为 3.6.0，因此我应该安装的 ts-loader 版本为 3.x.x，因此我在[ts-loader](https://github.com/TypeStrong/ts-loader/blob/master/CHANGELOG.md)的[Github](https://github.com/TypeStrong/ts-loader/blob/master/CHANGELOG.md)上找到了我最新的 3.x.x 的版本为 3.5.0，所以我的安装命令为`npm i ts-loader@3.5.0 -D`**

## 2.配置 webpack.base.conf.js

首先找到`./build/webpack.base.conf.js`

-   找到 `entry.app` 将 `main.js`改成 `main.ts`；**并且把项目文件中的 `main.js` 也改成 `main.ts` , 里面内容保持不变**

```
entry: {
        app: './src/main.ts'
    }
```

-   找到`resolve.extensions`，里面加上`.ts` 后缀 （是为了之后引入.ts 的时候不写后缀）

```
resolve: {
        extensions: ['.js', '.vue', '.json', '.ts'], //加入.ts
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    }
```

-   找到`module.rules` 添加`webpack`对`.ts`的解析

```
module: {
        rules: [
            // 从这里复制下面的代码就可以了
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            // 复制以上的
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            }
        ]
    }
```

## 3.添加 tsconfig.json

在根路径下创建`tsconfig.json`文件，添加一下配置

```
{
    "include": ["src/**/*"],
    "exclude": ["node_modules"],
    "compilerOptions": {
        "allowSyntheticDefaultImports": true,
        "experimentalDecorators": true,
        "allowJs": true,
        "module": "esnext",
        "target": "es5",
        "moduleResolution": "node",
        "isolatedModules": true,
        "lib": ["dom", "es5", "es6", "es7", "es2015.promise"],
        "sourceMap": true,
        "pretty": true
    }
}
```

## 4.让 ts 识别 .vue

由于 `TypeScript` 默认并不支持 `*.vue`后缀的文件，所以在 `vue` 项目中引入的时候需要创建一个 `vue-shim.d.ts` 文件，放在项目对应使用目录下，所以新建 `src/vue-shim.d.ts`，写入以下代码

```
declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}
```

## 5.`.js` 文件重命名为`.ts` 文件

将`src`下的所有`**.js`文件重命名`**.ts`，包括`src/router/index.js`等逐一从`.js`重命名为`.ts`

> 注意：重命名后对`vue`文件的`import`，需添加`.vue`后缀

因为`Typescript`默认只识别`*.ts`文件，不识别`*.vue`文件

之前：

```
import App from './App'
import HelloWorld from '@/components/HelloWorld'
```

需改为：

```
import App from './App.vue'
import HelloWorld from '@/components/HelloWorld.vue'
```

## 6.改造 `.vue` 文件
