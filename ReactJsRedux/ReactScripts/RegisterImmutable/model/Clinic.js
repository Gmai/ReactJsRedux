'user strict';

import Immutable from 'immutable'

declare class Clinic {
	id: string;
	name: string;
	province: string;
	postalcode: string;

	constructor(data: {
		id: string,
		name: string,
		province: string,
		postalcode: string
	}): void;

	set(key: 'id',value:string):Clinic;
	set(key: 'name', value: string): Clinic;
	set(key: 'province', value: string): Clinic;
	set(key: 'postalcode', value: string): Clinic;
}

const Clinic = Immutable.Record({
	id: '0',
	name: '',
	province: '',
	postalcode: ''
});

export default Clinic