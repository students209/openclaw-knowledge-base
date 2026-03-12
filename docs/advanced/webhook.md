# Webhook

配置 Webhook 接收 OpenClaw 事件通知。

---

## 配置方式

在配置文件中添加 webhook URL：

```json
{
  "webhook": {
    "url": "https://your-server.com/webhook",
    "events": ["message", "agent"]
  }
}
```

---

## 支持的事件

| 事件 | 说明 |
|------|------|
| `message` | 收到新消息 |
| `agent` | Agent 状态变化 |
| `error` | 发生错误 |
| `session` | 会话事件 |

---

## Webhook 格式

```json
{
  "event": "message",
  "timestamp": "2026-03-12T08:00:00Z",
  "data": {
    "message": "用户消息",
    "reply": "AI回复"
  }
}
```

---

## 验证签名

```javascript
const crypto = require('crypto');

function verifyWebhook(signature, payload) {
  const hash = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(payload)
    .digest('hex');
  return signature === hash;
}
```

---

## 测试 Webhook

```bash
# 使用 ngrok 测试
ngrok http 3000

# 或使用 webhook.site
# 将 URL 配置到 OpenClaw
```

---

## 常见用途

- 消息转发到其他平台
- 记录对话日志
- 触发外部工作流
- 集成通知系统

---

## 下一步

- [部署方案](../deployment/) - 部署到服务器
