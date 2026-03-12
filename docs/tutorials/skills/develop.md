# 技能开发

开发你自己的技能，扩展 OpenClaw 功能。

---

## 一、技能概述

### 1.1 什么是技能？

技能是 OpenClaw 的扩展模块，可以为 Agent 添加各种能力：
- 调用外部 API
- 执行特定任务
- 提供特定领域知识

### 1.2 技能的工作原理

```
用户消息 → 技能匹配 → 执行脚本 → 返回结果
```

---

## 二、技能结构

### 2.1 目录结构

```
my-skill/
├── SKILL.md          # 技能说明文档（必需）
├── _meta.json        # 元信息配置（必需）
├── scripts/          # 脚本目录（可选）
│   ├── main.py
│   ├── utils.py
│   └── config.json
└── README.md         # 使用说明（可选）
```

### 2.2 SKILL.md 格式

```markdown
# 技能名称

技能描述：一句话说明技能功能

## 激活条件

- 当用户提到 [关键词] 时激活
- 或通过 @技能名 调用

## 使用场景

- 场景1：xxx
- 场景2：xxx

## 使用方法

1. 第一步：xxx
2. 第二步：xxx
3. 第三步：xxx

## 示例

用户输入：xxx
技能返回：xxx

## 注意事项

- 注意点1
- 注意点2
```

### 2.3 _meta.json 格式

```json
{
  "name": "my-skill",
  "version": "1.0.0",
  "description": "技能描述",
  "author": "你的名字",
  "tags": ["标签1", "标签2"],
  "activation": {
    "type": "keyword",
    "keywords": ["关键词1", "关键词2"]
  },
  "requirements": {
    "env": ["API_KEY"],
    "npm": []
  },
  "permissions": ["网络请求", "文件读取"]
}
```

---

## 三、开发步骤

### 3.1 创建技能

```bash
# 方法1：使用 skill-creator 工具
openclaw skills install skill-creator

# 方法2：手动创建
mkdir -p ~/.openclaw/skills/my-skill
cd ~/.openclaw/skills/my-skill
```

### 3.2 编写 SKILL.md

```markdown
# 天气查询

查询指定城市的天气信息。

## 激活条件

当用户提到"天气"时激活

## 使用方法

发送 "北京天气怎么样"
```

### 3.3 编写 _meta.json

```json
{
  "name": "weather",
  "version": "1.0.0",
  "description": "查询天气",
  "activation": {
    "type": "keyword",
    "keywords": ["天气", "温度"]
  }
}
```

### 3.4 测试技能

```bash
# 重新加载技能
openclaw skills list

# 测试
# 在对话中触发技能关键词
```

---

## 四、高级功能

### 4.1 参数配置

```json
{
  "config": {
    "api_key": {
      "type": "string",
      "required": true,
      "description": "API Key"
    },
    "default_city": {
      "type": "string",
      "default": "北京"
    }
  }
}
```

### 4.2 多脚本支持

```
my-skill/
├── SKILL.md
├── _meta.json
└── scripts/
    ├── query.js      # 查询逻辑
    ├── format.js     # 格式化输出
    └── cache.js      # 缓存处理
```

### 4.3 依赖管理

```json
{
  "requirements": {
    "npm": ["axios", "dotenv"],
    "python": ["requests"]
  }
}
```

---

## 五、发布技能

### 5.1 发布到 ClawHub

```bash
# 1. 登录 ClawHub
npx clawhub login

# 2. 发布技能
npx clawhub publish

# 3. 设置技能信息
# 按提示填写名称、描述、标签等
```

### 5.2 发布要求

- SKILL.md 完整清晰
- _meta.json 格式正确
- 代码无明显错误
- 无安全问题

---

## 六、示例：天气查询技能

### 6.1 完整示例

**_meta.json**：
```json
{
  "name": "weather",
  "version": "1.0.0",
  "description": "查询城市天气",
  "author": "YourName",
  "tags": ["工具", "天气"],
  "activation": {
    "type": "keyword",
    "keywords": ["天气", "温度", "气候"]
  }
}
```

**SKILL.md**：
```markdown
# 天气查询

查询指定城市的当前天气信息。

## 激活条件

当用户提到"天气"时自动激活

## 使用方法

- "北京天气怎么样"
- "上海明天天气"
- "深圳温度"

## 返回信息

- 当前天气状态
- 温度范围
- 湿度
- 建议

## 注意事项

- 需要天气 API Key
- 免费 API 有调用限制
```

---

## 七、最佳实践

### 7.1 命名规范

- 使用有意义的名称
- 避免与已有技能重名
- 使用英文名称

### 7.2 文档规范

- 说明清晰简洁
- 示例准确可用
- 标注注意事项

### 7.3 代码规范

- 错误处理完善
- 注释清晰
- 遵循语言最佳实践

---

## 八、调试技巧

### 8.1 查看日志

```bash
# 查看技能执行日志
openclaw gateway logs
```

### 8.2 调试模式

```json
{
  "debug": true,
  "log_level": "debug"
}
```

### 8.3 常见问题

| 问题 | 解决 |
|------|------|
| 技能不触发 | 检查 activation 配置 |
| 执行失败 | 查看错误日志 |
| 权限不足 | 检查 permissions 配置 |

---

## 九、参考资源

- [官方技能文档](https://docs.openclaw.ai/skills)
- [ClawHub](https://clawhub.com) - 学习其他技能
- [GitHub](https://github.com/openclaw/openclaw) - 查看源码

---

## 十、下一步

- [技能列表](./list) - 查看更多技能
- [技能安装](./install) - 安装已有技能
- [工具推荐](../resources/tools) - 开发工具