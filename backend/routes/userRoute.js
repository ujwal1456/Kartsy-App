import express from 'express';
import {loginUser,registerUser,adminLogin} from '../controllers/userController.js';

const userRouter = express.Router();

{/** here if u go go register page it will be like /user/api/register that is there in server.js and logic is in userController.js */}
userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/admin',adminLogin);

export default userRouter;