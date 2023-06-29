import { prisma } from '../../database/prisma.cliente.connect';
import { HttpError } from '../../error/httperror';
import { UserCreateDTO } from './dto/user.create.dto';
import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import { Token } from '../../auth/token';
import { IUserLogin } from './dto/user.login.dto';

export class User {
	public async create(data: UserCreateDTO){
		console.log(data);
		console.log('tamo aqui');
		const userAlreadyExists = await prisma.user.findUnique({
			where: {
				email: data.email
			}
		});

		if(userAlreadyExists){
			throw new HttpError(401, 'usuário já cadastrado');
		}
		
		data.password = await bcrypt.hash(data.password, 10);
		
		const user = await prisma.user.create({data});
		
		const {id} = user;
		
		return {token: Token.create({id})};
	}

	public async login(data: IUserLogin){
		const user = await prisma.user.findUnique({
			where: {
				email: data.email
			}
		});

		if(!user) throw new HttpError(404, 'usuário inesitente');

		const existe = await bcrypt.compare(data.password, user.password);

		if(!existe) throw new HttpError(401, 'senha invalida');

		const {id} = user;
		
		return {token: Token.create({id})};
	}

	public async findById(id: string){
		const user = await prisma.user.findUnique({
			where: {
				id
			}
		});

		if(!user) throw new HttpError(404, 'usuário inesitente');

		const {password:_, ...res} = user;

		return res;
	}

	public async update(id: string, data: Partial<UserCreateDTO>){
		const user = await prisma.user.findUnique({
			where: {
				id
			}
		});

		if(!user) throw new HttpError(404, 'usuário inesitente');

		const newUser = await prisma.user.update({
			data,
			where: {
				id
			}
		});
		
		return newUser;
	}

	public async delete(id: string){
		const user = await prisma.user.findUnique({
			where: {
				id
			}
		});

		if(!user) throw new HttpError(404, 'usuário inesitente');

		return await prisma.user.delete({
			where: {
				id
			}
		});
	}
}