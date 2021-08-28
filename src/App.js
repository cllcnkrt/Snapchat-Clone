import React from 'react';
import './App.css';
import WebcamCapture from './components/WebcamCapture/WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
   <Router>
        <Switch>

          <Route exact path="/test">
          <h1>Heyyy</h1>
          </Route>

          <Route exact path="/">
          <WebcamCapture />
          </Route>

        </Switch>
    
    </Router>
  );



    
    </div>
  );
}

export default App;
