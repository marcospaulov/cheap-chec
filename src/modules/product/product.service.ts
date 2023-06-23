import { prisma } from '../../database/prisma.cliente.connect';
import { HttpError } from '../../error/httperror';
import { IProduct } from './dto/product.dto';

export class Product {
	
	public async create(data: IProduct){
		const productExist = await prisma.product.findUnique({
			where: {
				name: data.name
			}
		});

		if(productExist) throw new HttpError(401, 'produto já cadastrado');

		const product = await prisma.product.create({data});

		return product;
	}
	
	public async findMany(){
		const productExist = await prisma.product.findMany({});
		if(!productExist)throw new HttpError(404, 'Produto inesitente');
		return productExist;
	}
	
	public async update(id: string, data: Partial<IProduct>){
		const productExist = await prisma.product.findUnique({
			where: {
				name: data.name
			}
		});
		if(!productExist)throw new HttpError(404, 'Produto inesitente');
		return await prisma.product.update({
			data,
			where:{
				id
			}
		});
	}
	
	public async delete(id: string){
		const productExist = await prisma.product.findUnique({
			where: {
				id
			}
		});

		if(!productExist) throw new HttpError(404, 'Produto inesitente');

		return await prisma.product.delete({
			where: {
				id
			}
		});
	}
	
}