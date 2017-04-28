import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppComponent from '../components/App';
import type { Connector } from 'react-redux';
import * as Actions from '../actions';
import React, { Component } from 'react';
import { elementType } from 'react-prop-types';


type Props = {
	actions: React.PropTypes.object.isRequired,
	data: { textfield: React.PropTypes.string.isRequired }
}

const mapStateToProps = (state) => {	
	return {
		data: { textfield: state.AppReducer.data.textfield }
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
})

const connector: Connector<{}, Props> = connect(
	mapStateToProps,
	mapDispatchToProps
)

export default connector(AppComponent)