# 训练流程

完整的训练流程。

---

## 步骤

### 1. 准备数据

将训练文档放入知识库目录：

```bash
# 创建知识库目录
mkdir -p ~/.openclaw/memory/my-knowledge

# 放入文档
cp your-document.md ~/.openclaw/memory/my-knowledge/
```

### 2. 检查状态

```bash
# 查看记忆状态
openclaw memory status
```

### 3. 索引文档

```bash
# 索引文档
openclaw memory index

# 或强制重新索引
openclaw memory index --force
```

### 4. 测试效果

```bash
# 搜索测试
openclaw memory search <你的专业问题>
```

---

## 常用命令

| 命令 | 说明 |
|------|------|
| `openclaw memory status` | 查看状态 |
| `openclaw memory status --deep` | 详细状态检查 |
| `openclaw memory index` | 索引文档 |
| `openclaw memory index --force` | 强制重新索引 |
| `openclaw memory search <query>` | 搜索 |

---

## 训练技巧

### 1. 文档质量
- 使用结构化的 Markdown
- 避免重复内容
- 使用清晰的专业术语

### 2. 分块策略
- 每个文档聚焦一个主题
- 避免过长的文档
- 适当拆分大文件

### 3. 持续更新
- 定期更新知识库
- 删除过时内容
- 添加新内容

---

## 常见问题

### 索引很慢

- 检查文档大小
- 减少文档数量
- 等待索引完成

### 搜索不到结果

- 确认文档已索引
- 检查文档内容
- 使用更通用的关键词

### 回答不准确

- 检查文档内容质量
- 增加相关文档
- 优化文档结构

---

## 下一步

- [配置 API Key](../basic/config) - 确保配置正确
- [界面介绍](../basic/interface) - 了解更多命令
