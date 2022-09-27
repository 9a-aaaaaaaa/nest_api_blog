import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { EditPostsDto, GetPostsDto } from 'src/user/dtos/post.dto';
import { PostService } from '../services/post.service';


@ApiTags("帖子接口")
@Controller('post')
export class PostController {
    constructor(private postService: PostService){}

    @Get()
    getPost(){
        return this.postService.getPost();
    }


    @Post()
    @ApiOperation({summary:"发布帖子"})
    setPost(@Body() data: GetPostsDto){
        return this.postService.create(data);
    }

    @Get(":id")
    @ApiOperation({summary:"帖子详情"})
    getDetail (@Param('id') id: string){
        return this.postService.getDetail(id);
    }


    @Put(":id")
    @ApiOperation({summary:"编辑博客"})
    editPost (@Body() userBody: EditPostsDto){
        return this.postService.editPost(userBody);
    }


    @Delete(":id")
    delPost(@Param('id') id: string){
        return this.postService.delPost(id);
    }
}
