import * as actions from '../../actions/Clinic'
import ActionTypes from '../../model/ActionTypes'

describe('clinic actions', () => {
	it('should show selected clinic', () => {
		const event = { target: {value:2}}
		const expectedAction = {
			type: ActionTypes.CLINIC_CHANGED,
			clinicSelectedId: event.target.value
		};
		expect(actions.onChangeClinic(event)).toEqual(expectedAction)
	})
})