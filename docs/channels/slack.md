# Slack 集成

将 OpenClaw 接入 Slack。

---

## 配置步骤

### 1. 创建 Slack App

1. 访问 [Slack API](https://api.slack.com/apps)
2. 点击 "Create New App"
3. 选择 "From scratch"

### 2. 配置权限

在 "OAuth & Permissions" 添加：
- `chat:write`
- `channels:read`
- `im:read`

### 3. 安装到工作区

点击 "Install to Workspace"

### 4. 配置 OpenClaw

```json
{
  "channels": {
    "slack": {
      "enabled": true,
      "token": "xoxb-YOUR-BOT-TOKEN"
    }
  }
}
```

---

## 下一步

- [WhatsApp 集成](./whatsapp)