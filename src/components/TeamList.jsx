import React from 'react';

// destructured props into team, teamA, and teamB
const TeamList = ({ team, teamA, teamB }) => (
	<div>
		<h2>{ team }</h2>
		<ul>
		{/* iterate over correct team and render a list item containing player */}
		{ (team === "Team A" ? teamA : teamB).map((item, index) => (
			<li key={ index }>{ item.player }</li>
		))}
		</ul>
	</div>
);

export default TeamList;