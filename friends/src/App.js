import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/protected">Protected Page</Link>
        <Switch>
          <PrivateRoute exact path="/protected" component={} />
          <Route path="/login" component={LoginForm} />
          <Route component={} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
