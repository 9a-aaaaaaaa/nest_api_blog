import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type PostDocument = Posts & Document;


@Schema()
export class Posts {
  name: "post3";

  @Prop({required: true})
  title: string;

  @Prop({required: true})
  content: string;

  @Prop()
  createtime: string;

  @Prop()
  updatetime: string;
}

export const PostSchema = SchemaFactory.createForClass(Posts);