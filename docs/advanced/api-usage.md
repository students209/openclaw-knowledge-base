# API 使用

使用 OpenClaw API 进行编程开发。

---

## API 端点

| 端点 | 方法 | 说明 |
|------|------|------|
| `ws://localhost:3000` | WebSocket | 实时对话 |
| `http://localhost:3000/api/chat` | POST | HTTP 对话 |

---

## WebSocket 连接

```javascript
// 连接 WebSocket
const ws = new WebSocket('ws://localhost:3000');

// 发送消息
ws.send(JSON.stringify({
  type: 'message',
  content: '你好',
  model: 'MiniMax-M2.5'
}));

// 接收回复
ws.onmessage = (event) => {
  console.log(event.data);
};
```

---

## HTTP API

```bash
# 发送消息
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "你好",
    "model": "MiniMax-M2.5"
  }'
```

---

## 认证方式

### 1. API Key

```bash
# 通过 Header
curl -X POST http://localhost:3000/api/chat \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"message": "你好"}'
```

### 2. Token

在配置文件中设置：

```json
{
  "gateway": {
    "auth": "token",
    "token": "your-token"
  }
}
```

---

## 错误处理

| 状态码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 请求错误 |
| 401 | 认证失败 |
| 429 | 请求过于频繁 |
| 500 | 服务器错误 |

---

## 下一步

- [Webhook](./webhook) - 事件回调
