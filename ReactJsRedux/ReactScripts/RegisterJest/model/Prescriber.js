'user strict';

import Immutable from 'immutable'

declare class Prescriber {
	id: string;
	name: string;
	userType: string;
	email: string;
	license: string;

	constructor(data: {
		id: string;
		name: string;
		userType: string;
		email: string;
		license: string;
	}): void;

	set(key: 'id', value: string): Prescriber;
	set(key: 'name', value: string): Prescriber;
	set(key: 'userType', value: string): Prescriber;
	set(key: 'email', value: string): Prescriber;
	set(key: 'license', value: string): Prescriber;
}

const Prescriber = Immutable.Record({
	id: '0',
	name: '',
	userType: '',
	email: '',
	license: '',
});

export default Prescriber