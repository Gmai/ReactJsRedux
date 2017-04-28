import ActionTypes from '../model/ActionTypes'
import {Prescriber } from '../model/Prescriber'
import { Clinic } from '../model/Clinic'

const initialState = 
	{
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
				let newPrescriber = new Prescriber()
				newPrescriber.id = -1;
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: newPrescriber,
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
				let prescriberSelected = new Prescriber();
				prescriberSelected.load(state.prescriberSelected)
				prescriberSelected[action.name] = action.value
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: prescriberSelected,
					prescriberList: state.prescriberList
				}
			}
			return state
		default:
			return state
	}
}
