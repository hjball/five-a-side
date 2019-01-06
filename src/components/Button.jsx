import React from 'react';

const Button = ({ text, handleClick }) => (
	<button
	// handleClick is called every time a user clicks the button
		onClick={ handleClick }
	// text is rendered on the button
	>{ text }</button>
);

export default Button;