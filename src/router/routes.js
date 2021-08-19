import { lazy } from "react";

export const Login = lazy(() => import("../pages/login"));
export const Register = lazy(() => import("../pages/register"));
export const Error = lazy(() => import("../pages/error"));
export const Home = lazy(() => import("../pages/home"));
export const Profile = lazy(() => import("../pages/profile"));
