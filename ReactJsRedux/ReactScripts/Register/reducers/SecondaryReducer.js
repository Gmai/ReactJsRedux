import { Secondary } from '../model/Secondary'
import { Prescriber } from '../model/Prescriber'
import { Clinic } from '../model/Clinic'
import ActionTypes from '../model/ActionTypes'

const initialState = 
	{
		clinicSelected: new Clinic(),
		prescriberSelected: new Prescriber(),
		secondarySelected: new Secondary(),
		secondaryList: []
	}

export default function secondaryReducer(state = initialState, action) {
	
	switch (action.type) {
		case ActionTypes.CLINIC_CHANGED:
			if (action.clinicSelectedId != state.clinicSelected.id) {
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: state.prescriberSelected,
					secondarySelected: new Secondary(),
					secondaryList: []
				}
			}
			return state;
		case ActionTypes.PRESCRIBER_CHANGED:
			if (action.prescriberSelectedId != state.prescriberSelected.id) {
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: state.prescriberSelected,
					secondarySelected: new Secondary(),
					secondaryList: []
				}
			}
			return state;
		case ActionTypes.LOAD_SECONDARIES:
			
			return {
				clinicSelected: state.clinicSelected,
				prescriberSelected: state.prescriberSelected,
				secondarySelected: state.secondarySelected,
				secondaryList: action.secondaries
			}
		case ActionTypes.SECONDARY_CHANGED:
			if (action.secondarySelectedId == 0) {
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: state.prescriberSelected,
					secondarySelected: new Secondary(),
					secondaryList: state.secondaryList
				}
			} else if (action.secondarySelectedId == -1) {
				let newSecondary = new Secondary()
				newSecondary.id = -1;
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: state.prescriberSelected,
					secondarySelected: newSecondary,
					secondaryList: state.secondaryList
				}
			} else {
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: state.prescriberSelected,
					secondarySelected: state.secondaryList.find(x => x.id == action.secondarySelectedId),
					secondaryList: state.secondaryList
				}
			}
		case ActionTypes.VALUE_CHANGED:
			if (action.reducer == "secondary") {
				
				let secondarySelected = new Secondary();
				secondarySelected.load(state.secondarySelected)
				secondarySelected[action.name] = action.value
				return {
					clinicSelected: state.clinicSelected,
					prescriberSelected: state.prescriberSelected,
					secondarySelected: secondarySelected,
					secondaryList: state.secondaryList
				}
			}
			return state
		default:
			return state
	}
}
