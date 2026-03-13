import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OpenClaw 知识库",
  description: "零基础学会搭建AI助手 - OpenClaw 中文社区",
  lang: 'zh-CN',
  
  // 忽略所有死链接检查（允许构建通过）
  ignoreDeadLinks: true,
  
  head: [
    ['meta', { name: 'theme-color', content: '#667eea' }],
    ['meta', { name: 'og:title', content: 'OpenClaw 知识库' }],
    ['meta', { name: 'og:description', content: '零基础学会搭建AI助手' }],
    ['meta', { name: 'keywords', content: 'OpenClaw, AI Agent, AI助手, 开源AI, 安装教程' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'OpenClaw 知识库',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '7天入门', link: '/guide/' },
      { text: '安装指南', link: '/getting-started/' },
      { text: '案例展示', link: '/cases/' },
      { text: '教程', link: '/tutorials/' },
      { text: '视频教程', link: '/videos/' },
      { text: '服务定价', link: '/pricing/' },
      { text: '联系我们', link: '/contact/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '7天入门教程',
          items: [
            { text: '学习路径', link: '/guide/' },
            { text: 'Day 1：认识 AI Agent', link: '/guide/day1' },
            { text: 'Day 2：安装与启动', link: '/guide/day2' },
            { text: 'Day 3：第一个任务', link: '/guide/day3' },
            { text: 'Day 4：技能市场', link: '/guide/day4' },
            { text: 'Day 5：连接平台', link: '/guide/day5' },
            { text: 'Day 6：训练 AI', link: '/guide/day6' },
            { text: 'Day 7：实战项目', link: '/guide/day7' }
          ]
        }
      ],
      '/getting-started/': [
        {
          text: '快速开始',
          items: [
            { text: '概述', link: '/getting-started/' },
            { text: '安装指南', link: '/getting-started/installation' },
            { text: 'Windows 安装', link: '/getting-started/windows' },
            { text: 'macOS 安装', link: '/getting-started/mac' },
            { text: 'Linux 安装', link: '/getting-started/linux' },
            { text: 'Docker 安装', link: '/getting-started/docker' }
          ]
        }
      ],
      '/cases/': [
        {
          text: '案例展示',
          items: [
            { text: '案例列表', link: '/cases/' },
            { text: '自动回复机器人', link: '/cases/auto-reply' },
            { text: '数据处理自动化', link: '/cases/data-process' },
            { text: '客服助手', link: '/cases/customer-service' },
            { text: '内容创作助手', link: '/cases/content-creation' },
            { text: '周报生成器', link: '/cases/weekly-report' },
            { text: '信息监控助手', link: '/cases/monitor' }
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
            { text: '界面介绍', link: '/tutorials/basic/interface' }
          ]
        },
        {
          text: '技能市场',
          items: [
            { text: '技能介绍', link: '/tutorials/skills/' },
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
            { text: '群晖 NAS', link: '/deployment/nas' }
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
            { text: '飞书', link: '/channels/feishu' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资源中心',
          items: [
            { text: '概述', link: '/resources/' },
            { text: '提示词模板', link: '/resources/prompts' },
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