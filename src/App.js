import React, { Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthRoute from "./router/authRoute";
import ReactLoader from "./components/loader";

import * as ROUTES from "./constants/routes";

import { Login, Register, Error, Home, Profile } from "./router/routes";

const App = () => {
  const { user } = useSelector((state) => state);

  return (
    <Router>
      <Suspense fallback={<ReactLoader />}>
        <Switch>
          <AuthRoute user={user}>
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.REGISTER} component={Register} />
            <Route exact path={ROUTES.ERROR} component={Error} />
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.PROFILE} component={Profile} />
          </AuthRoute>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
