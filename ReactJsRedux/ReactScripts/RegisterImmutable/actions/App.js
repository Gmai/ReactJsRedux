import ActionTypes from '../model/ActionTypes'

export const onClickSend = (clinic,prescriber,secondary) => {
	return {
		type: ActionTypes.SEND_DATA,
		clinic: clinic,
		prescriber: prescriber,
		secondary: secondary
	};
}