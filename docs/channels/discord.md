# Discord 集成

将 OpenClaw 接入 Discord。

---

## 配置步骤

### 1. 创建 Discord 应用

1. 访问 [Discord Developer Portal](https://discord.com/developers/applications)
2. 点击 "New Application"
3. 设置名称

### 2. 创建 Bot

1. 点击 "Bot" → "Add Bot"
2. 设置用户名
3. 启用 "Message Content Intent"

### 3. 获取 Token

在 Bot 页面点击 "Reset Token" 获取 Token

### 4. 配置 OpenClaw

```bash
openclaw configure --section channels
```

或手动编辑配置：

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

### 5. 邀请 Bot

1. 在 Developer Portal 点击 "OAuth2" → "URL Generator"
2. 勾选 `bot` 和 `messages.read`
3. 选择权限：
   - Send Messages
   - Read Message History
4. 复制生成的 URL，浏览器打开并选择服务器

---

## 权限说明

| 权限 | 说明 |
|------|------|
| Send Messages | 发送消息 |
| Read Message History | 读取消息历史 |
| Use Slash Commands | 使用斜杠命令 |

---

## 下一步

- [Telegram 集成](./telegram) - 接入更多平台
