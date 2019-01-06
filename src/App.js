import React from 'react';

// import CSS
import './App.css';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import containers
import PlayerList from './containers/PlayerListContainer';
import InputForm from './containers/InputFormContainer';
import TeamList from './containers/TeamListContainer';
import Controller from './containers/ControllerContainer';

const App = () => (
  <div className="main">
    <Header />
        <TeamList
        // team name and class name are passed down as props
          team="Team A"
          className="team-list-teamA"
        />
        <PlayerList />
        <TeamList
        // team name and class name are passed down as props
          team="Team B"
          className="team-list-teamB"
        />
    <InputForm />
    <Controller />
    <Footer />
  </div>
);

export default App;
