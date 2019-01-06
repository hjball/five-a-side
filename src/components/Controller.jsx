import React from 'react';

import Button from './Button';

// assignPlayers and resetPlayers are passed down as props
const Controller = ({ assignPlayers, resetPlayers }) => (
	<div className="controller">
		<Button 
			text="Assign"
			handleClick={ assignPlayers }/>
		<Button
			text="Reset"
			handleClick={ resetPlayers }/>
	</div>
);

export default Controller;