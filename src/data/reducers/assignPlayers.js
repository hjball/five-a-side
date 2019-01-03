// import lodash JavaScript library
import _ from 'lodash';

export default (state) => {
	
	// shuffle the array of players, divide into two equal arrays of five players, and save to a variable named randomise 
	let randomise = _.chunk(_.shuffle(state.players), 5);
	
	return {
		// take a copy of state
		...state,
		// set teamA to be the first equal array of players saved to randomise
		teamA: randomise[0],
		// set teamB to be the second equal array of players saved to randomise
		teamB: randomise[1],
	}
};