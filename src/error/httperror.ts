export class HttpError extends Error {
	public status: number;
	public message: string;
	constructor ( status: number, mensage: string ){
		super();
		this.status = status;
		this.message = mensage;
	}

}