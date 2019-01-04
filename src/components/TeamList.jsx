import React from 'react';

// destructured props into team, teamA, and teamB
const TeamList = ({ team, teamA, teamB, className }) => (
	<div className={ className }>
		<h2>{ team }</h2>
		<ul>
		{/* iterate over correct team and render a list item containing player name */}
		{ (team === "Team A" ? teamA : teamB).map((item, index) => (
			<React.Fragment>
				<li key={ index }>{ item.player }</li>
				<hr />
			</React.Fragment>
		))}
		</ul>
	</div>
);

export default TeamList;