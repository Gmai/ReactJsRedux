'user strict';

import Immutable from 'immutable'

declare class Secondary {
	id: string;
	name: string;
	userType: string;
	email: string;

	constructor(data: {
		id: string;
		name: string;
		userType: string;
		email: string;
	}): void;

	set(key: 'id', value: string): Secondary;
	set(key: 'name', value: string): Secondary;
	set(key: 'userType', value: string): Secondary;
	set(key: 'email', value: string): Secondary;
}

const Secondary = Immutable.Record({
	id: '0',
	name: '',
	userType: '',
	email: '',
});

export default Secondary