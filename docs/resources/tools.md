# 工具推荐

推荐的工具和服务，助你更好地使用 OpenClaw。

---

## 一、AI 模型

### OpenAI 系列

| 模型 | 特点 | 价格 | 推荐场景 |
|------|------|------|----------|
| GPT-4o | 综合能力强 | $15/百万token | 通用对话、编程 |
| GPT-4o-mini | 便宜快速 | $0.15/百万token | 简单任务 |
| o1-preview | 推理能力强 | $15/百万token | 复杂推理 |

**API Key 获取**：https://platform.openai.com/api-keys

---

### Anthropic 系列

| 模型 | 特点 | 价格 | 推荐场景 |
|------|------|------|----------|
| Claude 3.5 Sonnet | 代码能力强 | $3/百万token | 编程、审查 |
| Claude 3 Haiku | 便宜快速 | $0.25/百万token | 简单任务 |

**API Key 获取**：https://console.anthropic.com/

---

### 国内模型

| 模型 | 提供商 | 特点 | 价格 |
|------|--------|------|------|
| Kimi k2.5 | Moonshot | 中文友好 | ¥15/百万token |
| 通义千问 Qwen Turbo | 阿里云 | 性价比高 | ¥0.5/百万token |
| MiniMax-M2.5 | 百炼 | 免费额度大 | 免费额度 |

**API Key 获取**：
- Kimi：https://platform.moonshot.cn/
- 通义千问：https://dashscope.console.aliyun.com/
- MiniMax：https://platform.minimaxi.com/

---

## 二、开发工具

### 代码编辑器

| 工具 | 平台 | 特点 | 推荐度 |
|------|------|------|--------|
| **VS Code** | 全部 | 免费、插件丰富 | ⭐⭐⭐⭐⭐ |
| **Cursor** | 全部 | AI 编程集成 | ⭐⭐⭐⭐⭐ |
| **Windsurf** | 全部 | AI 编程，免费 | ⭐⭐⭐⭐ |
| **JetBrains** | 全部 | 专业，功能强大 | ⭐⭐⭐⭐ |

---

### 命令行工具

| 工具 | 说明 | 平台 |
|------|------|------|
| iTerm2 | macOS 终端 | macOS |
| Windows Terminal | Windows 终端 | Windows |
| Tabby | 跨平台终端 | 全部 |
| Warp | AI 终端 | macOS |

---

### Git 相关

| 工具 | 说明 |
|------|------|
| GitHub Desktop | 图形化 Git |
| Sourcetree | 图形化 Git |
| GitKraken | 付费图形化 Git |

---

## 三、部署平台

### 免费/便宜方案

| 平台 | 免费额度 | 优点 | 缺点 |
|------|----------|------|------|
| **Render** | 750小时/月 | 稳定、HTTPS 免费 | 休眠后启动慢 |
| **Railway** | $5/月 | 按需付费 | 超额收费 |
| **Vercel** | 100GB/月 | 速度快 | 仅前端 |
| **Fly.io** | 3实例 | 全球部署 | 配置复杂 |

### 付费方案

| 平台 | 价格 | 特点 |
|------|------|------|
| 阿里云服务器 | ¥30+/月 | 稳定、国内 |
| 腾讯云服务器 | ¥30+/月 | 稳定、国内 |
| DigitalOcean | $4/月 | 简单、稳定 |
| AWS | 按量 | 功能全 |

---

## 四、常用服务

### 图床/存储

| 服务 | 免费额度 | 特点 |
|------|----------|------|
| Imgur | 匿名上传 | 简单、需翻墙 |
| GitHub Issues | 无限制 | 稳定、需翻墙 |
| 阿里云 OSS | 20GB | 国内、快速 |
| 腾讯云 COS | 50GB | 国内、快速 |

### 域名

| 服务 | 价格 | 特点 |
|------|------|------|
| 阿里云 | ¥30+/年 | 国内 |
| 腾讯云 | ¥30+/年 | 国内 |
| Namecheap | $10/年 | 国际 |
| Cloudflare Registrar | $8/年 | 隐私 |

---

## 五、效率工具

### API 测试

| 工具 | 说明 |
|------|------|
| Postman | API 调试 |
| Hoppscotch | 轻量级 API 测试 |
| Bruno | 开源替代 |

### JSON 处理

| 工具 | 说明 |
|------|------|
| jq | 命令行 JSON 处理 |
| JSONFormatter | 在线格式化 |
| VS Code | 内置支持 |

### 其他工具

| 工具 | 说明 |
|------|------|
| ngrok | 内网穿透 |
| Cloudflare Tunnel | 免费内网穿透 |
| Screenotate | 截图识别文字 |

---

## 六、学习资源

### AI/编程

| 资源 | 说明 |
|------|------|
| GitHub Learning Lab | 编程学习 |
| Coursera | 在线课程 |
| B站 | 大量免费教程 |

### OpenClaw 相关

| 资源 | 链接 |
|------|------|
| 官方文档 | https://docs.openclaw.ai |
| GitHub | https://github.com/openclaw/openclaw |
| Discord | https://discord.com/invite/clawd |
| 技能市场 | https://clawhub.com |

---

## 七、环境配置

### Node.js 管理

| 工具 | 说明 |
|------|------|
| nvm | Node 版本管理 |
| fnm | 快速 Node 版本管理 |

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 使用 nvm
nvm install 22
nvm use 22
```

### Docker

| 工具 | 说明 |
|------|------|
| Docker Desktop | macOS/Windows |
| OrbStack | macOS 更快 |

---

## 八、推荐组合

### 新手入门
- IDE：VS Code + Cursor 插件
- 模型：MiniMax（免费）
- 部署：Render（免费）

### 个人使用
- IDE：Cursor
- 模型：Kimi（中文好）
- 部署：Railway

### 专业开发
- IDE：JetBrains
- 模型：Claude 3.5（代码强）
- 部署：阿里云/腾讯云

---

*持续更新中...*