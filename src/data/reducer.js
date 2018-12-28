import addPlayer from './reducers/addPlayer';

// reducer recieves the current version of state and the action that called it
const reducer = (state, action) => {
	switch (action.type) {
		case 'addPlayer': return addPlayer(state, action);
		default: return state;
	}
};

export default reducer;