import React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import AuthRoute from "./router/authRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <AuthRoute />
      </Switch>
    </Router>
  );
};

export default App;
