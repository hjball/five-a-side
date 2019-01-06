// import the reducer functions
import addPlayer from './reducers/addPlayer';
import assignPlayers from './reducers/assignPlayers';
import resetPlayers from './reducers/resetPlayers';
import deletePlayer from './reducers/deletePlayer';

// reducer recieves the current version of state and the action that called it
const reducer = (state, action) => {
	switch (action.type) {
		case 'addPlayer': return addPlayer(state, action);
		case 'assignPlayers': return assignPlayers(state, action);
		case 'resetPlayers': return resetPlayers(state, action);
		case 'deletePlayer': return deletePlayer(state, action);
		default: return state;
	}
};

export default reducer;