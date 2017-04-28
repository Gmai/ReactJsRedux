import React, { Component } from 'react';

class Clinic extends Component {
	render() {
		
		return (
			<div>
				<div className="section-header">
					<h3>Clinic</h3>
				</div>
				<div className="select-clinic">
					<select id="clinic" name="clinic" value={this.props.clinicSelected.id} onChange={this.props.actions.onChangeClinic}>
						<option key="0" value="0">Select...</option>	
						{[...this.props.clinicList].map(x =>
							<option key={x.id} value={x.id}>{x.name}</option>	
						)}
						<option key="-1" value="-1">Add new clinic</option>	
					</select>
				</div>
				<div className={"clinic-data " + (this.props.clinicSelected.id == 0 ? "hide" : "")}>
					<label>Province</label>
					<input type="text" onChange={this.props.actions.onTextValueChanged} value={this.props.clinicSelected.province} name="province" />
					<label>Postal Code</label>
					<input type="text" onChange={this.props.actions.onTextValueChanged} value={this.props.clinicSelected.postalcode} name="postalcode" />
				</div>
			</div>
		);
	}
}

export default Clinic;