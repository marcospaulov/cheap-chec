import { Request, Response } from 'express';
import { HttpError } from '../../error/httperror';
import { Rent } from './rent.service';

export class RentController {
	
	public async create(req: Request, res: Response) {
		const data = req.body;
		const rent = new Rent();
		try {
			const result = await rent.create(data);
			return res.status(200).json(result);
		} catch (error) {
			if (error instanceof HttpError) {
				const data = { message: error.message };
				return res.status(error.status).json(data);
			}
		}
	}

	public async find(req: Request, res: Response) {
		const {user} = req.body;
		const rent = new Rent();
		try {
			const result = await rent.find(user.id);
			return res.status(200).json(result);
		} catch (error) {
			if (error instanceof HttpError) {
				const data = { message: error.message };
				return res.status(error.status).json(data);
			}
		}
	}

	public async delete(req: Request, res: Response) {
		const data = req.body;
		const rent = new Rent();
		try {
			const result = await rent.delete(data.id);
			
			return res.status(200).json(result);
		} catch (error) {
			if (error instanceof HttpError) {
				const data = { message: error.message };
				return res.status(error.status).json(data);
			}
		}
	}
}