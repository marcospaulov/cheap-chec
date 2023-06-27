import { Router } from 'express';
import { ProductController } from '../../modules/product/product.controller'; 
import validateToken from '../../middlewares/validateToken';

const productRouter = Router();
const productController = new ProductController();

productRouter.post('/create', validateToken, productController.create);
productRouter.get('/findMany', productController.findMany);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id',productController.delete);

export {productRouter};