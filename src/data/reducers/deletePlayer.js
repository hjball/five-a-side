export default (state, action) => {
	return {
		// take a copy of state
		...state,
		// filter over the players array and return a new array without the selected player
		players: state.players.filter(player => player.id !== action.id),
	}
};