import { Request, Response } from 'express';
import { User } from './user.service';
import { HttpError } from '../../error/httperror';

export class UserController{
	public async create(req: Request, res: Response){
		const data = req.body;
		const createUser = new User();
		try{
			const result = await createUser.create(data);
			return res.status(201).json(result);
		}catch(error){
			if(error instanceof HttpError){
				const data = {message: error.message};
				return res.status(error.status).json(data);
			}	
		}
	}
	public async login(req: Request, res: Response){
		const data = req.body;
		console.log(data);
		const createUser = new User();
		try{
			const result = await createUser.login(data);
			return res.status(200).json(result);
		}catch(error){
			if(error instanceof HttpError){
				const data = {message: error.message};
				return res.status(error.status).json(data);
			}	
		}
	}

	public async findById(req: Request, res: Response){
		const {id} = req.body.user;
		const createUser = new User();
		try{
			const result = await createUser.findById(id);
			return res.status(200).json(result);
		}catch(error){
			if(error instanceof HttpError){
				const data = {message: error.message};
				return res.status(error.status).json(data);
			}	
		}
	}

	public async update(req: Request, res: Response){
		const {user: {id}, ...data} = req.body;
		const createUser = new User();
		try{
			const result = await createUser.update(id, data);
			return res.status(200).json(result);
		}catch(error){
			if(error instanceof HttpError){
				const data = {message: error.message};
				return res.status(error.status).json(data);
			}	
		}
	}

	public async delete(req: Request, res: Response){
		const {id} = req.body.user;
		const createUser = new User();
		try{
			const result = await createUser.delete(id);
			return res.status(204).json(result);
		}catch(error){
			if(error instanceof HttpError){
				const data = {message: error.message};
				return res.status(error.status).json(data);
			}	
		}
	}
}