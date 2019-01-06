import { connect } from 'react-redux';

import PlayerList from '../components/PlayerList';

import { deletePlayer } from '../data/actions/state';

const mapStateToProps = ( state ) => {
	return {
		players: state.players,
	}
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		handleDelete: data => {
			dispatch(deletePlayer(data))
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);