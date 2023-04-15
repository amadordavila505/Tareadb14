import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  address: string;

  @Column()
  promotions: boolean;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

