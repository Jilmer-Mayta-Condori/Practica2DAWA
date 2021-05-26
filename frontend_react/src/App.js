import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ShowAllComponent from "./components/ShowAllComponent";
import CreateEntityComponent from "./components/CreateEntityComponent"
import InicioComponent from "./components/InicioComponent"
import FormLoginEntity from "./components/FormLoginEntity"
import WelcomeEntity from "./components/WelcomeEntity"

export default function App() {
  return (
    <div>     
    <Router>
        <Switch>
          <Route path="/" component={InicioComponent}/>
          <Route path="/listar" component={ShowAllComponent}/>
          <Route path="/formSigInEntity" component={CreateEntityComponent}/>
          <Route path="/formLoginEntity" component={FormLoginEntity}/>
          <Route path="/welcomeEntity" component={WelcomeEntity}/>
        </Switch>
    </Router>
    </div>
  );
}