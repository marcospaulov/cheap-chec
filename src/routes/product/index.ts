import { Router } from 'express';
import { productRouter } from './product.routes'; 

const productRoutes = Router();

productRoutes.use('/product', productRouter);

export {productRoutes};