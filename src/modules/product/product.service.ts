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
		
		const {user, ...dat} = data;

		dat.userId = user.id;
		
		console.log(dat);
		const product = await prisma.product.create({data:{
			...dat
		}});

		return product;
	}
	
	public async findMany(){
		const productExist = await prisma.product.findMany({});
		if(!productExist)throw new HttpError(404, 'Produto inesitente');
		return productExist;
	}
	
	public async update(data: IProduct){
		const productExist = await prisma.product.findUnique({
			where: {
				id: data.id
			}
		});
	
		const { user, ...dat } = data;

		if(!productExist)throw new HttpError(404, 'Produto inesitente');
		if(data.user.id != user.id) throw new HttpError(404, 'este produto não é deste usuário');


		return await prisma.product.update({
			data: {...dat},
			where:{
				id: data.id
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