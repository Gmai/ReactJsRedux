import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import ClinicReducer from './ClinicReducer';
import PrescriberReducer from './PrescriberReducer';
import SecondaryReducer from './SecondaryReducer';

const registerApp = combineReducers({
	AppReducer, ClinicReducer, PrescriberReducer, SecondaryReducer
})

export default registerApp