// connect to react-redux
import { connect } from 'react-redux';

// import TeamList component
import TeamList from '../components/TeamList';

// map teamA and teamB from state to props
const mapStateToProps = ( state ) => {
	return {
		teamA: state.teamA,
		teamB: state.teamB,
	}
};

export default connect(mapStateToProps)(TeamList);