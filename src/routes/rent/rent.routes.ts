import { Router } from 'express';

import validateToken from '../../middlewares/validateToken';

import { RentController } from '../../modules/rent/rent.controller';


const rentRouter = Router();
const rentController = new RentController();

rentRouter.post('/create',validateToken, rentController.create);
rentRouter.get('/find',validateToken, rentController.find);
rentRouter.delete('/delete', rentController.delete);

export {rentRouter};