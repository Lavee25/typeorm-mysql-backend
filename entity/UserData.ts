import {
Entity,
Column,
OneToOne,
JoinColumn,
CreateDateColumn,
PrimaryGeneratedColumn} from "typeorm";
import {UserProfile} from "./UserProfile"
import { Timestamp } from "mongodb";
@Entity()
export class UserData{
  @PrimaryGeneratedColumn()
   public id: number;

  @Column()
   public name: string;

  @Column()
   public email:string;

  @Column()
   public Password:string;
   
  @Column()
   public age:number;

  @Column()
   public userToken:string;

   @OneToOne(()=>UserProfile,{cascade:true,eager:true})
   @JoinColumn({name:'profile_id'})
    public profile:UserProfile ;

   @CreateDateColumn({nullable:true, type: 'timestamp'})
    public created_at:Timestamp;
  }

