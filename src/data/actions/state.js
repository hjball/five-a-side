// returns an action containing the type along with data when required

export const addPlayer = data => {
	return {
		type: 'addPlayer',
		input: data,
	}
};

export const assignPlayers = () => {
	return {
		type: 'assignPlayers',
	}
};

export const resetPlayers = () => {
	return {
		type: 'resetPlayers',
	}
};

export const deletePlayer = data => {
	return {
		type: 'deletePlayer',
		id: data,
	}
};