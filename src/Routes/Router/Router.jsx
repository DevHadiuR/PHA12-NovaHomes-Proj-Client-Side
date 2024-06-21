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
import AgentRequestedProperty from "../../Pages/dashboard/agentRequestedProperty/AgentRequestedProperty";
import AdminManageProperty from "../../Pages/dashboard/adminManageProperty/AdminManageProperty";
import AdminManageUsers from "../../Pages/dashboard/adminManageUsers/AdminManageUsers";
import AdminManageReviews from "../../Pages/dashboard/adminManageReviews/AdminManageReviews";
import AgentUpdateProperty from "../../Pages/dashboard/agentUpdateProperty/AgentUpdateProperty";
import UserMakeAnOfferBtn from "../../Pages/dashboard/userMakeAnOfferBtn/UserMakeAnOfferBtn";
import UserPayment from "../../Pages/dashboard/userPayment/UserPayment";
import ErrorPage from "../../Shared/errorPage/ErrorPage";
import PrivateRouter from "../privateRouter/PrivateRouter";
import PrivateAdminRoute from "../privateAdminRoute/PrivateAdminRoute";
import PrivateAgentRoute from "../privateAgentRoute.jsx/PrivateAgentRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/propertyDetails/:id",
        element: (
          <PrivateRouter>
            <PropertyDetails></PropertyDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/allProperties",
        element: (
          <PrivateRouter>
            <AllProperties></AllProperties>
          </PrivateRouter>
        ),
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
    element: (
      <PrivateRouter>
        {" "}
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "userMakeAnOfferBtn/:id",
        element: <UserMakeAnOfferBtn></UserMakeAnOfferBtn>,
      },
      {
        path: "userPropertyBought",
        element: <UserPropertyBought></UserPropertyBought>,
      },
      {
        path: "userPayment/:id",
        element: <UserPayment></UserPayment>,
      },
      {
        path: "userReview",
        element: <UserReview></UserReview>,
      },
      // agent routes
      {
        path: "agentAddProperty",
        element: (
          <PrivateAgentRoute>
            <AgentAddProperty></AgentAddProperty>
          </PrivateAgentRoute>
        ),
      },
      {
        path: "agentMyAddedProperty",
        element: (
          <PrivateAgentRoute>
            <AgentMyAddedProperty></AgentMyAddedProperty>
          </PrivateAgentRoute>
        ),
      },
      {
        path: "agentUpdateProperty/:id",
        element: (
          <PrivateAgentRoute>
            <AgentUpdateProperty></AgentUpdateProperty>
          </PrivateAgentRoute>
        ),
      },
      {
        path: "agentMySoldProperty",
        element: (
          <PrivateAgentRoute>
            <AgentMySoldProperty></AgentMySoldProperty>
          </PrivateAgentRoute>
        ),
      },
      {
        path: "agentRequestedProperty",
        element: (
          <PrivateAgentRoute>
            <AgentRequestedProperty></AgentRequestedProperty>
          </PrivateAgentRoute>
        ),
      },
      // admin routes
      {
        path: "adminManageProperty",
        element: (
          <PrivateAdminRoute>
            <AdminManageProperty></AdminManageProperty>
          </PrivateAdminRoute>
        ),
      },
      {
        path: "adminManageUsers",
        element: (
          <PrivateAdminRoute>
            <AdminManageUsers></AdminManageUsers>
          </PrivateAdminRoute>
        ),
      },
      {
        path: "adminManageReviews",
        element: (
          <PrivateAdminRoute>
            <AdminManageReviews></AdminManageReviews>
          </PrivateAdminRoute>
        ),
      },
    ],
  },
]);
