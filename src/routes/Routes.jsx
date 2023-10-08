import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services/Services";
import ServicesDetails from "../pages/Services/ServicesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/event.json"),
      },

      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("/event.json"),
      },

      {
        path: "/services/:id",
        element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
