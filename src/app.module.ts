import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './typeorm/entites/User';
import { Profile } from './typeorm/entites/Profile';
import { Posts } from './typeorm/entites/Post';


const env = process.env;
const mongodbUrl=`mongodb://my-blog-mongo-1:27017/?authMechanism=DEFAULT&authSource=admin`;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "my-blog-mysql-1",
      port: 3306,
      username: env.MYSQL_USER,
      password:  env.MYSQL_ROOT_PASSWORD,
      database: env.MYSQL_DATABASE,
      entities: [User,Profile,Posts], // 这里引入就会自动创建数据库的，不需要autoLoadEntities也可以
      // synchronize: true,
      autoLoadEntities: true,
    }),
    MongooseModule.forRoot(mongodbUrl),
    UserModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}