import React, { Component } from 'react';

class InputForm extends Component {
	constructor(props) {
		super(props);

		// initial state setup as an empty string
		this.state = {
			input: "",
		};

		// binding the methods
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

		// call handleSubmit function and pass along data
		this.props.handleSubmit(data);

		// then reset input to an empty string
		this.setState({ input: ""});
	}

	render() {
		return (
			<form 
				onSubmit={ this.submitForm }
				className="input-form">
				<input
					// display the current value of the input inside state
					value={ this.state.input }

					// handleInput method is fired every keystroke
					onChange={ this.handleInput }/>

				{/* check number of players added is less than 10 (starting at zero index)*/}
				{ this.props.players.length < 10 ? <button>Add</button> : null }
			</form>
		)
	}
}

export default InputForm;
