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
		if(this.state.input.length < 20) {

			// updates the state to the current user input
			this.setState({ input: e.currentTarget.value });

		} else {
			console.log("Error, name too long");
		}
	}

	submitForm(e) {
		// prevent form from refreshing page
		e.preventDefault();

		// check number of players added is less than 10 (starting at zero index)
		if(this.props.players.length < 10) {
			
				// store input as a variable named data
				let data = this.state.input;

				// call handleSubmit function and pass along data
				this.props.handleSubmit(data);

				// then reset input to an empty string
				this.setState({ input: ""});

		} else {
			console.log("Error, you already have ten players");
		}
	};

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
				<button>Add</button>
			</form>
		)
	}
}

export default InputForm;
