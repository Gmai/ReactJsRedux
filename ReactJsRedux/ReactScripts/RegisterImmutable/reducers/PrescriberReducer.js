import ActionTypes from '../model/ActionTypes'
import Prescriber from '../model/Prescriber'
import Clinic from '../model/Clinic'
import { Map } from 'immutable'

const initialState = {
	clinicSelected: new Clinic(),
	prescriberSelected: new Prescriber(),
	prescriberList: []
}

export default function prescriberReducer(state = initialState, action) {
	
	switch (action.type) {
		case ActionTypes.CLINIC_CHANGED:
			if (action.clinicSelectedId != state.clinicSelected.id) {
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: new Prescriber(),
					prescriberList: []
				}
			}
			return state;
		case ActionTypes.LOAD_PRESCRIBERS:
			return {
				clinicSelected: state.clinicSelected,
				prescriberSelected: state.prescriberSelected,
				prescriberList: action.prescribers
			}
		case ActionTypes.PRESCRIBER_CHANGED:
			if (action.prescriberSelectedId == 0) {
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: new Prescriber(),
					prescriberList: state.prescriberList
				}
			} else if (action.prescriberSelectedId == -1) {
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: new Prescriber({ id: -1 }),
					prescriberList: state.prescriberList
				}
			} else {
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: state.prescriberList.find(x => x.id == action.prescriberSelectedId),
					prescriberList: state.prescriberList
				}
			}
		case ActionTypes.VALUE_CHANGED:
			if (action.reducer == "prescriber") {
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: new Prescriber(state.prescriberSelected.set(action.name, action.value)),
					prescriberList: state.prescriberList
				}
			}
			return state
		default:
			return state
	}
}
