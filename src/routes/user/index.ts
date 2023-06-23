import { Router } from 'express';
import { userRouter } from './user.routes';

const userRoutes = Router();

userRoutes.use('/user', userRouter);

export {userRoutes};