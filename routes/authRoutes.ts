import express from 'express';
const router=express.Router();
import authController from '../controllers/authController';

//User Auth....>>>

router.post('/userSignup',authController.userSignup);
router.post('/userlogin',authController.userLogin)



export default router;