import { userProductDTO } from '../../user/dto/user.product.dto';

export interface IProduct{
	id: string;
	name: string;
	productType: string;
	productDescription: string;
	price: string;
	measure: string;
	brand: string;
	tissueType: string;
	user: userProductDTO
	userId: string;
}