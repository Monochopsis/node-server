import { IPerson } from '../interfaces/IPerson';

export class Person {
	constructor(private name: IPerson) {
		this.name = name;
	}
	getName() {
		return this.name.firstName + '' + this.name.lastName;
	}
}
