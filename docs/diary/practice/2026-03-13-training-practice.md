# 训练知识库实战

> 日期：2026-03-13 | 分类：训练

---

## 背景

想让自己开发的客服机器人了解我们产品的详细信息，于是进行了知识库训练。

---

## 准备工作

### 1. 整理文档

把产品相关的文档整理成 Markdown 格式：

```markdown
# 产品FAQ

## 产品功能
Q: 产品支持哪些平台？
A: 支持 Web、iOS、Android。

## 定价
Q: 多少钱？
A: 免费版和付费版...
```

### 2. 放入训练目录

```bash
mkdir -p ~/.openclaw/training
cp product-faq.md ~/.openclaw/training/
```

---

## 训练过程

### 执行训练

```bash
openclaw train
```

输出：
```
Training started...
Processing product-faq.md...
Indexing complete!
Training finished successfully.
```

### 验证训练

```bash
openclaw memory search "产品支持哪些平台"
```

结果正确返回了训练内容！

---

## 训练效果

| 问题 | 训练前 | 训练后 |
|------|--------|--------|
| 产品功能问题 | 回答不清楚 | 正确回答 |
| 价格问题 | 不知道 | 正确回答 |
| 平台问题 | 不知道 | 正确回答 |

---

## 注意事项

1. **文档质量** - 文档越详细，训练效果越好
2. **格式规范** - Markdown 格式效果最好
3. **定期更新** - 产品更新后要重新训练

---

## 相关教程

- [Day 6：训练 AI](../guide/day6)
- [训练指南](../tutorials/training/)