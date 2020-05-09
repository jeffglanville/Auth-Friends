import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/protected">Friends</Link>
        <Link to="/">NewFriend</Link>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <PrivateRoute exact path="/" component={NewFriend} />
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
