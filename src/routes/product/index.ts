import { Router } from 'express';
import { productRouter } from './product.routes'; 

const productRoutes = Router();

productRoutes.use('/user', productRouter);

export {productRoutes};