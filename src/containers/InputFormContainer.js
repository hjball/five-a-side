import { connect } from 'react-redux';

import InputForm from '../components/InputForm';

import { addPlayer } from '../data/actions/state';

const mapStateToProps = ( state ) => {
	return {
		players: state.players
	}
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		handleSubmit: data => {
			console.log(data);
			// dispatch add player along with input
			dispatch(addPlayer(data))
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);