import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { EditPostsDto, GetPostsDto } from 'src/user/dtos/post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Posts, PostDocument } from '../schema/post.schema';



@Injectable()
export class PostService {
    constructor(@InjectModel(Posts.name) private postModel: Model<PostDocument>) {}

    async getPost(){
        return this.postModel.find({});
    }

    async create(createCatDto: GetPostsDto): Promise<Posts> {
        const createdCat = new this.postModel(createCatDto);
        return createdCat.save();
    }

    async getDetail(id: string){
        return await this.postModel.find({_id:id});
    }

    async editPost(data: EditPostsDto){
        await this.postModel.findByIdAndUpdate({_id: data.id},{$set:data});
    }

    async delPost(id: string){
        const res = await this.postModel.findOneAndDelete({_id:id});
        return res;
    }
}
