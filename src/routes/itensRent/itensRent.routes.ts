import { Router } from 'express';

import validateToken from '../../middlewares/validateToken';
import { ItensRentController } from '../../modules/itensRent/itens.rent.controller';

const itensRentRouter = Router();
const itensRentController = new ItensRentController();

itensRentRouter.get('/findByUser',validateToken, itensRentController.findByUserId);
itensRentRouter.get('/findByProduct',validateToken, itensRentController.findByProductId);
itensRentRouter.get('/findByRent',validateToken, itensRentController.findByRentId);
itensRentRouter.delete('/delete', itensRentController.delete);

export {itensRentRouter};