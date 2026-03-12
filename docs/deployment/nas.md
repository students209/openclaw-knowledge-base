# 群晖 NAS 部署

在群晖 NAS 上部署 OpenClaw。

---

## 前提条件

- 群晖 DSM 7.0+
- 安装了 Docker 套件

---

## 部署步骤

### 1. 启用 SSH（可选）

在群晖控制面板 → 终端机 → 启用 SSH

### 2. 拉取镜像（本地构建）

由于没有官方镜像，需要本地构建：

```bash
# SSH 连接到群晖
ssh admin@your-nas-ip

# 克隆并构建
git clone https://github.com/openclaw/openclaw.git
cd openclaw
docker build -t openclaw .
```

### 3. 创建 Docker 容器

1. 打开 Docker 套件
2. 选择 "镜像" → "添加"
3. 选择 "从文件添加"（如果你已导出镜像）
   或使用命令行：

```bash
docker run -d \
  --name openclaw \
  -p 3000:3000 \
  -v /volume1/docker/openclaw:/root/.openclaw \
  openclaw
```

---

## 配置文件

| 配置 | 说明 |
|------|------|
| 容器名称 | openclaw |
| 端口映射 | 3000:3000 |
| 卷 | /volume1/docker/openclaw:/root/.openclaw |

---

## 启动和停止

```bash
# 启动
docker start openclaw

# 停止
docker stop openclaw

# 查看日志
docker logs -f openclaw
```

---

## 访问

访问 `http://your-nas-ip:3000`

---

## 下一步

- [域名配置](./domain) - 通过群晖控制面板配置域名
