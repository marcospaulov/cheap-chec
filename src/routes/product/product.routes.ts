import { Router } from 'express';
import { ProductController } from '../../modules/product/product.controller'; 
import validateToken from '../../middlewares/validateToken';

const productRouter = Router();
const productController = new ProductController();

productRouter.post('/create', validateToken, productController.create);
productRouter.get('/findMany', productController.findMany);
productRouter.get('/findByUserId',validateToken, productController.findByUser);
productRouter.put('/update', validateToken, productController.update);
productRouter.delete('/delete',productController.delete);

export {productRouter};