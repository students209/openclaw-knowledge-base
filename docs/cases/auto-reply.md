# 案例：自动回复机器人

> ⭐ 难度：入门 | ⏱ 预计时间：30分钟

---

## 效果演示

创建一个 Discord/Telegram 自动回复机器人，能够：
- 自动识别用户意图
- 关键词匹配回复
- AI 智能回答

*（效果演示图待补充）*

---

## 实现思路

1. **创建任务**：新建一个专门用于回复的任务
2. **配置提示词**：定义回复规则和行为
3. **接入平台**：连接 Discord 或 Telegram
4. **测试优化**：调整回复效果

---

## 核心配置

### 任务配置

```json
{
  "name": "auto-reply-bot",
  "description": "自动回复机器人",
  "systemPrompt": "你是一个自动回复机器人，负责回复用户消息。\n\n回复规则：\n1. 问候类：热情回应\n2. 问题类：提供答案\n3. 闲聊类：友好互动\n4. 未知：礼貌说明",
  "channels": {
    "discord": {
      "enabled": true,
      "token": "YOUR_BOT_TOKEN",
      "task": "auto-reply-bot"
    }
  }
}
```

### 关键词匹配

可以在提示词中添加关键词规则：

```
当用户发送以下关键词时，回复对应内容：
- "你好" / "hi" / "hello" → "你好！有什么可以帮你的吗？"
- "帮助" / "help" → "我可以帮你回答问题、查询信息等"
- "天气" → 调用 weather 技能
```

---

## 完整步骤

### 步骤 1：创建任务

```bash
openclaw task create auto-reply-bot
```

### 步骤 2：配置

```bash
openclaw task edit auto-reply-bot
```

粘贴上面的配置。

### 步骤 3：Discord 接入

1. 创建 Discord 应用（参考 Day 5 教程）
2. 获取 Bot Token
3. 配置 Token

### 步骤 4：启动

```bash
openclaw gateway restart
```

### 步骤 5：测试

在 Discord 中发送消息，机器人会自动回复！

---

## 进阶：AI 智能回复

不使用关键词，完全用 AI 判断回复：

```json
{
  "systemPrompt": "你是一个 Discord 频道的自动回复助手。\n\n职责：\n1. 阅读用户消息\n2. 理解用户意图\n3. 给出合适的回复\n\n规则：\n- 保持友好、专业\n- 回答简洁明了\n- 不知道的如实说明\n- 适当使用表情"
}
```

---

## 常见问题

### 1. 机器人不回复

- 检查 Token 是否正确
- 确认机器人已添加到服务器
- 查看日志：`openclaw gateway logs`

### 2. 回复太机械

- 优化系统提示词
- 添加更多对话示例
- 调整模型

### 3. 回复太慢

- 使用更快的模型
- 检查网络连接

---

## 相关教程

- [Day 5：连接平台](../guide/day5)
- [Discord 接入文档](../channels/discord)

---

> 📝 你也做出了不错的案例？[联系我们投稿](/contact)！