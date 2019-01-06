// setup id as a variable starting at 0
let id = 0;

export default (state, action) => {
	
	// increment id by 1 each time addPlayer is called
	id += 1;

	return {
		// take a copy of state
		...state,
		// add a new object to the players array with a key containing input
		players: [ ...state.players, {
			id: id,
			player: action.input,
		}],
	}

};