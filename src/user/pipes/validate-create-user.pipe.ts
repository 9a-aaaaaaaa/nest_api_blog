import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../dtos/user.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    
   try {
      const parseage = parseInt(value.age.toString());
      if(isNaN(parseage)) {
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
      }
      else {
        return {...value, age: parseage }
      }
   } catch (error) {
      throw new HttpException('Validate error!', HttpStatus.BAD_REQUEST);
   }
  }
}
