export default (state, action) => {
	return {
		// take a copy of state
		...state,
		// reset players array to be empty
		players: [],
		teamA: [],
		teamB: [],
		error: "",
	}
};