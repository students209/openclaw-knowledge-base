# 基础配置

配置 OpenClaw 的 API Key 和模型。

---

## 配置 API Key

运行配置向导：

```bash
# 完整配置向导
openclaw configure

# 或只配置特定部分
openclaw configure --section model     # 配置模型
openclaw configure --section channels  # 配置频道
openclaw configure --section workspace # 配置工作目录
```

配置向导会提示你：
1. 选择模型提供商
2. 输入 API Key
3. 选择默认模型

---

## 支持的模型

| 提供商 | 模型 | 环境变量 |
|--------|------|----------|
| OpenAI | GPT-4, GPT-4o, GPT-3.5 | `OPENAI_API_KEY` |
| Anthropic | Claude 3.5 Sonnet, Claude 3 | `ANTHROPIC_API_KEY` |
| 阿里云 | 通义千问 Qwen Turbo/Plus | `DASHSCOPE_API_KEY` |
| Moonshot | Kimi k2.5, Kimi k1.5 | `MOONSHOT_API_KEY` |
| Google | Gemini 2.0, Gemini 1.5 | `GOOGLE_API_KEY` |
| Bailian | MiniMax-M2.5 等 | `BAILIAN_API_KEY` |

---

## 配置文件位置

- macOS/Linux: `~/.openclaw/openclaw.json`
- Windows: `%USERPROFILE%\.openclaw\openclaw.json`

---

## 手动配置

如果不想使用交互式配置，可以直接编辑配置文件：

```bash
# 编辑配置文件
openclaw config edit

# 或直接编辑 JSON 文件
vim ~/.openclaw/openclaw.json
```

**配置文件示例**：

```json
{
  "model": {
    "provider": "bailian",
    "model": "MiniMax-M2.5",
    "apiKey": "your-api-key-here"
  },
  "gateway": {
    "mode": "local",
    "port": 3000
  }
}
```

---

## 环境变量配置

也可以通过环境变量配置：

```bash
# Linux/macOS
export OPENAI_API_KEY="sk-xxx"
export ANTHROPIC_API_KEY="sk-ant-xxx"

# Windows PowerShell
$env:OPENAI_API_KEY="sk-xxx"

# 启动时生效
OPENAI_API_KEY="sk-xxx" openclaw gateway start
```

---

## 下一步

- [界面介绍](./interface)
- [第一个任务](./first-task)