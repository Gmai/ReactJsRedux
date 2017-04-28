import React, { Component } from 'react'
import Clinic from '../containers/Clinic'
import Prescriber from '../containers/Prescriber'
import Secondary from '../containers/Secondary'

class App extends Component {
	constructor(props) {
		super(props);
		this.handleSendButtonClicked = this.handleSendButtonClicked.bind(this);
	}
	handleSendButtonClicked(ev) {
		this.props.actions.onClickSend(this.props.clinicSelected, this.props.prescriberSelected, this.props.secondarySelected)
	}
	render() {
		return (
			<form>
				<Clinic />
				<Prescriber />
				<Secondary />
				<hr className={(this.props.prescriberSelected.id == 0 || this.props.clinicSelected.id == 0) ? "hide" : ""} />
				<div className={(this.props.prescriberSelected.id == 0 || this.props.clinicSelected.id == 0) ? "hide" : ""}>
					<button type="button" onClick={this.handleSendButtonClicked}>Send</button>
				</div>
			</form>
		);
	}
}

export default App;