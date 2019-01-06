import { connect } from 'react-redux';

import TeamList from '../components/TeamList';

const mapStateToProps = ( state ) => {
	return {
		teamA: state.teamA,
		teamB: state.teamB,
	}
};

export default connect(mapStateToProps)(TeamList);