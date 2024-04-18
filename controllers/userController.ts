import{Request,Response} from 'express';
import { entityManager } from '../startup/database';
import {  UserData} from '../entity/UserData';
import { statusCode } from '../common/statusCode';
import { messages } from '../common/apiResponse';
import { UserProfile } from '../entity/UserProfile';

//import { OpenAPI } from 'routing-controllers-openapi';


class UserController{
    constructor(){}

  getuserDataById=async(req:Request,res:Response)=>{
  try{
    const userId:any=req.params.id;
    const user=await entityManager.getRepository(UserData);
    const userData=await user.findOne({where:{id:userId}});
    return res.status(statusCode.OK).send({message:messages.USER_DETAILS,data:userData})
  }catch(error:any){

  res.status(statusCode.BED_REQUEST).send({message:messages.SOMETHING_WENT_WRONG,Error:error.message})
   }

  }
   getAlluserData=async(req:Request,res:Response)=>{
    try{
       const user=await entityManager.getRepository(UserData);
       const userData=await user.find();
       return res.status(statusCode.OK).send({message:messages.ALL_USERS_DATA,data:userData});
    }
    catch(error:any){
        return res.status(statusCode.BED_REQUEST).send({message:messages.SOMETHING_WENT_WRONG , ERROR:error.message})
    }
}
 
 insertData=async(req:Request,res:Response)=>{

     const profile=await entityManager.getRepository(UserProfile);
        const profiledata= await profile.save({
         gender:"male",         //here we use dummy data  that we are recive from req.body(client) 
         photo:"vishall.jpg",
         created_at: Date.now()
                 
        })
        console.log("datanow",Date.now());
        res.json({"userProfile":profiledata})

      //  const user=await entityManager.getRepository(User);
      //  const Data= await user.save({
      //  name:"rajesh",
      //  email:"rajesh@gaml.com",   //here we use dummy data that we are recive from req.body(user)
      //  age:23,
       //profile:profiledata
  // })
  // res.json({"userdata":Data});

}

}
const userController=new UserController;
export default userController;