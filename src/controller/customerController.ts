import express, { Router, Request, Response } from 'express';
const router = Router();

export class CustomerController {
	getCustomer() {
		return (req: Request, res: Response) => {
			res.json({ message: 'Hello World' });
		};
	}

	addCustomer() {
		return (req: Request, res: Response) => {
			const data = req.body;
			res.json(data);
		};
	}

	updateCustomer() {
		return (req: Request, res: Response) => {
			const data = req.body;
			res.json(data);
		};
	}
}
