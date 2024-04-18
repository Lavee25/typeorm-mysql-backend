import {Entity,Column,PrimaryGeneratedColumn,OneToMany,JoinColumn} from "typeorm";
import{Photo} from "./photo";
@Entity()
export class Employee{
  @PrimaryGeneratedColumn()
   public id: number;

  @Column()
   public name: string;

  @OneToMany(()=>Photo,Photo=>Photo.employee)
  public photo:Employee;
}