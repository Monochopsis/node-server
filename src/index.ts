import express = require('express');
import bodyParser = require('body-parser');
import { Routes } from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = new Routes(app);
routes.setRoutes();

const port = 3333;
const server = app.listen(port, () => {
	console.log('Listening at PORT', port);
});
