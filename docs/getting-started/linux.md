# Linux 安装

本指南帮助你在 Linux 系统上安装 OpenClaw。

---

## 系统要求

- Ubuntu 18.04+ / Debian 10+ / CentOS 7+
- Node.js 18.x 或更高版本

---

## 安装步骤

### 1. 安装 Node.js

**Ubuntu/Debian:**

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

**CentOS/RHEL:**

```bash
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs
```

### 2. 安装 OpenClaw

```bash
npm install -g openclaw
```

### 3. 验证安装

```bash
openclaw --version
```

---

## 下一步

- [首次启动](../tutorials/basic/first-start)
- [配置 API Key](../tutorials/basic/config)