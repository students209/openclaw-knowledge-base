# 飞书集成

将 OpenClaw 接入飞书。

---

## 配置步骤

### 1. 创建飞书应用

1. 访问 [飞书开放平台](https://open.feishu.cn/)
2. 创建企业自建应用
3. 获取 App ID 和 App Secret

### 2. 配置权限

需要以下权限：
- im:message
- im:message:send_as_bot
- im:chat:member

### 3. 配置 OpenClaw

```bash
openclaw configure --section channels
```

或手动编辑配置：

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

### 4. 事件订阅

1. 在飞书开放平台配置事件订阅
2. 验证 URL（需要公网可访问）
3. 订阅 `im.message.receive_bot` 事件

---

## 下一步

- [Slack 集成](./slack) - 接入更多平台