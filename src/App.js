import React from 'react';
import './App.css';

//import components
import Header from './components/Header';
import TeamList from './components/TeamList';
import PlayerList from './components/PlayerList';
import InputForm from './components/InputForm';

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
