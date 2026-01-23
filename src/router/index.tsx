import { lazy } from "react";
import { lazyLoad } from "./LazyLoad";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../views/login";
import NotFound from "../views/notfound";
import NotFound403 from "../views/notfound/403";
import Layout from "../layout/index";
// import Welcome from "../views/welcome";
// import Dashboard from "../views/dashboard";
// import User from "../views/user";
// import Menu from "../views/menu";
// import Role from "../views/role";
// import Dept from "../views/dept";
import AuthLoader from "./AuthLoader";
export const router = [
  {
    id: "layout",
    element: <Layout />,
    loader: AuthLoader,
    children: [
      {
        path: "/welcome",
        element: lazyLoad(lazy(() => import("../views/welcome"))),
      },
      {
        path: "/dashboard",
        element: lazyLoad(lazy(() => import("../views/dashboard"))),
      },
      {
        path: "/userList",
        element: lazyLoad(lazy(() => import("../views/user"))),
      },
      {
        path: "/menuList",
        element: lazyLoad(lazy(() => import("../views/menu"))),
        meta: {
          auth: true,
        },
      },
      {
        path: "/roleList",
        element: lazyLoad(lazy(() => import("../views/role"))),
      },
      {
        path: "/deptList",
        element: lazyLoad(lazy(() => import("../views/dept"))),
      },
    ],
  },
  { path: "/", element: <Navigate to="/welcome" /> },
  { path: "/login", element: <Login /> },
  { path: "/403", element: <NotFound403 /> },
  { path: "*", element: <NotFound /> },
];
// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(router);
