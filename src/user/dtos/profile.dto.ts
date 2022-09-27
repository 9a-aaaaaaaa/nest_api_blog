import { ApiProperty } from '@nestjs/swagger';
import { IsString,IsEmail, IsNotEmpty, IsNumber, IsByteLength } from 'class-validator';

export class CreateProfileDto {
    @ApiProperty({title:"email",name:"email",description:"email",example:"anikin@qq.com"})
    @IsEmail()
    email: string;
  
    @ApiProperty({title:"tel",name:"tel",description:"电话", example:"12342343242"})
    @IsString()
    tel: string;
  
    @ApiProperty({title:"bob",name:"bob",description:"bob", example: '1991-11-1'})
    @IsNotEmpty()
    @IsString()
    bob: string;
  }