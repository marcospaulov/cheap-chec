import { Router } from 'express';
import { itensRentRouter } from './itensRent.routes';


const itensRentRoutes = Router();

itensRentRoutes.use('/itensRent', itensRentRouter);

export  {itensRentRoutes};