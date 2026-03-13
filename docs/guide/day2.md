# Day 2：首次启动与配置

> ⏱ 预计时间：1小时 | ⭐ 难度：入门

---

## 今日目标

- 启动 OpenClaw 服务
- 配置 AI 模型
- 了解 Web 界面

---

## 启动服务

### 方式一：初始化新项目（推荐）

```bash
# 创建一个新项目
openclaw init my-agent

# 进入项目目录
cd my-agent

# 启动服务
openclaw gateway start
```

### 方式二：直接启动

```bash
# 使用默认工作目录启动
openclaw gateway start
```

### 查看服务状态

```bash
# 查看运行状态
openclaw gateway status

# 查看日志
openclaw gateway logs

# 停止服务
openclaw gateway stop
```

---

## 默认信息

启动成功后，服务信息如下：

| 项目 | 默认值 |
|------|--------|
| Web 界面 | http://localhost:3000 |
| WebSocket | ws://localhost:3000 |
| 默认端口 | 3000 |

> 💡 如果端口被占用，可以使用 `--port` 参数指定其他端口：
> ```bash
> openclaw gateway start --port 3001
> ```

---

## 配置 AI 模型

OpenClaw 支持多种 AI 模型，首次使用需要配置 API Key。

### 运行配置向导

```bash
openclaw configure
```

配置向导会依次提示：
1. **选择模型提供商**：OpenAI / Claude / 通义千问 / Kimi / Gemini 等
2. **输入 API Key**：从对应平台获取
3. **选择默认模型**：一般选择最新的模型

### 支持的模型

| 提供商 | 模型 | 获取方式 |
|--------|------|----------|
| OpenAI | GPT-4, GPT-4o | [platform.openai.com](https://platform.openai.com) |
| Anthropic | Claude 3.5 Sonnet | [console.anthropic.com](https://console.anthropic.com) |
| 阿里云 | 通义千问 | [dashscope.console.aliyun.com](https://dashscope.console.aliyun.com) |
| Moonshot | Kimi | [platform.moonshot.cn](https://platform.moonshot.cn) |
| Google | Gemini | [aistudio.google.com](https://aistudio.google.com) |
| 百度智能云 | ERNIE | [cloud.baidu.com](https://cloud.baidu.com) |

### 手动配置

也可以直接编辑配置文件：

```bash
# 编辑配置文件
openclaw config edit
```

配置文件位置：
- macOS/Linux: `~/.openclaw/openclaw.json`
- Windows: `%USERPROFILE%\.openclaw\openclaw.json`

**配置示例**：

```json
{
  "model": {
    "provider": "bailian",
    "model": "MiniMax-M2.5",
    "apiKey": "your-api-key-here"
  }
}
```

---

## 环境变量配置

也可以通过环境变量配置（适合临时测试）：

```bash
# Linux/macOS
export OPENAI_API_KEY="sk-xxx"

# Windows PowerShell
$env:OPENAI_API_KEY="sk-xxx"

# 然后启动
openclaw gateway start
```

---

## 访问 Web 界面

打开浏览器访问 **http://localhost:3000**

你将看到 OpenClaw 的 Web 界面，可以：
- 🤖 与 AI 对话
- ⚙️ 管理技能
- 📝 管理任务
- 📚 管理知识库

---

## 常见问题

### 1. 端口被占用

```bash
# 查看端口占用
lsof -i :3000

# 使用其他端口
openclaw gateway start --port 3001
```

### 2. API Key 无效

- 确认 API Key 正确
- 检查 API Key 是否有余额
- 确认选择的模型可用

### 3. 无法启动

```bash
# 查看详细错误日志
openclaw gateway logs

# 检查配置文件
cat ~/.openclaw/openclaw.json
```

---

## 下一步

恭喜完成 Day 2！🎉

- [Day 3：创建第一个任务 →](./day3)

---

## 配套视频

（视频链接收集ing...）

---

> 📌 **今日打卡**：启动服务成功并能正常对话即为完成！