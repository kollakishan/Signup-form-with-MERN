import React from "react";
import Signup from "./FrontEnd/Components/Signup";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import "./App.css";
import Signin from "./FrontEnd/Components/Signin";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/signup/new' exact>
            <Signup />
          </Route>
          <Route path='/signin' exact>
            <Signin />
          </Route>
          <Redirect to='/signup/new' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
