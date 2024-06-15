import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/register/Register";
import Login from "../../Pages/login/Login";
import PropertyDetails from "../../Pages/propertyDetails/PropertyDetails";
import AllProperties from "../../Pages/allProperties/AllProperties";
import Dashboard from "../../Pages/dashboard/dashboard/Dashboard";

import Profile from "../../Shared/profile/Profile";
import UserWishlist from "../../Pages/dashboard/userWishlist/UserWishlist";
import UserPropertyBought from "../../Pages/dashboard/userPropertyBought/UserPropertyBought";
import UserReview from "../../Pages/dashboard/userReview/UserReview";
import AgentAddProperty from "../../Pages/dashboard/agentAddProperty/AgentAddProperty";
import AgentMyAddedProperty from "../../Pages/dashboard/agentMyAddedProperty/AgentMyAddedProperty";
import AgentMySoldProperty from "../../Pages/dashboard/agentMySoldProperty/AgentMySoldProperty";

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
        path: "/allProperties",
        element: <AllProperties></AllProperties>,
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
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // User Routes
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "userWishlist",
        element: <UserWishlist></UserWishlist>,
      },
      {
        path: "userPropertyBought",
        element: <UserPropertyBought></UserPropertyBought>,
      },
      {
        path: "userReview",
        element: <UserReview></UserReview>,
      },
      // agent routes
      {
        path: "agentAddProperty",
        element: <AgentAddProperty></AgentAddProperty>,
      },
      {
        path: "agentMyAddedProperty",
        element: <AgentMyAddedProperty></AgentMyAddedProperty>,
      },
      {
        path: "agentMySoldProperty",
        element: <AgentMySoldProperty></AgentMySoldProperty>,
      },
    ],
  },
]);
