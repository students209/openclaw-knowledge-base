# 第一个任务创建实录

> 日期：2026-03-13 | 分类：入门

---

## 背景

第一次使用 OpenClaw，从安装到创建第一个任务的全过程记录。

---

## 步骤回顾

### 1. 安装

```bash
npm install -g openclaw
openclaw --version
```

### 2. 启动服务

```bash
openclaw gateway start
```

### 3. 配置模型

```bash
openclaw configure
```

选择了 Kimi 模型，输入 API Key。

### 4. 创建任务

```bash
openclaw task create my-first-task
```

### 5. 对话测试

```bash
openclaw chat -t my-first-task "你好"
```

---

## 遇到的问题

### 问题1：端口被占用

**错误**：
```
Error: Port 3000 is already in use
```

**解决**：
```bash
# 查找占用进程
lsof -i :3000

# 使用其他端口
openclaw gateway start --port 3001
```

### 问题2：API Key 无效

**错误**：
```
Invalid API Key
```

**解决**：
1. 确认 API Key 正确
2. 检查 API Key 是否有余额
3. 确认选择的模型可用

---

## 总结

整个过程比较顺利，主要问题集中在：
1. 端口占用（常见）
2. API Key 配置（仔细阅读文档）

**耗时**：约 20 分钟

---

## 相关教程

- [Day 3：创建第一个任务](../guide/day3)
- [基础配置](../tutorials/basic/config)