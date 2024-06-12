import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router/Router";
import { HelmetProvider } from "react-helmet-async";
import ReactProvider from "./provider/ReactProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ReactProvider>
        <RouterProvider router={router} />
      </ReactProvider>
    </HelmetProvider>
  </React.StrictMode>
);
