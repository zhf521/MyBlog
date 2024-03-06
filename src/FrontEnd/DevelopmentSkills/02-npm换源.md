---
title: npm 换源
order: 1
category: 前端
tag:
  - 前端
  - npm
---

## 查看当前镜像源

```bash
npm get registry
```

## 更换淘宝镜像源

```bash
npm config set registry https://registry.npmmirror.com/
```

## 切换回官方镜像源

```bash
npm config set registry https://registry.npmjs.org/
```