export default (state, action) => {
	return {
		// take a copy of state
		...state,
		// reset players, teams and error message to be empty
		players: [],
		teamA: [],
		teamB: [],
		error: "",
	}
};