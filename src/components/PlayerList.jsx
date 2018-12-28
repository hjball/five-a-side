import React from 'react';

const PlayerList = ({ players }) => (
	<div>
		<h2>Players</h2>
		<ul>
		{/* iterate over players and render a list item containing player */}
		{ players.map((item, index) => (
			<li key={ index }>{ item.player }</li>
		))}
		</ul>
	</div>
);

export default PlayerList;