import { connect } from 'react-redux';

import Controller from '../components/Controller';

import { assignPlayers } from '../data/actions/state';

const mapDispatchToProps = ( dispatch ) => {
	return {
		assignPlayers: () => { dispatch(assignPlayers()) },
	}
};

export default connect(null, mapDispatchToProps)(Controller);