import React from "react";
import { Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const AuthRoute = ({ user, children, ...props }) => {
  const { pathname } = props.location;
  // console.log(Object.values(ROUTES), "--ROUTES");

  // if (!Object.values(ROUTES).includes(pathname)) {
  //   return <Redirect to={{ pathname: ROUTES.ERROR }} />;
  // }

  if (user) {
    return pathname.includes(ROUTES.LOGIN) ? (
      <Redirect to={{ pathname: ROUTES.HOME }} />
    ) : (
      <>{children}</>
    );
  }
  return (
    <>
      <Redirect to={{ pathname: ROUTES.LOGIN }} />
      {children}
    </>
  );
};

export default AuthRoute;
