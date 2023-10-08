import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services/Services";
import ServicesDetails from "../pages/Services/ServicesDetails";
import AboutUs from "../pages/AboutUs/AboutUs";
import Projects from "../pages/Projects/Projects";
import Blogs from "../pages/Blogs/Blogs";
import NotFoundPage from "../pages/Error/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
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
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/projects",
        element: (
          <PrivateRoute>
            <Projects></Projects>
          </PrivateRoute>
        ),
        loader: () => fetch("/projects.json"),
      },
      
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
        loader: () => fetch("/blogs.json"),
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
