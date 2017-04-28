import { Prescriber } from '../model/Prescriber'
import { Clinic } from '../model/Clinic'
import ActionTypes from '../model/ActionTypes'

const initialState =
	{
		clinicSelected: new Clinic(),
		prescriberSelected: new Prescriber()
	}

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.SEND_DATA_SUCCESS:
			$("#result").html(JSON.stringify(action.data, null, 4));
			return state
		default:
			return state
	}
}
