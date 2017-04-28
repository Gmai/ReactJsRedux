import React, { Component } from 'react';

class Prescriber extends Component {
	render() {
		return (
			<div className={"prescriber " + (this.props.clinicSelected.id == 0 ? "hide" : "")}>
				<div className="section-header">
					<h3>Prescriber</h3>
				</div>
				<div className="select-prescriber">
					<select name="prescriber" value={this.props.prescriberSelected.id} onChange={this.props.actions.onChangePrescriber} >
						<option key="0" value="0">Select Clinic</option>
						{[...this.props.prescriberList].map(x =>
							<option key={x.id} value={x.id}>{x.name}</option>
						)}
						<option key="-1" value="-1">Add Prescriber</option>
					</select>
				</div>
				<div className={"prescriber-data " + (this.props.prescriberSelected.id == 0 ? "hide" : "")}>
					<label>Role</label>
					<select name="userType" value={this.props.prescriberSelected.userType} onChange={this.props.actions.onChangePrescriberUserType}>
						<option key="1" value="1">Doctor</option>
						<option key="2" value="2">Nurse Practioner</option>
					</select>
					<label>Name</label>
					<input type="text" onChange={this.props.actions.onTextValueChanged} value={this.props.prescriberSelected.name} name="name" />
					<label>Email</label>
					<input type="text" onChange={this.props.actions.onTextValueChanged} value={this.props.prescriberSelected.email} name="email" />
					<label className={((this.props.prescriberSelected.userType == 1) ? "" : "hide")}>License</label>
					<input type="text" onChange={this.props.actions.onTextValueChanged} value={this.props.prescriberSelected.license} name="license" className={((this.props.prescriberSelected.userType == 1) ? "" : "hide")}  />
				</div>
			</div>
		);
	}
}

export default Prescriber;