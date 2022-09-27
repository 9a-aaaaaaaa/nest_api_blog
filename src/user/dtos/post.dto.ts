import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString} from 'class-validator';

export class GetPostsDto{
    @IsString()
    @ApiProperty({title:"内容",name:"content",description:"帖子的内容",example:"i from test content"})
    content: string;


    @IsString()
    @IsNotEmpty({ message:"请填写标题" })
    @ApiProperty({title:"title",name:"title",description:"用户title", example:"hi,world!"})
    title: string;
}


export class EditPostsDto extends GetPostsDto {
    @IsString()
    @ApiProperty({title:"id",name:"id",description:"帖子的id",})
    id: string;
}