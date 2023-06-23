import express from 'express';
import { userRoutes } from './routes/user';
import { userRouter } from './routes/user/user.routes'; 
import { productRoutes } from './routes/product';
import cors from 'cors';
const app = express();

app.use(express.json());

app.use(cors());

app.use(userRoutes);

app.use(userRouter);

app.use(productRoutes);

app.listen( 3333, () => {
	console.log('server is running');
});