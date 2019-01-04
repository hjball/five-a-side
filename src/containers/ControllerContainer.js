import { connect } from 'react-redux';

import Controller from '../components/Controller';

import { assignPlayers } from '../data/actions/state';
import { resetPlayers } from '../data/actions/state';

const mapDispatchToProps = ( dispatch ) => {
	return {
		assignPlayers: () => { dispatch(assignPlayers()) },
		resetPlayers: () => { dispatch(resetPlayers()) },
	}
};

export default connect(null, mapDispatchToProps)(Controller);