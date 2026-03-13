# 案例：翻译助手

> ⭐ 难度：入门 | ⏱ 预计时间：15分钟

---

## 效果演示

多语言翻译：
- 中英互译
- 多语言支持
- 术语统一

---

## 实现思路

直接调用 AI 的翻译能力，比传统翻译更智能。

---

## 核心配置

```json
{
  "name": "translator",
  "systemPrompt": "你是一个专业的翻译助手。\n\n支持语言：\n- 中文 ↔ 英文\n- 中文 ↔ 日文\n- 中文 ↔ 韩文\n- 英文 ↔ 日文\n\n功能：\n- 文本翻译\n- 保留专业术语\n- 符合目标语言习惯"
}
```

---

## 使用方式

### 简单翻译

```
用户：翻译：Artificial Intelligence is changing the world
AI：人工智能正在改变世界
```

### 专业翻译

```
用户：翻译这段技术文档，保留专业术语：
Machine Learning is a subset of Artificial Intelligence.
AI：机器学习是人工智能的一个分支。
```

---

## 进阶：文档翻译

配合 PDF 处理技能，实现整篇文档翻译！

---

> 📝 你也做出了不错的案例？[联系我们投稿](/contact)！