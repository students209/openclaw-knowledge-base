# WhatsApp 集成

将 OpenClaw 接入 WhatsApp。

---

## 配置步骤

### 1. 获取 WhatsApp Business API

需要通过以下方式获取：
- Meta Business 账户
- WhatsApp Business API 供应商

### 2. 配置 OpenClaw

```json
{
  "channels": {
    "whatsapp": {
      "enabled": true,
      "phoneNumberId": "YOUR_PHONE_NUMBER_ID",
      "accessToken": "YOUR_ACCESS_TOKEN"
    }
  }
}
```

---

## 替代方案

如果无法直接使用 WhatsApp Business API，可以考虑：
- 使用 wacli 工具
- 使用第三方集成服务

---

## 下一步

- [资源中心](../resources/) - 更多工具