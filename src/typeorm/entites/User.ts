import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Posts } from './Post';
import { Profile } from "./Profile";


@Entity({ name:"users" })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ unique: true })
  username: string;
 
  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  createAt: Date;

  @Column({ nullable: true })
  authStrategy: string;

  @OneToOne(()=>Profile)
  @JoinColumn()
  profile: Profile;


  @OneToMany(() => Posts, (post) => post.user)
  posts: Posts[];
}