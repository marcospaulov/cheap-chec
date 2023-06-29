import { Router } from 'express';
import { rentRouter } from './rent.routes';

const rentRoutes = Router();

rentRoutes.use('/rent', rentRouter);

export {rentRoutes};