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


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'userlist',
      entities: [User,Profile,Posts], // 这里引入就会自动创建数据库的，不需要autoLoadEntities也可以
      synchronize: true,
      // autoLoadEntities: true,
    }),
    MongooseModule.forRoot('mongodb://qiuyanlong:123456@localhost:27017/?authMechanism=DEFAULT&authSource=admin'),
    UserModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}