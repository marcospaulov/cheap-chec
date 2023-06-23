import jwt from 'jsonwebtoken';
import { IUserAuth } from './dto/userauthdto';
import  'dotenv/config';

export class Token{

	public static create(data: IUserAuth){
		return jwt.sign(data, process.env.JWT_ENCRIPT as unknown as string);
	}
	
	public static validate(token: string){
		const payLoad = jwt.verify(token, process.env.JWT_ENCRIPT as unknown as string);
		return payLoad;
	}

}