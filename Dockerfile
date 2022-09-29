FROM node:latest
WORKDIR /app  
# 说这个可以利用缓存的docker层
COPY ["package.json", "package-lock.json*","tsconfig.json","tsconfig.build.json","./"]
RUN npm install --registry https://registry.npm.taobao.org
COPY . .
EXPOSE 5000
RUN npm run build
CMD [ "node", "--tls-min-v1.0","./dist/main.js" ]