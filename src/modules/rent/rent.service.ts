import { prisma } from '../../database/prisma.cliente.connect';
import { HttpError } from '../../error/httperror';

import { RentDTO } from './dto/rent.dto';

export class Rent {

	public async create(data: RentDTO) {

		const { user, productList } = data;

		console.log(productList);
		const listProductsValue = productList.map((product) => product.price);
		console.log('rent');
		const productsValue= listProductsValue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

		const insuranceValue = (5 / 100) * productsValue; 
		const totalValue = productsValue + insuranceValue;
		
		const rent = await prisma.rent.create({
			data: {
				productsValue,
				insuranceValue,
				totalValue,
				userId: user.id
			}
		});

		productList.forEach(async ({id}) => {
			await prisma.itensRentalRent.create({
				data: {
					rentId: rent.id,
					productId: id,
					userId: user.id
				}
			});
		});

		return rent;
	}

	public async find(id: string) {
		const rentExist = await prisma.rent.findMany({
			where: {
				userId: id
			}
		});

		if (!rentExist) throw new HttpError(401, 'ainda não existe aluguel');

		return rentExist;
	}

	public async delete(id: string) {

		const rentExist = await prisma.rent.findUnique({
			where: {
				id
			}
		});
		if (!rentExist) throw new HttpError(401, 'ainda não possui aluguel');

		return await prisma.rent.delete({
			where:{
				id: rentExist.id
			}
		});
	}
}
