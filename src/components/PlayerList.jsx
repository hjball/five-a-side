import React from 'react';

const PlayerList = ({ players }) => (
	<div className="player-list">
		<h2>Players</h2>
		<ul>
		{/* iterate over players array and render a list item containing player */}
		{ players.map((item, index) => (
			<li key={ index }>{ item.player }
				<ion-icon name="close-circle"></ion-icon>
			</li>
		))}
		</ul>
	</div>
);

export default PlayerList;