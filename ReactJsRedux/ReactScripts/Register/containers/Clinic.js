import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import type { Connector } from 'react-redux';
import { elementType } from 'react-prop-types';
import Clinic from '../components/Clinic';
import ClinicModel from '../model/Clinic';
import * as Actions from '../actions/Clinic';

type Props = {
	actions: React.PropTypes.object.isRequired,
	clinicSelected: React.PropTypes.object.isRequired,
	clinicList: React.PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
	return {
		clinicSelected: state.ClinicReducer.clinicSelected,
		clinicList: state.ClinicReducer.clinicList
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
})

const connector: Connector<{}, Props> = connect(
	mapStateToProps,
	mapDispatchToProps
)

export default connector(Clinic)