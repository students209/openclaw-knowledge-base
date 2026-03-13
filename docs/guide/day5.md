# Day 5：连接聊天平台

> ⏱ 预计时间：1小时 | ⭐ 难度：进阶

---

## 今日目标

- 将 AI 接入聊天平台
- 实现自动回复
- 多平台管理

---

## 支持的平台

OpenClaw 支持多种聊天平台接入：

| 平台 | 难度 | 说明 |
|------|------|------|
| Discord | ⭐ | 最常用，机器人集成 |
| Telegram | ⭐ | Bot API |
| 飞书 | ⭐⭐ | 企业微信/飞书 |
| Slack | ⭐ | 工作协作平台 |
| WhatsApp | ⭐⭐ | 个人消息 |

---

## Discord 接入

Discord 是最常用的接入平台，以下是详细步骤：

### 步骤 1：创建 Discord 应用

1. 访问 [Discord Developer Portal](https://discord.com/developers/applications)
2. 点击「New Application」
3. 输入名称，点击「Create」

### 步骤 2：创建机器人

1. 在应用页面点击「Bot」
2. 点击「Reset Token」获取 Token
3. 开启「Message Content Intent」

### 步骤 3：邀请机器人到服务器

1. 点击「OAuth2」→ 「URL Generator」
2. 勾选 `bot` 和 `Send Messages`
3. 复制生成的 URL，浏览器打开并选择服务器

### 步骤 4：配置 OpenClaw

```bash
# 进入配置
openclaw configure --section channels
```

或直接编辑配置：

```json
{
  "channels": {
    "discord": {
      "enabled": true,
      "token": "YOUR_BOT_TOKEN"
    }
  }
}
```

### 步骤 5：测试

在 Discord 中发送消息，AI 会自动回复！

---

## Telegram 接入

### 步骤 1：创建 Bot

1. 在 Telegram 中搜索 @BotFather
2. 发送 `/newbot` 创建新机器人
3. 获取 Bot Token

### 步骤 2：配置 OpenClaw

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "YOUR_TELEGRAM_BOT_TOKEN"
    }
  }
}
```

### 步骤 3：启动

```bash
openclaw gateway restart
```

---

## 飞书接入

### 步骤 1：创建应用

1. 访问 [飞书开放平台](https://open.feishu.cn/)
2. 创建企业自建应用
3. 获取 App ID 和 App Secret

### 步骤 2：添加权限

需要添加以下权限：
- `im:message` - 接收和发送消息
- `im:message:send_as_bot` - 以机器人身份发送消息

### 步骤 3：配置 OpenClaw

```json
{
  "channels": {
    "feishu": {
      "enabled": true,
      "appId": "YOUR_APP_ID",
      "appSecret": "YOUR_APP_SECRET"
    }
  }
}
```

---

## 多平台同时接入

可以同时接入多个平台：

```json
{
  "channels": {
    "discord": {
      "enabled": true,
      "token": "YOUR_DISCORD_TOKEN"
    },
    "telegram": {
      "enabled": true,
      "token": "YOUR_TELEGRAM_TOKEN"
    },
    "feishu": {
      "enabled": true,
      "appId": "YOUR_APP_ID",
      "appSecret": "YOUR_APP_SECRET"
    }
  }
}
```

---

## 配置回复规则

### 指定回复任务

可以指定不同平台使用不同任务：

```json
{
  "channels": {
    "discord": {
      "enabled": true,
      "token": "xxx",
      "task": "discord-assistant"
    },
    "telegram": {
      "enabled": true,
      "token": "xxx",
      "task": "telegram-assistant"
    }
  }
}
```

### 关键词触发

在系统提示词中设置：

```
当用户发送消息以"天气"开头时，调用 weather 技能查询天气。
当用户发送消息以"搜索"开头时，使用 tavily 搜索相关信息。
```

---

## 常见问题

### 1. Discord 收不到消息

- 确认已开启「Message Content Intent」
- 确认机器人已添加到服务器
- 检查 Token 是否正确

### 2. Telegram 无法响应

- 检查 Bot Token
- 确认机器人隐私设置
- 可能需要重启服务

### 3. 飞书无法接收消息

- 检查应用状态是否为「已发布」
- 确认权限已添加
- 检查 App ID 和 Secret

---

## 下一步

恭喜完成 Day 5！🎉

- [Day 6：训练 AI →](./day6)

---

## 配套视频

（视频链接收集ing...）

---

> 📌 **今日打卡**：成功接入一个平台并能自动回复即为完成！