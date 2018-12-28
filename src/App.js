import React from 'react';
import './App.css';

// import components
import Header from './components/Header';
import TeamList from './components/TeamList';

// import containers
import PlayerList from './containers/PlayerListContainer';
import InputForm from './containers/InputFormContainer';

const App = () => (
  <React.Fragment>
    <Header />
    <TeamList
    //team name is passed down as a prop
      team="Team A"
    />
    <PlayerList />
    <TeamList
    //team name is passed down as a prop
      team="Team B"
    />
    <InputForm />
  </React.Fragment>
);

export default App;
