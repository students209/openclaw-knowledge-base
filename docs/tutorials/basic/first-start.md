# 首次启动

完成安装后，启动你的第一个 OpenClaw Agent。

---

## 初始化项目

```bash
# 初始化新项目（可选）
openclaw init my-agent
cd my-agent

# 或直接启动（使用默认工作目录）
openclaw gateway start
```

---

## 启动服务

```bash
# 启动 Gateway 服务
openclaw gateway start

# 查看服务状态
openclaw gateway status

# 查看日志
openclaw gateway logs
```

---

## 默认端口

- Web 界面：http://localhost:3000
- WebSocket：ws://localhost:3000

> ⚠️ 端口可能被占用，可使用 `--port` 参数指定其他端口：
> ```bash
> openclaw gateway start --port 3001
> ```

---

## 常见启动问题

### 1. 端口被占用

```bash
# 查看端口占用
lsof -i :3000

# 使用其他端口
openclaw gateway start --port 3001
```

### 2. 权限不足

```bash
# Linux/macOS 可能需要
sudo openclaw gateway start
```

---

## 下一步

- [配置 API Key](./config)
- [界面介绍](./interface)