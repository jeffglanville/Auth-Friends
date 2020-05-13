import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';
import Logout from './components/Logout';
import ProtectedRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="link-wrapper">
          <nav>
            <Link id="link" to="/login">Login</Link>
            <Link id="link" to="/protected">Friends</Link>
            <Link id="link" to="/newFriend">NewFriend</Link>
            <Link id="link" to="/logout">Click here to Logoff!</Link>
          </nav>
        </div>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <PrivateRoute exact path="/newFriend" component={NewFriend} />
          <ProtectedRoute exact path="/logout" component={Logout} />
          <Route path="/" component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
