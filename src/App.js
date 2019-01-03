import React from 'react';
import './App.css';

// import components
import Header from './components/Header';

// import containers
import PlayerList from './containers/PlayerListContainer';
import InputForm from './containers/InputFormContainer';
import TeamList from './containers/TeamListContainer';
import Controller from './containers/ControllerContainer';

const App = () => (
  <div className="main">
    <Header />
        <TeamList
        // team name is passed down as a prop
          team="Team A"
          className="team-list-teamA"
        />
        <PlayerList />
        <TeamList
        // team name is passed down as a prop
          team="Team B"
          className="team-list-teamB"
        />
    <InputForm />
    <Controller />
  </div>
);

export default App;
