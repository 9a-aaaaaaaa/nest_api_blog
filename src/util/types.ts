import { Exclude } from "class-transformer";
import { Posts } from "src/typeorm/entites/Post";
import { Profile } from "src/typeorm/entites/Profile";

export type CreaterUserDto  = {
    username: string;
    email: string;
    age: number;
}

export type CreateProfiler = {
    email: string;
    tel: string;
    bob: string;
}


export type CreatePost = {
    title: string;
    content: string;
}

export class UserEntity {
    id: number;
    username: string;

    age: number;
    createAt: Date;
  
    @Exclude()
    password: string;

    authStrategy: string;
    profile: Profile;
    posts: Posts[];
    constructor(partial: Partial<UserEntity>) {
       Object.assign(this, partial);
    }
  }