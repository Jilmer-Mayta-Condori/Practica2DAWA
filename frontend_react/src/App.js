import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ShowAllComponent from "./components/ShowAllComponent";
import formularioComponent from "./components/formularioComponent"
import InicioComponent from "./components/InicioComponent"

export default function App() {
  return (
    <div>     
    <Router>
        <Switch>
          <Route path="/listar" component={ShowAllComponent}/>
          <Route path="/formulario" component={formularioComponent}/>
          <Route path="/" component={InicioComponent}/>
        </Switch>
    </Router>
    </div>
  );
}