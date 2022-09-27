import { Controller, Get, Post, Req, Res,Param,Query, UsePipes, ValidationPipe, Body, ParseIntPipe, ParseBoolPipe, HttpException, HttpStatus, UseGuards, Patch, Delete, Put } from '@nestjs/common';
import { Request, Response } from 'express'; 

import { CreateUserDto } from '../dtos/user.dto';
import { UserService } from '../services/user.service';
import { AuthorGuard } from '../guard/author.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ValidateCreateUserPipe } from '../pipes/validate-create-user.pipe';
import { CreateProfileDto } from '../dtos/profile.dto';
import { GetPostsDto } from '../dtos/post.dto';
import { DeepPartial } from 'typeorm';
import { Profile } from 'src/typeorm/entites/Profile';

/***
 * createUser(@Req() request: Request, @Res() response: Response){
   CreateUserDto: 用类表示，是数据传输对象，在java等中非常的常见
   涉及到使用方和定义方 需要一个类来定义这个传输协议
   request.body 都是express 
   自定义pipe核心： ValidateCreateUserPipe 数据转换
 */



@ApiTags("User接口")
@Controller('user')
@UseGuards(AuthorGuard)
export class UserController {
    constructor(private userService: UserService){}
    @Get()
    @ApiOperation({
        summary:"获取用户列表",
        description:"这个是一个详细的描述，获取用户的详细描述"
    })
    getList(){
        return this.userService.getList();
    }

    @Patch("update/:id")
    updateUser(
        @Param('id', ParseIntPipe) id: number, 
        @Body() data: Partial<CreateUserDto>
    ){
        return this.userService.updateUser(id,data)
    }


    @Delete(":id")
    delUser( @Param('id', ParseIntPipe) id: number){
        return this.userService.delUser(id);
    }


    @Post("create")
    @ApiOperation({summary:"创建用户"})
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto){   
        return this.userService.create(userData);
    }

    @Get(":id")
    getUserId(@Param('id', ParseIntPipe) id: number){  // ParseBoolPipe
       return this.userService.getUserById(id);
    }


    @Put("profile/:id")
    createProfile(
        @Param('id', ParseIntPipe) id: number,
        @Body() userData: DeepPartial<Profile> //CreateProfileDto
    ){
       return this.userService.createProfile(id,userData);     
    }

    @Post("post/:id")
    createPost(
        @Param('id', ParseIntPipe) id: number,
        @Body() postdata: GetPostsDto
    ){
        return this.userService.createPost(id,postdata);
    }

}
