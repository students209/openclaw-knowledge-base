# 安装常见问题

本页面收集 OpenClaw 安装过程中的常见问题及解决方案。

---

## 1. Node.js 版本不符合要求

**问题**：安装时报错提示 Node.js 版本过低

**错误信息**：
```
npm ERR! Unsupported node version. OpenClaw requires Node.js 22.12.0 or higher.
```

**解决方案**：
1. 检查当前 Node.js 版本：`node -v`
2. 升级 Node.js：
   - 使用 nvm：`nvm install 22 && nvm use 22`
   - 或访问 [nodejs.org](https://nodejs.org/) 下载最新 LTS 版本

---

## 2. npm 安装权限错误（EACCES）

**问题**：Linux/macOS 下安装时提示权限不足

**错误信息**：
```
npm ERR! EACCES: permission denied
```

**解决方案**：
```bash
# 方法1：使用 sudo（不推荐）
sudo npm install -g openclaw

# 方法2：配置 npm 目录
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
npm install -g openclaw
```

---

## 3. npm 安装速度慢

**问题**：安装过程非常缓慢或卡住

**解决方案**：
```bash
# 切换到国内镜像源
npm config set registry https://registry.npmmirror.com

# 然后重新安装
npm install -g openclaw
```

---

## 4. 安装完成后命令找不到

**问题**：安装成功但 `openclaw` 命令不可用

**解决方案**：
1. 检查 npm 全局 bin 目录是否在 PATH 中：
```bash
npm config get prefix
# 如果是 ~/.npm-global，需要添加到 PATH
```

2. 重新加载终端配置：
```bash
# macOS/Linux
source ~/.zshrc  # 或 source ~/.bashrc

# 或重新打开终端
```

3. 验证安装：
```bash
openclaw --version
```

---

## 5. 之前安装过旧版本

**问题**：之前安装过旧版本，导致冲突

**解决方案**：
```bash
# 卸载旧版本
npm uninstall -g openclaw

# 清除 npm 缓存
npm cache clean --force

# 重新安装
npm install -g openclaw
```

---

## 6. 网络问题导致安装失败

**问题**：安装过程中网络中断或超时

**解决方案**：
1. 检查网络连接
2. 使用国内镜像源（见问题3）
3. 设置代理（如果需要）
4. 增加超时时间：
```bash
npm install -g openclaw --fetch-timeout=120000
```

---

## 7. Windows 下 PowerShell 执行策略限制

**问题**：Windows 下无法执行安装脚本

**错误信息**：
```
npm ERR! sh: 1: rimraf: command not found
```

**解决方案**：
1. 以管理员身份运行 PowerShell
2. 执行：
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
3. 然后重新运行安装命令

---

## 8. Docker 端口占用

**问题**：Docker 容器启动失败，提示端口被占用

**错误信息**：
```
docker: Error response from daemon: port 3000 is already in use.
```

**解决方案**：
```bash
# 查看端口占用
lsof -i :3000

# 停止占用进程或使用其他端口
docker run -d -p 3001:3000 openclaw/openclaw:latest
```

---

## 9. 获取更多帮助

如果以上方法无法解决问题：

1. 搜索 [GitHub Issues](https://github.com/openclaw/openclaw/issues)
2. 加入 [Discord 社区](https://discord.com/invite/clawd) 寻求帮助
3. 提交新的 Issue 并附上错误日志

---

**收集说明**：以上问题来源于 GitHub Issues 和社区反馈，持续更新中。