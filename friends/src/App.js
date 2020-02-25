import React from 'react';
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";

import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router>
        <Link to="/login">Login</Link>
        <Link to="/protected">Friends</Link>

      <Switch>
        <Route path="/login" component={Login}/>
        
        <PrivateRoute exact path="/protected" component={Friends} />
      </Switch>

       </Router>
      </header>
    </div>
  );
}

export default App;
