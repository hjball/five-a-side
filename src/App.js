import React from 'react';
import './App.css';

//components
import Header from './components/Header';
import TeamList from './components/TeamList';

const App = () => (
  <React.Fragment>
    <Header />
    <TeamList
      team="Team A"
    />
    <TeamList
      team="Team B"
    />
  </React.Fragment>
);

export default App;
