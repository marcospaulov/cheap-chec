import { NextFunction, Request, Response } from 'express';
import { Token } from '../auth/token';

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
	const {headers: {authorization}} = req;
	if(!authorization) res.status(401).json('token invalido');
	console.log(authorization);
	const user = Token.validate(authorization as string);
	console.log(user);
	req.body.user = user;
	next();
} 
