import { Router } from 'express';
import { ProductController } from '../../modules/product/product.controller'; 

const productRouter = Router();
const productController = new ProductController();

productRouter.post('/create', productController.create);
productRouter.get('/:id', productController.findMany);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id',productController.delete);

export {productRouter};