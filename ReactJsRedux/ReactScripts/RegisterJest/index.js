'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from './reducers';
import AjaxCaller from './middleware/AjaxCaller'
import Logger from './middleware/Logger'
import Clinic from './model/Clinic'
import { List } from 'immutable'

const initialState = { ClinicReducer: { clinicSelected: new Clinic(), clinicList: List(_initialClinics.map(x => new Clinic(x))) } }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(AjaxCaller, Logger)));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('container')
)