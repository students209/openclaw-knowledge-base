# Render 部署

使用 Render 平台免费部署 OpenClaw。

---

## 优势

- 免费（750小时/月）
- 自动部署
- HTTPS 免费

---

## 部署步骤

### 1. 准备项目

在 GitHub 上 fork OpenClaw 仓库

### 2. 创建 Render 账户

访问 [render.com](https://render.com) 注册

### 3. 创建 Web Service

1. 点击 "New +" → "Web Service"
2. 连接 GitHub 仓库
3. 选择 OpenClaw 仓库
4. 配置：

| 设置 | 值 |
|------|------|
| Name | openclaw |
| Region | Singapore 或 closest |
| Branch | main |
| Build Command | `npm install` |
| Start Command | `openclaw gateway start` |

### 4. 环境变量

在 "Environment" 中添加：

```
NODE_ENV=production
```

### 5. 部署

点击 "Create Web Service" 开始部署

---

## 免费额度

| 资源 | 额度 |
|------|------|
| CPU | 0.1 CPU |
| 内存 | 512MB |
| 磁盘 | 100MB |
| 流量 | 100GB/月 |
| 构建时间 | 500分钟/月 |

---

## 访问

部署完成后，访问 `https://your-service-name.onrender.com`

---

## 下一步

- [域名配置](./domain) - 绑定自定义域名
