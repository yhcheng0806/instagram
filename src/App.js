import React, { Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthRoute from "./router/authRoute";
import ReactLoader from "./components/loader";

import routes from "./router/routes";

const App = () => {
  const { user } = useSelector((state) => state);

  return (
    <Router>
      <Suspense fallback={<ReactLoader />}>
        <Switch>
          <AuthRoute user={user}>
            {routes.map(({ path, component }) => (
              <Route exact key={path} path={path} component={component} />
            ))}
          </AuthRoute>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
