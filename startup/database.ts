
import 'reflect-metadata';
import {DataSource} from 'typeorm';
import { Employee } from '../enti-rel/employee';
import { Photo } from '../enti-rel/photo';
import {UserData} from '../entity/UserData'
import { UserProfile } from '../entity/UserProfile';
import {Post} from '../entity/Post'
import {Content} from '../entity/Content'
import {Questions} from '../entity/Questions'


export const AppDataSource=new DataSource({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"",
    database:"typeorm-database",
    //entities:['enti-rel/*.ts'],
    entities:[UserData,Photo,Questions,Post,UserProfile,Content,Employee,Photo],
    synchronize: false,
    logging:false,
    migrationsTableName:"user_Pfile_migration_table",
    migrations: ["migrations/*.ts"]

})
export const entityManager = AppDataSource.manager;


const dbConnections=()=>{
    AppDataSource.initialize().then(()=>{
        console.log('app connected to database')
    })
}
export default dbConnections;
