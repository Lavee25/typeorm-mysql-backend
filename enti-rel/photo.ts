import {Entity,Column,PrimaryGeneratedColumn,ManyToOne,JoinColumn} from "typeorm";
import{Employee} from "./employee";
@Entity()
export class Photo{
  @PrimaryGeneratedColumn()
   public id: number;

  @Column()
   public name: string;

   @ManyToOne(()=>Employee,employee=>employee.photo)
   @JoinColumn({name:"emp-Id"})
    public employee: Photo ;

}


