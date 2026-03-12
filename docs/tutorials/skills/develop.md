# 技能开发

开发你自己的技能。

---

## 技能结构

```
my-skill/
├── SKILL.md          # 技能说明文档
├── _meta.json        # 元信息配置
└── scripts/          # 脚本目录（可选）
```

### SKILL.md 示例

```markdown
# 我的技能名称

技能描述：简短的技能功能说明

## 使用场景

- 场景1：xxx
- 场景2：xxx

## 使用方法

使用此技能时，激活词为 "我的技能"

任务描述...
```

### _meta.json 示例

```json
{
  "name": "my-skill",
  "version": "1.0.0",
  "description": "技能描述",
  "activation": "当用户提到xxx时激活",
  "triggers": ["关键词1", "关键词2"]
}
```

---

## 快速创建

使用技能创建工具：

```bash
# 使用 skill-creator 技能
openclaw skills install skill-creator
```

---

## 参考文档

- [官方技能开发文档](https://docs.openclaw.ai/skills)
- [ClawHub](https://clawhub.com) - 查找更多技能示例
- 查看已安装技能的源码进行学习

---

## 发布技能

1. 整理技能代码
2. 测试功能
3. 发布到 ClawHub：
```bash
npx clawhub publish
```
