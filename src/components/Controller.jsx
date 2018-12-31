import React from 'react';

import Button from './Button';

const Controller = ({ assignPlayers }) => (
	<Button 
		text="Go"
		assignPlayers={ assignPlayers }/>
);

export default Controller;