import { connect } from 'react-redux';

import PlayerList from '../components/PlayerList';

const mapStateToProps = ( state ) => {
	// console.log("PlayerListContainer:", state)
	return {
		players: state.players,
	}
};



export default connect(mapStateToProps)(PlayerList);