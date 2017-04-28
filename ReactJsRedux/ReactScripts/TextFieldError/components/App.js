import React, { Component } from 'react';
import { elementType } from 'react-prop-types';

class App extends Component {
	render() {
		return (
			<div>
				<input type="text" value={this.props.data.textfield} onChange={this.props.actions.onChangeText} />
				<br/>
				<span>{this.props.data.textfield}</span>
			</div>
		);
	}
}

export default App;