# Docker 安装

使用 Docker 部署 OpenClaw，适合服务器环境。

---

## 前置要求

- Docker 20.x 或更高版本
- Docker Compose（可选）

---

## 快速开始

> ⚠️ 注意：OpenClaw 官方 Docker 镜像正在准备中，目前可通过以下方式部署：

### 方式一：使用 Docker Build（推荐）

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
```

---

## 使用 Docker Compose

```yaml
version: '3'
services:
  openclaw:
    image: openclaw/openclaw:latest
    ports:
      - "3000:3000"
    volumes:
      - ~/.openclaw:/root/.openclaw
```

---

## 下一步

- [配置 API Key](../tutorials/basic/config)
- [服务器部署](../deployment/server)