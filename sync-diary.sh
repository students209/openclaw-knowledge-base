#!/bin/bash
# 同步 OpenClaw 日记到知识库

SOURCE_DIR="/Users/alpha/Documents/learn/openclaw_project/teamwork_html/docs/openclaw-diary"
TARGET_DIR="/Users/alpha/Documents/learn/openclaw_project/openclaw-knowledge-base/docs/diary/usage"
KB_DIR="/Users/alpha/Documents/learn/openclaw_project/openclaw-knowledge-base"

echo "=== 同步 OpenClaw 日记 ==="
echo "源目录: $SOURCE_DIR"
echo "目标目录: $TARGET_DIR"

# 同步所有 day*.md 文件
rsync -av --include="day*.md" --exclude="*" "$SOURCE_DIR/" "$TARGET_DIR/"

# 检查是否有更新
cd "$KB_DIR"
if git diff --quiet docs/diary/usage/; then
    echo "没有更新"
else
    echo "检测到更新，提交并推送..."
    git add docs/diary/usage/
    git commit -m "docs: 同步 OpenClaw 使用日记 - $(date '+%Y-%m-%d')"
    git push origin master
    echo "✓ 同步完成"
fi