# 域名配置

配置自定义域名和 HTTPS。

---

## 域名购买

从以下渠道购买域名：
- 阿里云
- 腾讯云
- GoDaddy
- Namecheap

---

## DNS 配置

### 添加 A 记录

在域名控制台添加：

| 记录类型 | 主机记录 | 记录值 |
|----------|----------|--------|
| A | @ | 你的服务器IP |
| A | www | 你的服务器IP |

### 验证生效

```bash
ping your-domain.com
```

---

## HTTPS 配置

### 方式1：Let's Encrypt（免费）

使用 Certbot 自动配置：

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com

# 自动续期
sudo certbot renew --dry-run
```

### 方式2：Nginx 配置

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # 重定向到 HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /etc/letsencrypt/live your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live your-domain.com/privkey.pem;

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

## 云平台 HTTPS

### Render

自动提供 HTTPS，无需配置

### Railway

在 Settings → Domains 添加自定义域名

### Vercel

自动提供 HTTPS

---

## 下一步

- 完成部署，开始使用
