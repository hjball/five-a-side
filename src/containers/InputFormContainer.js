// connect to react-redux
import { connect } from 'react-redux';

// import InputForm component
import InputForm from '../components/InputForm';

// import addPlayer action
import { addPlayer } from '../data/actions/state';

// map players and error from state to props
const mapStateToProps = ( state ) => {
	return {
		players: state.players,
		error: state.error,
	}
};

// setup dispatch function for handleSubmit to take the data variable containing input and dispatch addPlayer along with the data
const mapDispatchToProps = ( dispatch ) => {
	return {
		handleSubmit: data => {
			// dispatch add player along with input
			dispatch(addPlayer(data))
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);