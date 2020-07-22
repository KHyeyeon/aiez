import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import New_project from "./components/New_project";
import More_models from "./components/More_models";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/project" exact={true} component={Project} />
      <Route path="/project/new_project" component={New_project} />
      <Route path="/more_models" component={More_models} />
    </HashRouter>
  );
}

export default App;
