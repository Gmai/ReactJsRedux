import React, { Component } from 'react';
import { elementType } from 'react-prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import App from '../components/App';
import * as Actions from '../actions/App';

type Props = {
	prescriberSelected: React.PropTypes.object.isRequired,
	clinicSelected: React.PropTypes.object.isRequired,
	secondarySelected: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
	return {
		clinicSelected: state.ClinicReducer.clinicSelected,
		prescriberSelected: state.PrescriberReducer.prescriberSelected,
		secondarySelected: state.SecondaryReducer.secondarySelected
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
})

const connector: Connector<{}, Props> = connect(
	mapStateToProps,
	mapDispatchToProps
)

export default connector(App)