import "../styles/app.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Alert from "./Alert";
// import Alert from "./Alert";

const App = () => {
  return (
    <>
      <NavBar />
      <Alert />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </>
  );
};

export default App;
