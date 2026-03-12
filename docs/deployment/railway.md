# Railway 部署

使用 Railway 平台免费部署 OpenClaw。

---

## 优势

- 免费（$5/月额度）
- 按需付费
- 自动部署
- 全球CDN

---

## 部署步骤

### 1. 准备项目

在 GitHub 上 fork OpenClaw 仓库

### 2. 创建 Railway 账户

访问 [railway.app](https://railway.app) 注册，使用 GitHub 登录

### 3. 创建新项目

1. 点击 "New Project"
2. 选择 "Deploy from GitHub repo"
3. 选择 OpenClaw 仓库

### 4. 配置环境变量

添加以下变量：

| 变量 | 值 |
|------|-----|
| NODE_ENV | production |

### 5. 配置构建

在 "Settings" 中设置：

| 设置 | 值 |
|------|------|
| Build Command | `npm install` |
| Start Command | `openclaw gateway start` |

### 6. 部署

点击 "Deploy" 开始部署

---

## 免费额度

| 资源 | 额度 |
|------|------|
| 内存 | 512MB |
| CPU | 0.5 CPU |
| 磁盘 | 1GB |
| 流量 | 1GB/月 |

超出免费额度后会自动收费（约 $5/月）

---

## 访问

部署完成后，访问 `https://your-project-name.up.railway.app`

---

## 下一步

- [域名配置](./domain) - 绑定自定义域名
