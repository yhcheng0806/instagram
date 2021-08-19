import React from "react";
import { Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const AuthRoute = ({ user, children, ...props }) => {
  const { pathname } = props.location;

  if (user) {
    return pathname.includes(ROUTES.LOGIN) ?
      <Redirect to={{ pathname: ROUTES.HOME }} />
      : 
      <>{children}</>
  }

  return (
    <Redirect to={{ pathname: ROUTES.LOGIN }} />
  );
};

export default AuthRoute;
