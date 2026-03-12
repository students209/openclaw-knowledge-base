# 安装指南

本指南将帮助你在不同平台上安装 OpenClaw。

---

## 选择你的平台

| 平台 | 说明 |
|------|------|
| [Windows](./windows) | Windows 10/11 安装指南 |
| [macOS](./mac) | macOS 安装指南 |
| [Linux](./linux) | Ubuntu/Debian/CentOS 安装指南 |
| [Docker](./docker) | 容器化部署 |
| [云端版本](./cloud) | 无需本地安装 |

---

## 安装前准备

### 1. 检查 Node.js

```bash
node -v
```

如果版本低于 22.12.0，请先升级 Node.js。

### 2. 安装 Node.js（如果未安装）

**Windows/macOS**: 访问 [nodejs.org](https://nodejs.org/) 下载 LTS 版本

**Linux (Ubuntu/Debian)**:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

---

## 安装 OpenClaw

```bash
npm install -g openclaw
```

---

## 验证安装

```bash
openclaw --version
```

---

## 下一步

- [首次启动](../tutorials/basic/first-start)
- [配置 API Key](../tutorials/basic/config)