# Telegram 集成

将 OpenClaw 接入 Telegram。

---

## 配置步骤

### 1. 创建 Bot

1. 在 Telegram 中搜索 @BotFather
2. 发送 `/newbot` 创建新机器人
3. 设置名称和用户名
4. 获取 Bot Token

### 2. 配置 OpenClaw

```bash
openclaw configure --section channels
```

或手动编辑配置：

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "YOUR_BOT_TOKEN"
    }
  }
}
```

### 3. 启动服务

```bash
openclaw gateway start
```

---

## 使用方式

- 在 Telegram 中搜索你的机器人用户名
- 开始对话即可使用

---

## 下一步

- [飞书集成](./feishu) - 接入企业平台