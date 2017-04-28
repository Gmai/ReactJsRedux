import React, { Component } from 'react';

class Secondary extends Component {
	render() {
		
		return (
			<div className={"secondary " + (this.props.clinicSelected.id == 0 || this.props.prescriberSelected.id == 0 ? "hide" : "")}>
				<div className="section-header">
					<h3>Secondary</h3>
				</div>
				<div className="select-secondary">
					<select name="secondary" value={this.props.secondarySelected.id} onChange={this.props.actions.onChangeSecondary} >
						<option key="0" value="0">Select Clinic</option>
						{[...this.props.secondaryList].map(x =>
							<option key={x.id} value={x.id}>{x.name}</option>
						)}
						<option key="-1" value="-1">Add Secondary</option>
					</select>
				</div>
				<div className={"secondary-data " + (this.props.secondarySelected.id == 0 ? "hide" : "")}>
					<label>Role</label>
					<select name="userType" value={this.props.secondarySelected.userType} onChange={this.props.actions.onChangeSecondaryUserType}>
						<option key="2" value="2">Nurse Practioner</option>
						<option key="3" value="4">Nurse</option>
						<option key="4" value="3">Other</option>
					</select>
					<label>Name</label>
					<input type="text" onChange={this.props.actions.onTextValueChanged} value={this.props.secondarySelected.name} name="name" />
					<label>Email</label>
					<input type="text" onChange={this.props.actions.onTextValueChanged} value={this.props.secondarySelected.email} name="email" />
				</div>
			</div>
		);
	}
}

export default Secondary;