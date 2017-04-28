import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import type { Connector } from 'react-redux';
import { elementType } from 'react-prop-types';
import Prescriber from '../components/Prescriber';
import PrescriberModel from '../model/Prescriber';
import * as Actions from '../actions/Prescriber';

type Props = {
	actions: React.PropTypes.object.isRequired,
	prescriberSelected: React.PropTypes.object.isRequired,
	prescriberList: React.PropTypes.array.isRequired,
	clinicSelected: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
	
	return {
		prescriberSelected: state.PrescriberReducer.prescriberSelected,
		prescriberList: state.PrescriberReducer.prescriberList,
		clinicSelected:state.ClinicReducer.clinicSelected
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
})

const connector: Connector<{}, Props> = connect(
	mapStateToProps,
	mapDispatchToProps
)

export default connector(Prescriber)