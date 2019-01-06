// connect to react-redux
import { connect } from 'react-redux';

// import Playerlist component
import PlayerList from '../components/PlayerList';

// import deletePlayer action 
import { deletePlayer } from '../data/actions/state';

// map players from state to props
const mapStateToProps = ( state ) => {
	return {
		players: state.players,
	}
};

// setup dispatch function to take the data variable containing the player id and dispatch deletePlayer along with the id
const mapDispatchToProps = ( dispatch ) => {
	return {
		handleDelete: data => {
			// dispatch deletePlayer along with the id
			dispatch(deletePlayer(data))
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);