// connect to react-redux
import { connect } from 'react-redux';

// import Controller component
import Controller from '../components/Controller';

// import assignPlayers and resetPlayers actions
import { assignPlayers } from '../data/actions/state';
import { resetPlayers } from '../data/actions/state';

// setup dispatch function for assignPlayers and resetPlayers
const mapDispatchToProps = ( dispatch ) => {
	return {
		assignPlayers: () => { dispatch(assignPlayers()) },
		resetPlayers: () => { dispatch(resetPlayers()) },
	}
};

export default connect(null, mapDispatchToProps)(Controller);