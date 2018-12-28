// returns an action containing the type and input data
export const addPlayer = data => {
	return {
		type: 'addPlayer',
		input: data,
	}
};