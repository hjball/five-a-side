import React, { Component } from 'react';

class InputForm extends Component {
	constructor(props) {
		super(props);

		// initial state setup as an empty string
		this.state = {
			input: "",
		};

		// binding the handleInput method
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		// updates the state to the current user input
		this.setState({ input: e.currentTarget.value });
	}

	render() {
		return (
			<form >
				<input
				// displays the current value of the input inside state
				value={ this.state.input }

				// handleInput method is fired every keystroke
				onChange= { this.handleInput }/>
				<button>Add</button>
			</form>
		)
	}
}

export default InputForm;
