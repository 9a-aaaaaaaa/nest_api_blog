import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './controller/post.controller';
import { Posts, PostSchema } from './schema/post.schema';
import { PostService } from './services/post.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: Posts.name, schema: PostSchema }])],
  controllers:[PostController],
  providers: [PostService]
})
export class PostModule {}
