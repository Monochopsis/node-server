import { Person } from './helper';
const log = (message: string) => {
	console.log(message);
};
const person1 = new Person({ firstName: 'Christine', lastName: 'Parayno' });
log(person1.getName());
