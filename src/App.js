import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';

function App() {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/">
            <Rockets />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
