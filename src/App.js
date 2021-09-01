import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainBar from './components/nav/MainBar';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <MainBar />
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
