import express from 'express';
const router=express.Router();
import userController from '../controllers/userController'

//user rotes....>>>>
router.get('/getdata/:id',userController.getuserDataById);
router.get('/getdata',userController.getAlluserData);
router.get('/createData',userController.insertData);

export default router;