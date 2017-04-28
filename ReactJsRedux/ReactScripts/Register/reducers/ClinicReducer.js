import { Clinic } from '../model/Clinic'
import ActionTypes from '../model/ActionTypes'

const initialState = 
	{
		clinicSelected: new Clinic(),
		clinicList: _initialClinics.map(x=>new Clinic().load(x))
	}

export default function clinicReducer(state = initialState, action) {
	
	switch (action.type) {
		case ActionTypes.CLINIC_CHANGED:
			if (action.clinicSelectedId == 0) {
				return {
					clinicSelected: new Clinic(),
					clinicList: state.clinicList
				}
			} else if (action.clinicSelectedId == -1) {
				let newClinic = new Clinic()
				newClinic.id = -1;
				return {
					clinicSelected: newClinic,
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
				let clinicSelected = new Clinic();
				clinicSelected.load(state.clinicSelected)
				clinicSelected[action.name] = action.value
				return {
					clinicSelected: clinicSelected,
					clinicList: state.clinicList
				}
			}
			return state
		default:
			return state
	}
}
