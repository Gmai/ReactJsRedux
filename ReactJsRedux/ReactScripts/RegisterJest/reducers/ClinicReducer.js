import Clinic from '../model/Clinic'
import ActionTypes from '../model/ActionTypes'
import { List } from 'immutable'

const initialState = {
	clinicSelected: new Clinic(),
	clinicList: List()
}

export default function clinicReducer(state = initialState, action) {
	debugger;
	switch (action.type) {
		case ActionTypes.CLINIC_CHANGED:
			if (action.clinicSelectedId == 0) {
				return {
					clinicSelected: new Clinic(),
					clinicList: state.clinicList
				}
			} else if (action.clinicSelectedId == -1) {
				return {
					clinicSelected: new Clinic({ id: -1 }),
					clinicList: state.clinicList
				}
			} else {
				return {
					clinicSelected: state.clinicList.find(x => x.id == action.clinicSelectedId),
					clinicList: state.clinicList
				}
			}
		case ActionTypes.VALUE_CHANGED:
			if (action.reducer == "clinic") {
				return {
					clinicSelected: new Clinic(state.clinicSelected.set(action.name, action.value)),
					clinicList: state.clinicList
				}
			}
			return state
		default:
			return state
	}
}
