# 界面介绍

了解 OpenClaw 的主要界面和功能。

---

## Web 界面

启动服务后，访问 http://localhost:3000 查看 Web 界面。

### 主要功能区

| 区域 | 说明 |
|------|------|
| 左侧栏 | 会话列表、频道切换 |
| 中间区域 | 聊天界面 |
| 右侧栏 | 技能、设置（可选） |

---

## CLI 命令

### 常用命令

```bash
# 帮助
openclaw --help
openclaw gateway --help

# Gateway 管理
openclaw gateway start    # 启动服务
openclaw gateway status   # 查看状态
openclaw gateway stop     # 停止服务
openclaw gateway logs     # 查看日志

# 配置
openclaw configure        # 配置向导
openclaw config edit      # 编辑配置

# 代理管理
openclaw agents list      # 列出代理
openclaw agents create   # 创建代理
```

### 命令行参数

| 参数 | 说明 |
|------|------|
| `--port <端口>` | 指定端口 |
| `--dev` | 开发模式 |
| `--verbose` | 详细日志 |
| `--log-level <级别>` | 日志级别 |

---

## 配置文件

OpenClaw 使用 JSON 格式配置：

```bash
# 查看配置
openclaw config get

# 编辑配置
openclaw config edit
```

---

## 下一步

- [第一个任务](./first-task)