
## DB

本地使用方式

```
docker push qiuyanlong/nest_blog_api:tagname
```

下面是本地开发参考代码

启动数据库相关的

```shell

## 本地调试直接启动和打包
docker compose up --build -d

## 查看日志
docker logs my-blog-web-1  --tail  100 -f

## 查看接口
http://localhost:5000/api-docs/


## github actions build
# on: push

```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. generate blog api

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

开启 http://localhost:5000/api-docs/#/ 查看接口列表



Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- 9a_aaaaaa - [9a-aaaaaaaa]([https://kamilmysliwiec.com](https://github.com/9a-aaaaaaaa/nest_api_blog))


## License

Nest is [MIT licensed](LICENSE).
