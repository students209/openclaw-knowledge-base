# 服务器部署

在云服务器上部署 OpenClaw。

---

## 服务器要求

| 配置 | 最低要求 | 推荐配置 |
|------|----------|----------|
| CPU | 2 核 | 2-4 核 |
| 内存 | 2GB | 4GB+ |
| 磁盘 | 20GB | 50GB+ |
| 系统 | Ubuntu 20.04+ / Debian 11+ | Ubuntu 22.04 |

---

## 安装步骤

### 1. 连接服务器

```bash
ssh user@your-server-ip
```

### 2. 安装 Node.js

```bash
# 安装 Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

### 3. 安装 Git（如果未安装）

```bash
sudo apt update
sudo apt install -y git
```

### 4. 克隆项目

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
```

### 5. 安装依赖

```bash
npm install
```

### 6. 配置

```bash
openclaw configure
```

### 7. 启动服务

```bash
# 以后台方式启动
openclaw gateway start

# 或使用 systemd 管理
sudo openclaw gateway install
sudo openclaw gateway start
```

---

## 使用 systemd 管理

创建服务文件：

```bash
sudo tee /etc/systemd/system/openclaw.service > /dev/null <<EOF
[Unit]
Description=OpenClaw Gateway
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/openclaw
ExecStart=/usr/bin/openclaw gateway run
Restart=always

[Install]
WantedBy=multi-user.target
EOF

# 启用服务
sudo systemctl daemon-reload
sudo systemctl enable openclaw
sudo systemctl start openclaw
```

---

## 配置 Nginx 反向代理（可选）

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
    }
}
```

---

## 下一步

- [域名配置](./domain) - 配置域名和 HTTPS
