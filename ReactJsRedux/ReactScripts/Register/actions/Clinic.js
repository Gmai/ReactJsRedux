import ActionTypes from '../model/ActionTypes'

export const onChangeClinic = (event) => {
	return {
		type: ActionTypes.CLINIC_CHANGED,
		clinicSelectedId: event.target.value
	};
}

export const onTextValueChanged = (event) => {
	
	return {
		type: ActionTypes.VALUE_CHANGED,
		name: event.target.name,
		value: event.target.value,
		reducer:"clinic"
	};
}

