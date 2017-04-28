import React, { Component } from 'react';
import { elementType } from 'react-prop-types';

class App extends Component {
	render() {
		return (
			<div>
				<form id="register">
					<div>{this.props.message}</div>
					<button type="button" onClick={this.props.actions.onClickButton}>Click</button>
				</form>
			</div>
		);
	}
}

export default App;