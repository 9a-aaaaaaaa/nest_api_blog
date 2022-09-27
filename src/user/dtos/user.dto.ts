import {ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsNumber, IsByteLength } from 'class-validator';


export class CreateUserDto{
  
  @ApiProperty({title:"aa",name:"username",description:"用户名称",example:"anikin"})
  @IsString()
  username: string;

  @ApiProperty({title:"bb",name:"email",description:"用户邮箱", example:"test@qq.com"})
  @IsEmail()
  email: string;

  @ApiProperty({title:"age",name:"age",description:"年龄", example: 12})
  @IsNotEmpty()
  //@IsNumber()
  age: number;

  @ApiProperty({title:"password",name:"password",description:"密码", example: 123456})
  password: string;
}

