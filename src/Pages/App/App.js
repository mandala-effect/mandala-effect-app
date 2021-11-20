import React from 'react';
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import LandingPage from '../LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
