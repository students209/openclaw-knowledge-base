# 技能安装

安装技能到你的 Agent。

---

## 安装命令

```bash
# 使用 OpenClaw CLI 安装
openclaw skill install <skill-name>

# 使用 ClawHub 安装
npx clawhub install <skill-name>
```

---

## 查看可用技能

```bash
# 列出所有技能及状态
openclaw skills list

# 检查技能准备状态
openclaw skills check
```

---

## 安装示例

```bash
# 安装天气技能
openclaw skills install weather

# 安装 GitHub 技能
openclaw skills install github

# 通过 ClawHub 安装
npx clawhub install coding-agent
```

---

## 从 ClawHub 安装

访问 [clawhub.com](https://clawhub.com) 查看更多技能。

```bash
# 搜索技能
npx clawhub search <关键词>

# 安装技能
npx clawhub install <技能名>

# 更新技能
npx clawhub update
```

---

## 技能配置

部分技能需要额外配置：

| 技能 | 需要配置 |
|------|----------|
| github | GitHub CLI (gh) 已登录 |
| notion | Notion API Key |
| 1password | 1Password CLI (op) 已登录 |
| feishu-* | 飞书应用凭证 |

---

## 下一步

- [技能开发](./develop) - 创建自己的技能
