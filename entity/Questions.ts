import {ChildEntity,Column} from "typeorm";
import {Content} from './Content';
@ChildEntity ()
export class Questions extends Content{

    @Column()
   public questionCount: number;

 }