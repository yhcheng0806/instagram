import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loading from "../pages/loading";

const Home = lazy(() => import("../pages/home"));

const authRoute = () => {
  return (
    <Suspense fallback={Loading}>
      <Route path="/" component={Home} />
    </Suspense>
  );
};

export default authRoute;
