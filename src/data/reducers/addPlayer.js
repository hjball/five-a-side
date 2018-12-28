export default (state, action) => {
	return {
		// take a copy of state
		...state,
		// add a new object to the players array with a key containing input
		players: [ ...state.players, {
			player: action.input,
		}],
	}	
};