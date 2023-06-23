import { NextFunction, Request, Response } from 'express';
import { Token } from '../auth/token';

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
	const {headers: {autorization}} = req;
	if(!autorization) res.status(401).json('token invalido');
	const user = Token.validate(autorization as string);
	req.body.user = user;
	next();
} 
