import ActionTypes from '../model/ActionTypes'

export const onChangePrescriber = (event) => {
	return {
		type: ActionTypes.PRESCRIBER_CHANGED,
		prescriberSelectedId: event.target.value
	};
}

export const onChangePrescriberUserType = (event) => {
	return {
		type: ActionTypes.VALUE_CHANGED,
		name: event.target.name,
		value: event.target.value,
		reducer: "prescriber"
	};
}

export const onTextValueChanged = (event) => {
	return {
		type: ActionTypes.VALUE_CHANGED,
		name: event.target.name,
		value: event.target.value,
		reducer:"prescriber"
	};
}

