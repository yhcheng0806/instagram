import { lazy } from "react";
import * as ROUTES from "../constants/routes";

const routes = [
  {
    path: ROUTES.LOGIN,
    component: lazy(() => import("../pages/login")),
  },
  {
    path: ROUTES.REGISTER,
    component: lazy(() => import("../pages/register")),
  },
  {
    path: ROUTES.ERROR,
    component: lazy(() => import("../pages/error")),
  },
  {
    path: ROUTES.HOME,
    component: lazy(() => import("../pages/home")),
  },
  {
    path: ROUTES.PROFILE,
    component: lazy(() => import("../pages/profile")),
  },
  {
    path: ROUTES.SHARE,
    component: lazy(() => import("../pages/share")),
  },
  {
    path: ROUTES.POSTINFO,
    component: lazy(() => import("../pages/postInfo")),
  },
];

export default routes;
