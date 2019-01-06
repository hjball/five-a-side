import React from 'react';

const PlayerList = ({ players, handleDelete }) => (
	<div className="player-list">
		<h2>Players</h2>
		<ul>
		{/* iterate over players array and render a list item containing player along with delete icon*/}
		{ players.map((item, index) => (
			<React.Fragment>
				<li key={ index }>{ item.player }
					<ion-icon 
						name="close-circle"
						onClick={ () => handleDelete(item.id) }>
					</ion-icon>
				</li>
				<hr />
			</React.Fragment>
		))}
		</ul>
	</div>
);

export default PlayerList;