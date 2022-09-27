import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './services/user.service';
import { LoggerMiddleware } from './middleware/middleware.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entites/User';
import { Profile } from 'src/typeorm/entites/Profile';
import { Posts } from 'src/typeorm/entites/Post';

@Module({
  imports: [TypeOrmModule.forFeature([User,Profile,Posts])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
     consumer.apply(LoggerMiddleware).forRoutes(
       {
         path: "user",
         method: RequestMethod.GET
       }
     )
  }
}
