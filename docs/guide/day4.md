# Day 4：技能市场

> ⏱ 预计时间：1小时 | ⭐ 难度：基础

---

## 今日目标

- 了解技能市场
- 安装常用技能
- 使用技能扩展 AI 能力

---

## 什么是技能？

技能（Skill）是 OpenClaw 的功能扩展模块，让 AI 能够：
- 🌤️ 查询天气
- 📝 总结文档
- 🎬 提取视频帧
- 📂 操作文件
- 🔍 搜索信息
- 等等...

目前已有 100+ 技能可用，访问 [ClawHub](https://clawhub.com) 探索更多。

---

## 查看可用技能

```bash
# 列出所有技能
openclaw skills list

# 查看技能详情
openclaw skills info <skill-name>

# 检查技能状态
openclaw skills check
```

---

## 安装技能

### 基本命令

```bash
# 安装技能
openclaw skills install <skill-name>

# 或使用 ClawHub
npx clawhub install <skill-name>
```

### 常用技能安装

```bash
# 天气查询
openclaw skills install weather

# 文档摘要
openclaw skills install summarize

# AI 搜索
openclaw skills install tavily

# 代码生成
openclaw skills install coding-agent

# PDF 处理
openclaw skills install nano-pdf

# 飞书文档
openclaw skills install feishu-doc

# GitHub 操作
openclaw skills install github
```

### 通过 ClawHub 安装

```bash
# 搜索技能
npx clawhub search weather

# 安装
npx clawhub install weather

# 更新所有技能
npx clawhub update

# 查看已安装
npx clawhub list
```

---

## 使用技能

### 在任务中启用技能

编辑任务配置，添加技能：

```json
{
  "name": "my-task",
  "skills": ["weather", "summarize"]
}
```

### 在对话中使用

安装技能后，直接在对话中请求：

```
用户：今天北京天气怎么样？
AI：（调用 weather 技能）北京今天晴转多云，22-30°C...
```

---

## 热门技能推荐

| 技能 | 功能 | 场景 |
|------|------|------|
| weather | 天气查询 | 日常咨询 |
| summarize | 文档摘要 | 学习办公 |
| tavily | AI 搜索 | 信息检索 |
| coding-agent | 代码生成 | 开发工作 |
| video-frames | 视频处理 | 媒体加工 |
| notion | Notion 操作 | 知识管理 |
| feishu-doc | 飞书文档 | 企业协作 |

---

## 技能配置

部分技能需要额外配置才能使用：

### 1. GitHub 技能

```bash
# 安装 GitHub CLI
brew install gh

# 登录
gh auth login
```

### 2. Notion 技能

1. 访问 https://www.notion.so/my-integrations
2. 创建新的 Integration
3. 获取 Token
4. 在 Notion 页面中连接 Integration

### 3. 飞书技能

1. 访问 https://open.feishu.cn/
2. 创建企业自建应用
3. 获取 App ID 和 Secret
4. 添加权限：im:message, im:message:send_as_bot

---

## 卸载技能

```bash
# 卸载技能
rm -rf ~/.openclaw/skills/<skill-name>
```

---

## 常见问题

### 1. 技能安装失败

- 检查网络连接
- 确认 Node.js 版本 >= 22.12.0
- 尝试清除缓存：`npm cache clean --force`

### 2. 技能不可用

- 检查是否正确安装：`openclaw skills list`
- 检查是否有依赖未安装：`openclaw skills check`
- 重启服务：`openclaw gateway restart`

### 3. 技能配置不生效

- 重启 Gateway
- 检查配置文件
- 确认凭证正确

---

## 下一步

恭喜完成 Day 4！🎉

- [Day 5：连接平台 →](./day5)

---

## 配套视频

（视频链接收集ing...）

---

> 📌 **今日打卡**：成功安装并使用一个技能即为完成！