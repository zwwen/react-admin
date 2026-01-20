import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../views/login";
import NotFound from "../views/notfound";
import Welcome from "../views/welcome";
import Layout from "../layout/index";
import Dashboard from "../views/dashboard";
import User from "../views/user";
import Menu from "../views/menu";
import Role from "../views/role";
import Dept from "../views/dept";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/userList",
        element: <User />,
      },
      {
        path: "/menuList",
        element: <Menu />,
      },
      {
        path: "/roleList",
        element: <Role />,
      },
      {
        path: "/deptList",
        element: <Dept />,
      },
    ],
  },
  { path: "/", element: <Navigate to="/welcome" /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> },
]);
export default router;
