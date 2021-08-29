import React from "react";
import "./App.css";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./components/Preview/Preview";
import Chats from "./components/Chats/Chats";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={WebcamCapture} />
          <Route path="/preview" component={Preview} />
          <Route path="/chats" component={Chats} />
          <Route path="/chats/view" component={ChatView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
