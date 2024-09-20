# 使用官方 Node.js 镜像作为基础镜像

FROM node:20

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖
RUN npm ci

# 复制所有文件到工作目录
COPY . .

# 构建项目
RUN npm run build

# 設置環境變數
#ENV NODE_ENV=production

# 暴露對應端口
EXPOSE 3000

RUN chmod +x start.sh

# 啟動 Node.js 伺服器
CMD [ "./start.sh" ]