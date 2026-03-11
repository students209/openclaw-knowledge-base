import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OpenClaw 知识库",
  description: "OpenClaw 中文社区官方文档站",
  lang: 'zh-CN',
  
  head: [
    ['meta', { name: 'theme-color', content: '#667eea' }],
    ['meta', { name: 'og:title', content: 'OpenClaw 知识库' }],
    ['meta', { name: 'og:description', content: 'OpenClaw 中文社区官方文档站' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'OpenClaw 知识库',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/getting-started/' },
      { text: '安装指南', link: '/getting-started/installation' },
      { text: '基础教程', link: '/tutorials/' },
      { text: '技能市场', link: '/tutorials/skills/' },
      { text: '训练指南', link: '/tutorials/training/' },
      { text: '高级功能', link: '/advanced/' },
      { text: '部署方案', link: '/deployment/' },
      { text: '频道集成', link: '/channels/' },
      { text: '资源中心', link: '/resources/' },
      { text: '常见问题', link: '/faq/' },
      { text: '视频教程', link: '/videos/' }
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: '快速开始',
          items: [
            { text: '概述', link: '/getting-started/' },
            { text: '安装指南', link: '/getting-started/installation' },
            { text: 'Windows 安装', link: '/getting-started/windows' },
            { text: 'macOS 安装', link: '/getting-started/mac' },
            { text: 'Linux 安装', link: '/getting-started/linux' },
            { text: 'Docker 安装', link: '/getting-started/docker' },
            { text: '云端版本', link: '/getting-started/cloud' },
            { text: '安装验证', link: '/getting-started/verification' }
          ]
        }
      ],
      '/tutorials/': [
        {
          text: '基础教程',
          items: [
            { text: '教程概览', link: '/tutorials/' },
            { text: '首次启动', link: '/tutorials/basic/first-start' },
            { text: '基础配置', link: '/tutorials/basic/config' },
            { text: '界面介绍', link: '/tutorials/basic/interface' },
            { text: '第一个任务', link: '/tutorials/basic/first-task' }
          ]
        },
        {
          text: '技能市场',
          items: [
            { text: '技能介绍', link: '/tutorials/skills/' },
            { text: '技能列表', link: '/tutorials/skills/list' },
            { text: '技能安装', link: '/tutorials/skills/install' },
            { text: '技能开发', link: '/tutorials/skills/develop' }
          ]
        },
        {
          text: '训练指南',
          items: [
            { text: '训练介绍', link: '/tutorials/training/' },
            { text: '训练概念', link: '/tutorials/training/concept' },
            { text: '数据准备', link: '/tutorials/training/data-prep' },
            { text: '训练流程', link: '/tutorials/training/process' }
          ]
        }
      ],
      '/advanced/': [
        {
          text: '高级功能',
          items: [
            { text: '概述', link: '/advanced/' },
            { text: 'Prompt 工程', link: '/advanced/prompt-engineering' },
            { text: 'API 使用', link: '/advanced/api-usage' },
            { text: 'Webhook', link: '/advanced/webhook' }
          ]
        }
      ],
      '/deployment/': [
        {
          text: '部署方案',
          items: [
            { text: '概述', link: '/deployment/' },
            { text: 'Docker 部署', link: '/deployment/docker' },
            { text: '服务器部署', link: '/deployment/server' },
            { text: '群晖 NAS', link: '/deployment/nas' },
            { text: 'Render 部署', link: '/deployment/render' },
            { text: 'Railway 部署', link: '/deployment/railway' },
            { text: '域名配置', link: '/deployment/domain' }
          ]
        }
      ],
      '/channels/': [
        {
          text: '频道集成',
          items: [
            { text: '概述', link: '/channels/' },
            { text: 'Discord', link: '/channels/discord' },
            { text: 'Telegram', link: '/channels/telegram' },
            { text: 'WhatsApp', link: '/channels/whatsapp' },
            { text: '飞书', link: '/channels/feishu' },
            { text: 'Slack', link: '/channels/slack' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资源中心',
          items: [
            { text: '概述', link: '/resources/' },
            { text: '提示词模板', link: '/resources/prompts' },
            { text: '数据集', link: '/resources/datasets' },
            { text: '工具推荐', link: '/resources/tools' }
          ]
        }
      ],
      '/faq/': [
        {
          text: '常见问题',
          items: [
            { text: '概述', link: '/faq/' },
            { text: '安装问题', link: '/faq/installation' },
            { text: '配置问题', link: '/faq/configuration' },
            { text: '使用问题', link: '/faq/usage' },
            { text: '报错解决', link: '/faq/errors' }
          ]
        }
      ],
      '/videos/': [
        {
          text: '视频教程',
          items: [
            { text: '概述', link: '/videos/' },
            { text: '安装教程', link: '/videos/install' },
            { text: '基础教程', link: '/videos/basic' },
            { text: '进阶教程', link: '/videos/advanced' }
          ]
        }
      ],
      '/about/': [
        {
          text: '关于',
          items: [
            { text: '关于我们', link: '/about/' },
            { text: '更新日志', link: '/about/changelog' },
            { text: '贡献指南', link: '/about/contributing' },
            { text: '联系方式', link: '/about/contact' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/openclaw/openclaw' }
    ],

    footer: {
      message: 'OpenClaw 中文社区',
      copyright: 'Copyright © 2026 OpenClaw Team'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})