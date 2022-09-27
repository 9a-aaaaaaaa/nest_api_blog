import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity({ name:"user_posts" })
export class Posts {
  @PrimaryGeneratedColumn() 
  id: number;  

  @Column()
  title: string;
 
  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}