import {Request,Response} from 'express'
import {  UserData } from "../entity/UserData";
import {entityManager} from '../startup/database'
import { messages } from '../common/apiResponse';
import { statusCode } from '../common/statusCode';
import PasswordHash from 'password-hash';
import jwt from 'jsonwebtoken'
const userSecreteKey:any =process.env.USER_JWT_SECRETE_KEY;


class AuthController{
    constructor(){}


    userSignup=async(req:Request,res:Response)=>{
             
            try{
              const{name,email,password,confirmPassword,age,created_at}=req.body;
              let user=await entityManager.getRepository(UserData);
              let userExist=await user.findOne({where:{email:email}});
              if(userExist) return res.status(statusCode.BED_REQUEST).send({message:messages.USER_ALREADY_EXISTS});
              if(password!=confirmPassword)return res.status(statusCode.BED_REQUEST).send({message:messages.PASSWORD_NOT_MATCH})
              const hashedPassword=PasswordHash.generate(password);
              const userData=await user.save({
                ...req.body,   
                password:hashedPassword,

                })
               const token=await jwt.sign({id:userData.id},userSecreteKey)
               userData.confirmPassword=null
                return res.status(statusCode.OK).send({message:messages.USER_SIGNUP_SUCCESSFULLY,data:{user:userData,userToken:token}}) //userToken:token

            }
            catch(error:any){
                return res.status(statusCode.BED_REQUEST).send({messages:messages.SOMETHING_WENT_WRONG , ERROR:error.message})
            }

    }
    userLogin=async(req:Request,res:Response)=>{
       try{
          const{email,password}=req.body;
           let user=await entityManager.getRepository(UserData);
           let userExist=await user.findOne({where:{email:email}});
           if(!userExist) return  res.status(statusCode.BED_REQUEST).send({message:messages.USER_NOT_EXISTS});
           const userData= await user.save({
           email,
           password
           })
           const token=await jwt.sign({id:userData.id},userSecreteKey)
           return res.status(statusCode.OK).send({message:messages.USER_LOGIN_SUCCESSFULLY,data:{user:userData,userToken:token}})
        }
        catch(error:any){
            return res.status(statusCode.BED_REQUEST).send({messages:messages.SOMETHING_WENT_WRONG , ERROR:error.message})  
        }
    }





}
const authController =new AuthController;
export default authController;



