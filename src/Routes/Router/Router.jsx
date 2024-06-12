import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/register/Register";
import Login from "../../Pages/login/Login";
import PropertyDetails from "../../Pages/propertyDetails/PropertyDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/propertyDetails",
        element: <PropertyDetails></PropertyDetails>,
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
