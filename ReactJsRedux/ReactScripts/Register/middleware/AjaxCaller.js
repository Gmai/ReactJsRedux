import ActionTypes from '../model/ActionTypes'
import { Prescriber } from '../model/Prescriber'
import { Secondary } from '../model/Secondary'
import axios from 'axios'

const ajaxCaller = store => next => action => {

	switch (action.type) {
		case ActionTypes.CLINIC_CHANGED:
			if (!!action.clinicSelectedId) {
				axios.get("/React/GetPrescribers", {
					params: {
						clinicId: action.clinicSelectedId
					}
				}).then(function (response) {
					store.dispatch({
						type: ActionTypes.LOAD_PRESCRIBERS,
						prescribers: response.data.map(x => new Prescriber().load(x))
					});
				}).catch(function (error) {
					console.log(error);
				});
			}
			break; 
		case ActionTypes.PRESCRIBER_CHANGED:
			
			if (!!store.getState().ClinicReducer.clinicSelected.id && !!action.prescriberSelectedId) {
				axios.get("/React/GetSecondaryContact", {
					params: {
						clinicId: store.getState().ClinicReducer.clinicSelected.id,
						prescriberId: action.prescriberSelectedId
					}
				}).then(function (response) {
					
					store.dispatch({
						type: ActionTypes.LOAD_SECONDARIES,
						secondaries: response.data.map(x => new Secondary().load(x))
					});
				}).catch(function (error) {
					console.log(error);
				});
			}
			break; 
		case ActionTypes.SEND_DATA:
			let data = {
				clinic: action.clinic,
				prescriber: action.prescriber,
				secondaryContact: action.secondary
			}
			axios.post("/React/SendData", data)
				.then(function (response) {
					store.dispatch({
						type: ActionTypes.SEND_DATA_SUCCESS,
						data: data
					});
				})
				.catch(function (error) {
					console.log(error);
				});
			break;
		default:
			break;
	};
	return next(action);
}

export default ajaxCaller;