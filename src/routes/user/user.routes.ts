import { Router } from 'express';
import { UserController } from '../../modules/user/user.controller';
import validateToken from '../../middlewares/validateToken';

const userRouter = Router();
const userController = new UserController();

userRouter.post('/create', userController.create);
userRouter.post('/login', userController.login);
userRouter.get('/',validateToken ,userController.findById);
userRouter.put('/',validateToken ,userController.update);
userRouter.delete('/',validateToken ,userController.delete);

export {userRouter};