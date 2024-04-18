import { Timestamp } from "mongodb";
import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn} from "typeorm";

@Entity()
export class UserProfile{
  @PrimaryGeneratedColumn()
   public id: number;

  @Column()
   public gender: string;

  @Column()
  public photo :string;
  
  @CreateDateColumn({nullable:true, type: 'timestamp'})
  public created_at:any;
}