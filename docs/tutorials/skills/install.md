# 技能安装

安装技能到你的 Agent，扩展功能。

---

## 一、快速开始

### 1.1 基本命令

```bash
# 使用 OpenClaw CLI 安装
openclaw skill install <skill-name>

# 使用 ClawHub 安装
npx clawhub install <skill-name>
```

### 1.2 查看可用技能

```bash
# 列出所有技能及状态
openclaw skills list

# 检查技能准备状态
openclaw skills check

# 查看技能详情
openclaw skills info <skill-name>
```

---

## 二、安装示例

### 2.1 常用技能安装

```bash
# 安装天气技能（查询天气）
openclaw skills install weather

# 安装 GitHub 技能（GitHub 操作）
openclaw skills install github

# 安装 PDF 编辑技能
openclaw skills install nano-pdf

# 安装 Notion 技能
openclaw skills install notion

# 安装飞书技能
openclaw skills install feishu-doc
openclaw skills install feishu-wiki
```

### 2.2 通过 ClawHub 安装

```bash
# 搜索技能
npx clawhub search weather
npx clawhub search github

# 安装技能
npx clawhub install coding-agent

# 更新所有技能
npx clawhub update

# 查看已安装技能
npx clawhub list
```

---

## 三、ClawHub 技能市场

访问 [clawhub.com](https://clawhub.com) 探索更多技能。

### 3.1 搜索技巧

```bash
# 按关键词搜索
npx clawhub search "天气"
npx clawhub search "PDF"

# 搜索包含特定功能的技能
npx clawhub search "twitter"
npx clawhub search "discord"
```

### 3.2 热门技能推荐

| 技能 | 功能 |
|------|------|
| coding-agent | 代码生成、代码审查 |
| weather | 天气查询 |
| tavily | AI 搜索 |
| summarize | 文档摘要 |
| video-frames | 视频处理 |

---

## 四、技能配置

部分技能需要额外配置才能使用：

### 4.1 GitHub 技能

```bash
# 安装 GitHub CLI（如未安装）
brew install gh

# 登录 GitHub
gh auth login
```

### 4.2 Notion 技能

```bash
# 创建 Notion Integration
# 1. 访问 https://www.notion.so/my-integrations
# 2. 创建新的 Integration
# 3. 获取 Internal Integration Token
# 4. 在 Notion 页面中点击 "..." → "Connect to" → 选择你的 Integration
```

### 4.3 飞书技能

```bash
# 创建飞书应用
# 1. 访问 https://open.feishu.cn/
# 2. 创建企业自建应用
# 3. 获取 App ID 和 App Secret
# 4. 添加权限：im:message, im:message:send_as_bot
# 5. 发布应用
```

### 4.4 1Password 技能

```bash
# 安装 1Password CLI
brew install 1password-cli

# 登录
op signin
```

---

## 五、常见问题

### 5.1 安装失败

**问题**：安装时报错

**解决**：
1. 检查网络连接
2. 确认 Node.js 版本 >= 22.12.0
3. 尝试使用管理员权限：`sudo npm install -g openclaw`

### 5.2 技能不可用

**问题**：安装后显示 "missing"

**解决**：
1. 检查依赖是否安装：`openclaw skills check`
2. 安装缺失的依赖
3. 重新启动 Gateway：`openclaw gateway restart`

### 5.3 配置不生效

**问题**：配置了但无法使用

**解决**：
1. 重启 Gateway
2. 检查配置文件：`~/.openclaw/openclaw.json`
3. 确认凭证正确

---

## 六、卸载技能

```bash
# 卸载技能（删除对应目录）
rm -rf ~/.openclaw/skills/<skill-name>

# 或使用 CLI（如支持）
openclaw skill uninstall <skill-name>
```

---

## 七、最佳实践

### 7.1 技能管理建议

- **按需安装**：不需要的技能不安装，减少资源占用
- **定期更新**：使用 `npx clawhub update` 更新技能
- **测试验证**：安装后测试功能是否正常

### 7.2 推荐技能组合

| 场景 | 推荐技能 |
|------|----------|
| 日常使用 | weather, summarize |
| 开发工作 | github, gh-issues, coding-agent |
| 内容创作 | reddit-readonly, last30days |
| 知识管理 | notion, qmd |
| 企业协作 | feishu-doc, feishu-wiki |

---

## 八、下一步

- [技能列表](./list) - 查看所有技能
- [技能开发](./develop) - 创建自己的技能
- [提示词模板](../resources/prompts) - 使用技能