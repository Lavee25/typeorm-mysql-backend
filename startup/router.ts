import express,{Request,Response} from 'express'
import authRoutes from '../routes/authRoutes';
import userRoutes from '../routes/userRoutes';


module.exports=((app:any)=>{
app.get('/',(res:Response)=>{res.status(200).send({message:"welcome to app"})});  
app.use(express.json());
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/user',userRoutes)

})

