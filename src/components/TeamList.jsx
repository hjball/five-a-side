import React from 'react';

// team name is recieved as a prop
const TeamList = ({ team }) => (
	<div>
		<h2>{ team }</h2>
		<ul>
			<li>Player 1</li>
		</ul>
	</div>
);

export default TeamList;