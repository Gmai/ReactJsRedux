import ActionTypes from '../model/ActionTypes'

export const onChangeSecondary = (event) => {
	return {
		type: ActionTypes.SECONDARY_CHANGED,
		secondarySelectedId: event.target.value
	};
}

export const onChangeSecondaryUserType = (event) => {
	return {
		type: ActionTypes.VALUE_CHANGED,
		name: event.target.name,
		value: event.target.value,
		reducer: "secondary"
	};
}

export const onTextValueChanged = (event) => {
	return {
		type: ActionTypes.VALUE_CHANGED,
		name: event.target.name,
		value: event.target.value,
		reducer:"secondary"
	};
}

