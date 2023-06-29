import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/user';
import { productRoutes } from './routes/product';
import { itensRentRoutes } from './routes/itensRent';
import { rentRoutes } from './routes/rent';
import { rentRouter } from './routes/rent/rent.routes';
const app = express();

const port = 3000;

app.use(express.json());

app.use(cors());

app.use(userRoutes);

app.use(productRoutes);

app.use(itensRentRoutes);

app.use(rentRouter);

app.use(rentRoutes);

app.listen( port, () => {
	console.clear();
	console.log('server is running 🚀🚀 on: http://localhost:' + port);
});