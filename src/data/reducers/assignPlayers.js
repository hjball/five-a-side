import _ from 'lodash';

export default (state, action) => {
	
	let shuffle = _.chunk(_.shuffle(state.players), 5);
	
	return {
		// take a copy of state
		...state, 
		teamA: shuffle[0],
		teamB: shuffle[1],
	}
};