# Day 1：认识 AI Agent 与安装 OpenClaw

> ⏱ 预计时间：1小时 | ⭐ 难度：入门

---

## 什么是 AI Agent？

AI Agent（AI 助手）是一种能够理解用户意图、执行任务的人工智能程序。与传统聊天机器人不同，AI Agent 可以：

- 📝 **执行操作**：发送消息、操作文件、调用API
- 🔗 **连接世界**：接入各种平台和服务
- 🧠 **学习知识**：通过文档训练成为领域专家
- ⚙️ **自动完成任务**：按照设定的流程工作

---

## 什么是 OpenClaw？

OpenClaw 是一个开源的 AI Agent 开发平台，让每个人都能轻松构建自己的 AI 助手。

### 核心特性

| 特性 | 说明 |
|------|------|
| 🚀 零门槛 | 无需深度学习经验，会写代码就能用 |
| 🔧 可扩展 | 丰富的技能市场，按需安装功能模块 |
| 🌐 多渠道 | 一套代码，多平台运行（Discord/Telegram/飞书等） |
| 🔒 可控性 | 支持私有部署，数据安全有保障 |

---

## 系统要求

在安装 OpenClaw 之前，请确认你的电脑满足以下要求：

| 要求 | 说明 |
|------|------|
| Node.js | 18.x 或更高版本（推荐 22.x） |
| npm | 9.x 或更高版本 |
| 操作系统 | macOS / Windows / Linux |

---

## 安装步骤

### 步骤 1：检查 Node.js

打开终端（Terminal 或 PowerShell），输入：

```bash
node -v
```

如果显示版本号低于 18，请先安装 Node.js：

- **Windows/macOS**: 访问 [nodejs.org](https://nodejs.org/) 下载 LTS 版本
- **Linux (Ubuntu/Debian)**:
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
  ```

### 步骤 2：安装 OpenClaw

在终端中运行：

```bash
npm install -g openclaw
```

> ⚠️ 如果权限不足（Linux/macOS），可能需要加 `sudo`：
> ```bash
> sudo npm install -g openclaw
> ```

### 步骤 3：验证安装

```bash
openclaw --version
```

如果显示版本号，说明安装成功！

---

## 常见问题

### 1. 安装失败

**问题**：npm 安装报错

**解决**：
1. 检查网络连接
2. 清除 npm 缓存：`npm cache clean --force`
3. 尝试使用国内镜像：`npm config set registry https://registry.npmmirror.com`

### 2. 版本过低

**问题**：提示版本低于 22.12.0

**解决**：
```bash
# 升级 Node.js（推荐使用 nvm）
# 或重新安装 Node.js
```

---

## 下一步

恭喜完成 Day 1！🎉

- [Day 2：首次启动 →](./day2)

---

## 配套视频

（视频链接收集ing...）

---

> 📌 **今日打卡**：安装成功并运行 `openclaw --version` 显示版本号即为完成！