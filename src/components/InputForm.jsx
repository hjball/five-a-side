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
		this.submitForm = this.submitForm.bind(this);
	}

	handleInput(e) {
		// updates the state to the current user input
		this.setState({ input: e.currentTarget.value });
	}

	submitForm(e) {
		// prevent form from refreshing page
		e.preventDefault();
		// store input as a variable named data
		let data = this.state.input;
		console.log(data)
		this.props.handleSubmit(data);

		this.setState({ input: ""});

	}

	render() {
		return (
			<form onSubmit={ this.submitForm }>
				<input
					// displays the current value of the input inside state
					value={ this.state.input }

					// handleInput method is fired every keystroke
					onChange={ this.handleInput }/>
				<button>Add</button>
			</form>
		)
	}
}

export default InputForm;
