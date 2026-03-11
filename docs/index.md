---
layout: home

hero:
  name: "OpenClaw"
  text: "AI Agent 开发平台"
  tagline: "轻松构建你的 AI 助手，无需深度学习经验"
  image:
    src: /hero-image.svg
    alt: OpenClaw
  actions:
    - theme: brand
      text: 快速开始
      link: /getting-started/
    - theme: alt
      text: 安装指南
      link: /getting-started/installation
    - theme: alt
      text: GitHub
      link: https://github.com/openclaw/openclaw

features:
  - icon: 🚀
    title: 快速上手
    details: 5 分钟完成安装，无需配置复杂环境，一条命令即可启动
  - icon: 🤖
    title: 多模型支持
    details: 支持 OpenAI、Claude、通义千问、Kimi 等主流 AI 模型
  - icon: 🔌
    title: 多渠道集成
    details: 支持 Discord、Telegram、飞书、企业微信等主流通讯平台
  - icon: 🛠️
    title: 技能市场
    details: 丰富的技能库，一键安装各种功能模块
  - icon: 📚
    title: 知识训练
    details: 通过文档训练让 AI 学习你的专业知识
  - icon: 🔐
    title: 私有部署
    details: 支持本地、服务器、Docker 等多种部署方式，数据完全自主可控
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #667eea 30%, #764ba2);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #667eea50 50%, #764ba250 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.VPHero .image-bg {
  transition: background-color 0.5s;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

## 🎯 为什么选择 OpenClaw？

OpenClaw 是一个开源的 AI Agent 开发平台，旨在让每个人都能轻松构建自己的 AI 助手。

| 特性 | 说明 |
|------|------|
| 🎯 零门槛 | 无需深度学习经验，会写代码就能用 |
| 🔧 可扩展 | 丰富的技能市场，按需安装功能模块 |
| 🌐 多渠道 | 一套代码，多平台运行 |
| 🔒 可控性 | 私有部署，数据安全有保障 |

## 📖 文档导航

| 模块 | 说明 |
|------|------|
| [快速开始](/getting-started/) | 5 分钟入门指南 |
| [安装指南](/getting-started/installation) | 各平台安装教程 |
| [基础教程](/tutorials/) | 从零开始学习 |
| [技能市场](/tutorials/skills/) | 扩展你的 AI 能力 |
| [训练指南](/tutorials/training/) | 让 AI 学习你的知识 |
| [部署方案](/deployment/) | 生产环境部署 |

## 🌟 社区资源

- [GitHub 仓库](https://github.com/openclaw/openclaw) - 源码和贡献
- [Discord 社区](https://discord.com/invite/clawd) - 交流讨论
- [技能市场](https://clawhub.com) - 发现更多技能
- [官方文档](https://docs.openclaw.ai) - 英文文档

## 🚀 快速开始

```bash
# 安装 OpenClaw
npm install -g openclaw

# 初始化项目
openclaw init my-agent

# 启动服务
openclaw gateway start
```

---

<p align="center">
  Made with ❤️ by OpenClaw Team
</p>