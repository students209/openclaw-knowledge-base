# 频道集成

将 Agent 接入各种通讯平台。

---

## 支持的平台

| 平台 | 难度 | 说明 |
|------|------|------|
| [Discord](./discord) | ⭐ | 最常用，机器人集成 |
| [Telegram](./telegram) | ⭐ | 机器人 Bot |
| [飞书](./feishu) | ⭐⭐ | 企业微信/飞书 |
| [Slack](./slack) | ⭐ | 工作协作平台 |
| [WhatsApp](./whatsapp) | ⭐⭐ | 个人消息 |

---

## 配置方式

```bash
# 进入配置向导
openclaw configure --section channels
```

或在配置文件中添加：

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

---

## 下一步

选择你想接入的平台开始配置。
