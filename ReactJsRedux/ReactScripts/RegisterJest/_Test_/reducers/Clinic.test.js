import reducer from '../../reducers/ClinicReducer'
import ActionTypes from '../../model/ActionTypes'
import Clinic from '../../model/Clinic'
import { List } from 'immutable'

describe('Clinic reducer', () => {
	it('should return the initial state', () => {
		var _initialClinics = [
			{ id: 1, name: 'Clinic 1', postalcode: 'A1A1A1', province: 'ON' },
			{ id: 2, name: 'Clinic 2', postalcode: 'A2A2A2', province: 'ON' },
			{ id: 3, name: 'Clinic 3', postalcode: 'A3A3A3', province: 'ON' },
			{ id: 4, name: 'Clinic 4', postalcode: 'A4A4A4', province: 'ON' }
		];
		const clinicList = List(_initialClinics.map(x => new Clinic(x)));
		const initialState = { clinicSelected: new Clinic(), clinicList: clinicList }

		expect(
			reducer(initialState, {
				type: ActionTypes.CLINIC_CHANGED,
				clinicSelectedId: 2
			})
		).toEqual(
			{
				clinicSelected: initialState.clinicList.get(1),
				clinicList: clinicList
			}
		)
	})
	
})