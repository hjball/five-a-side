import React from 'react';

import Button from './Button';

const Controller = ({ assignPlayers }) => (
	<div className="controller">
		<Button 
			text="Go"
			assignPlayers={ assignPlayers }/>
	</div>
);

export default Controller;