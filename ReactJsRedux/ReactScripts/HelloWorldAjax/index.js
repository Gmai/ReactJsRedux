'use strict';

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/AppContainer';
import reducer from './reducers';
import AjaxCaller from './middleware/AjaxCaller'
import Logger from './middleware/Logger'

const store = createStore(reducer, applyMiddleware(AjaxCaller, Logger))

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('container')
)