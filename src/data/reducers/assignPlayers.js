import _ from 'lodash';

export default (state, action) => {
	return {
		// take a copy of state
		...state, 
		teamA: _.chunk(_.shuffle(state.players), 5)[0],
		teamB: _.chunk(_.shuffle(state.players), 5)[1],
	}
};