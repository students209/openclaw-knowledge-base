# Discord 接入踩坑记录

> 日期：2026-03-13 | 分类：集成

---

## 背景

尝试将 OpenClaw 接入 Discord，过程中遇到的一些问题和解决方案。

---

## 问题1：机器人收不到消息

### 错误现象
在 Discord 发送消息，机器人没有任何响应。

### 原因
没有开启 "Message Content Intent" 权限。

### 解决步骤
1. 访问 [Discord Developer Portal](https://discord.com/developers/applications)
2. 选择你的应用 → Bot
3. 开启 "Message Content Intent"
4. 保存更改
5. 重新邀请机器人到服务器

---

## 问题2：Token 无效

### 错误现象
```
Error: Invalid token
```

### 解决
1. 在 Bot 页面点击 "Reset Token"
2. 获取新 Token
3. 更新配置文件

---

## 问题3：机器人不回复

### 检查清单
- [ ] Token 正确
- [ ] 已添加到服务器
- [ ] 已开启 Intent
- [ ] Gateway 正在运行
- [ ] 任务已配置

### 调试命令
```bash
openclaw gateway logs
```

---

## 总结

Discord 接入的主要坑点：
1. **Intent 权限** - 容易忘记开
2. **Token 刷新** - 每次都要重新配置
3. **权限不足** - 确保有发消息权限

---

## 相关教程

- [Day 5：连接平台](../guide/day5)
- [Discord 接入](../channels/discord)