//common content share entity we use this where we want common content
import{Column,PrimaryGeneratedColumn,Entity, TableInheritance} from 'typeorm'

@Entity()
@TableInheritance({column:{type:'varchar',name:'type'}})
export  abstract class Content{
    @PrimaryGeneratedColumn()
        public id: number;
        
        @Column()
        public name:string;

        @Column()
        public description:string

        @Column()
        public view: string;
    
    
    }
    
