import express, { Router, Request, Response } from 'express';
import { CustomerController } from '../controller/customerController';
const router = Router();
const customerController = new CustomerController();

router.get('', customerController.getCustomer());
router.post('', customerController.addCustomer());
router.patch('', customerController.updateCustomer());

export const customer = router;
