import { prisma } from '../../database/prisma.cliente.connect';
import { HttpError } from '../../error/httperror';

export class ItensRent {

	public async findByUserId(id: string) {
		const itensRentExist = await prisma.itensRentalRent.findMany({
			where: {
				userId: id
			}
		});

		if (!itensRentExist) throw new HttpError(401, 'iten ainda não adicionado');

		return itensRentExist;
	}

	public async findByProductId(id: string) {
		const itensRentExist = await prisma.itensRentalRent.findMany({
			where: {
				productId: id
			}
		});

		if (!itensRentExist) throw new HttpError(401, 'iten ainda não adicionado');

		return itensRentExist;
	}

	public async findByRentId(id: string) {
		const itensRentExist = await prisma.itensRentalRent.findMany({
			where: {
				rentId: id
			}
		});

		if (!itensRentExist) throw new HttpError(401, 'iten ainda não adicionado');

		return itensRentExist;
	}

	public async delete(id: string) {

		const itensRentExist = await prisma.itensRentalRent.findMany({
			where: {
				id
			}
		});

		if (!itensRentExist) throw new HttpError(401, 'iten ainda não adicionado');

		return await prisma.itensRentalRent.delete({
			where: {
				id
			}
		});
	}

}