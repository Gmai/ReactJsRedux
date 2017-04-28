import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import type { Connector } from 'react-redux';
import { elementType } from 'react-prop-types';
import Secondary from '../components/Secondary';
import type SecondaryModel from '../model/Secondary';
import * as Actions from '../actions/Secondary';

type Props = {
	actions: React.PropTypes.object.isRequired,
	secondarySelected: React.PropTypes.object.isRequired,
	secondaryList: React.PropTypes.array.isRequired,
	clinicSelected: React.PropTypes.object.isRequired,
	prescriberSelected: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
	
	return {
		secondarySelected: state.SecondaryReducer.secondarySelected,
		secondaryList: state.SecondaryReducer.secondaryList,
		clinicSelected: state.ClinicReducer.clinicSelected,
		prescriberSelected: state.PrescriberReducer.prescriberSelected,
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(Actions, dispatch)
})

const connector: Connector<{}, Props> = connect(
	mapStateToProps,
	mapDispatchToProps
)

export default connector(Secondary)