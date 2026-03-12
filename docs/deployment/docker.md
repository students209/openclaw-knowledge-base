# Docker 部署

使用 Docker 部署 OpenClaw。

---

## 前提条件

- Docker 20.x+
- Docker Compose（可选）

---

## 快速开始

### 方式一：本地构建

```bash
# 克隆仓库
git clone https://github.com/openclaw/openclaw.git
cd openclaw

# 构建镜像
docker build -t openclaw/openclaw:latest .

# 运行容器
docker run -d \
  --name openclaw \
  -p 3000:3000 \
  -v ~/.openclaw:/root/.openclaw \
  openclaw/openclaw:latest
```

### 方式二：Docker Compose

```yaml
# docker-compose.yml
version: '3'
services:
  openclaw:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ~/.openclaw:/root/.openclaw
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

启动：
```bash
docker-compose up -d
```

---

## 常用命令

| 命令 | 说明 |
|------|------|
| `docker run -d ...` | 后台启动 |
| `docker ps` | 查看运行状态 |
| `docker logs -f openclaw` | 查看日志 |
| `docker stop openclaw` | 停止 |
| `docker restart openclaw` | 重启 |
| `docker exec -it openclaw sh` | 进入容器 |

---

## 数据持久化

将配置和数据保存到本地：

```bash
docker run -d \
  --name openclaw \
  -p 3000:3000 \
  -v /your/path/openclaw-data:/root/.openclaw \
  openclaw/openclaw:latest
```

---

## 生产环境建议

- 使用 volumes 持久化数据
- 设置健康检查
- 配置日志轮转
- 使用 watchtower 自动更新

```yaml
# docker-compose.prod.yml
version: '3'
services:
  openclaw:
    build: .
    restart: always
    volumes:
      - openclaw-data:/root/.openclaw
    healthcheck:
      test: ["CMD", "openclaw", "gateway", "health"]
      interval: 30s
      timeout: 10s
      retries: 3

volumes:
  openclaw-data:
```

---

## 下一步

- [服务器部署](./server) - 传统部署
- [域名配置](./domain) - 配置域名