# TypeScript-learn

这个项目主要是为了学习 TypeScript.

[English](./README.md) | 简体中文

## 简介

首先给大家介绍一下官方网站 [https://www.typescriptlang.org](https://www.typescriptlang.org). 这儿有一个很不可思议的事， 就是你再浏览器输入 `www.typescriptlang.org`, 并不会跳转至 `https://www.typescriptlang.org` 而是这个 `http://www.typescriptlang.org`. 微软这么坑吗？

言归正传，在这个项目中，我会给你展示 TypeScript 的基本类型，变量声明，类等。

以及如何在项目中使用 TypeScript，像 GraphQL， VueJs， ReactJs， 以及项目配置等。

```bash

.
├── .vscode  vscode 的配置目录
│   ├── launch.json  程序启动配置
├── graphQL  在 GraphQL 项目使用TS
│   ├── server.ts  使用 Apollo-Server 的例子
├── type  TS 各种类型
│   ├── basicTypes.ts  TS 基本类型
├── .gitignore  需要 git 忽略的声明文件
├── LICENSE  版权文件
├── package.json  Node 的项目配置文件
└── tsconfig.json  TS 的项目配置文件

```

## 类型

介绍 TS 的基本类型, 类, 接口等.
[点击查看详情](./type/README-zh_CN.md)

## GraphQL

此项目将会展示如何在 GraphQL 中使用 TypeScript.
[点击查看详情](./graphQL/README-zh_CN.md)
