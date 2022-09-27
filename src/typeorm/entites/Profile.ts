import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name:"user_profile" })
export class Profile {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  email: string;
 
  @Column()
  tel: string;

  @Column()
  bob: string;
}