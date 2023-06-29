import { Request, Response } from 'express';
import { HttpError } from '../../error/httperror';
import { Product } from './product.service';

export class ProductController {
	
	public async create(req: Request, res: Response){
		const data = req.body;
		console.log(data);
		const product = new Product();
		try{
			const result = await product.create(data);
			return res.status(201).json(result);
		}catch(error){
			if(error instanceof HttpError){
				const data = {message: error.message};
				return res.status(error.status).json(data);
			}	
		}
	}

	public async findMany(req: Request, res: Response){
		const product = new Product();
		try{
			const result = await product.findMany();
			return res.status(201).json(result);
		}catch(error){
			if(error instanceof HttpError){
				const data = {message: error.message};
				return res.status(error.status).json(data);
			}	
		}
	}

	public async findByUser(req: Request, res: Response){
		const {user} = req.body;
		console.log(user);
		const product = new Product();
		try{
			const result = await product.findByIdUser(user.id);
			return res.status(201).json(result);
		}catch(error){
			if(error instanceof HttpError){
				const data = {message: error.message};
				return res.status(error.status).json(data);
			}	
		}
	}

	public async update(req: Request, res: Response){
		const data = req.body;
		const product = new Product();
		try{
			const result = await product.update(data);
			return res.status(200).json(result);
		}catch(error){
			if(error instanceof HttpError){
				const data = {message: error.message};
				return res.status(error.status).json(data);
			}	
		}
	}
	
	public async delete(req: Request, res: Response){
		const {id, user} = req.body;
		const product = new Product();
		try{
			const result = await product.delete(id, user);
			return res.status(204).json(result);
		}catch(error){
			if(error instanceof HttpError){
				const data = {message: error.message};
				return res.status(error.status).json(data);
			}	
		}
	}
}