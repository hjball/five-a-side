import { connect } from 'react-redux';

import InputForm from '../components/InputForm';

import { addPlayer } from '../data/actions/state';

const mapDispatchToProps = ( dispatch ) => {
	return {
		handleSubmit: data => {
			console.log(data);
			// dispatch add player along with input
			dispatch(addPlayer(data))
		},
	}
};

export default connect(null, mapDispatchToProps)(InputForm);