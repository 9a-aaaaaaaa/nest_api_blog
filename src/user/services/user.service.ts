import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Posts } from 'src/typeorm/entites/Post';
import { Profile } from 'src/typeorm/entites/Profile';
import { User } from 'src/typeorm/entites/User';
import { CreaterUserDto, UserEntity } from 'src/util/types';
import { DeepPartial, Repository } from 'typeorm';
import { GetPostsDto } from '../dtos/post.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Posts) private postRepository: Repository<Posts>,
  ) {}

  async getList() {
    // 这么写不需要 controller 的 @UseInterceptors 适合单个的
    // 也不需要 UserEntity的constructor
    // 适合批量的过滤
    // const res = await this.usersRepository.find({ relations: ['profile','posts'] });
    // const serialize = res.map(i=>plainToInstance(UserEntity,i));
    // return serialize;


    // 第二种写法 new UserEntity(user);也是官方比较推荐的写法
    const res = await this.usersRepository.find({ relations: ['profile','posts'] });
    return res.map(i=>new UserEntity(i));
  }

  async updateUser(id: number, data: Partial<CreaterUserDto>) {
    return await this.usersRepository.update({ id }, data);
  }

  async delUser(id: number) {
    return await this.usersRepository.delete(id);
  }

  async create(dataInfo: CreaterUserDto) {
    const createData = {
      ...dataInfo,
      createAt: new Date(),
    };
    return await this.usersRepository.save(createData);
  }

  async getUserById(id: number) {
    return await this.usersRepository.findOneBy({ id });
  }

  async createProfile(id: number, data: DeepPartial<Profile>) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user)
      throw new HttpException('User not found~!', HttpStatus.BAD_REQUEST);
    const saveFile = await this.profileRepository.save(data);
    user.profile = saveFile;
    return await this.usersRepository.save(user);
  }

  async createPost(id: number, data:GetPostsDto){
    const user = await this.usersRepository.findOneBy({ id });
    if (!user)
      throw new HttpException('User not found~!', HttpStatus.BAD_REQUEST);
    return await this.postRepository.save({...data, user});
  }
}
