import React from 'react';

const Button = ({ text, assignPlayers }) => (
	<button
		onClick={ assignPlayers }
	>{ text }</button>
);

export default Button;