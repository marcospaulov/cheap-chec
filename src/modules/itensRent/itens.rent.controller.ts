import { Request, Response } from 'express';
import { HttpError } from '../../error/httperror';
import { ItensRent } from './intes.rent.service';

export class ItensRentController {

	public async findByUserId(req: Request, res: Response){
		const {id} = req.body.user;
		
		const inensRent = new ItensRent();
		try {
			const result = await inensRent.findByUserId(id);
			return res.status(200).json(result);
		} catch (error) {
			if (error instanceof HttpError) {
				const data = { message: error.message };
				return res.status(error.status).json(data);
			}
		}
	}
	
	public async findByProductId(req: Request, res: Response){
		const {productId} = req.body;
		const inensRent = new ItensRent();
		try {
			const result = await inensRent.findByProductId(productId);
			return res.status(200).json(result);
		} catch (error) {
			if (error instanceof HttpError) {
				const data = { message: error.message };
				return res.status(error.status).json(data);
			}
		}
	}

	public async findByRentId(req: Request, res: Response){
		const {rentId} = req.body;
		const inensRent = new ItensRent();
		try {
			const result = await inensRent.findByRentId(rentId);
			return res.status(200).json(result);
		} catch (error) {
			if (error instanceof HttpError) {
				const data = { message: error.message };
				return res.status(error.status).json(data);
			}
		}
	}

	public async delete(req: Request, res: Response){
		const {itenRentId} = req.body;
		const inensRent = new ItensRent();
		try {
			const result = await inensRent.delete(itenRentId);
			return res.status(200).json(result);
		} catch (error) {
			if (error instanceof HttpError) {
				const data = { message: error.message };
				return res.status(error.status).json(data);
			}
		}
	}
}