# 报错解决

本页面收集 OpenClaw 常见错误及解决方案。

---

## 1. EACCES 权限错误

**错误**：permission denied

**解决**：
```bash
# 使用 npm 配置
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
source ~/.bashrc
```

---

## 2. Node.js 版本不匹配

**错误**：Unsupported node version

**解决**：
```bash
# 使用 nvm 安装
nvm install 22
nvm use 22
```

---

## 3. 端口被占用

**错误**：Port 3000 is already in use

**解决**：
```bash
# 查看端口
lsof -i :3000
# 使用其他端口
openclaw gateway start --port 3001
```

---

## 4. API Key 错误

**错误**：Invalid API key / authentication failed

**解决**：
1. 检查 API Key 是否正确
2. 确认 API Key 有额度
3. 检查模型名称

---

## 5. 网络超时

**错误**：ETIMEDOUT / ECONNRESET

**解决**：
1. 检查网络连接
2. 使用代理
3. 增加超时时间

---

## 6. 内存溢出

**错误**：JavaScript heap out of memory

**解决**：
```bash
# 增加内存限制
export NODE_OPTIONS="--max-old-space-size=4096"
```

---

## 7. Docker 构建失败

**错误**：Build failed

**解决**：
1. 检查 Dockerfile 语法
2. 确认 Node.js 版本
3. 查看构建日志

---

## 8. 模块找不到

**错误**：Cannot find module

**解决**：
```bash
# 重新安装依赖
npm install
```

---

## 9. JSON 解析错误

**错误**：Unexpected token in JSON

**解决**：
1. 检查配置文件 JSON 格式
2. 使用 JSON 验证工具
3. 重新生成配置

---

## 10. 获取更多帮助

如果以上方法无法解决问题：
1. 搜索 [GitHub Issues](https://github.com/openclaw/openclaw/issues)
2. 加入 [Discord 社区](https://discord.com/invite/clawd)

---

**持续更新中...**