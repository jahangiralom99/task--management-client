import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Root from "./Routes/Root/Root.jsx";
import AuthProvider from "./AuthProvide/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Root}></RouterProvider>
      {/* React Alert  */}
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
