import { IProduct } from '../../product/dto/product.dto';
import { userProductDTO } from '../../user/dto/user.product.dto';

export interface RentDTO{
	'id': string;
	'insuranceValue': number;
	'userId': string;
	'createdAT': string;
	'updateAT': string;   
	'productList': IProduct[];
	'user': userProductDTO; 
}