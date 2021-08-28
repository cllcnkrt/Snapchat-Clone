import React from "react";
import "./App.css";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./components/Preview/Preview";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/preview">
            <Preview />
          </Route>
            
          <Route exact path="/">
            <WebcamCapture />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
