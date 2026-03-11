# Docker 安装

使用 Docker 部署 OpenClaw，适合服务器环境。

---

## 前置要求

- Docker 20.x 或更高版本
- Docker Compose（可选）

---

## 快速开始

```bash
docker run -d \
  --name openclaw \
  -p 3000:3000 \
  -v ~/.openclaw:/root/.openclaw \
  openclaw/openclaw:latest
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