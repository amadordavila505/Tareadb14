import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MaxLength } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MaxLength(20)
  username: string;

  @Column()
  password: string;
}

