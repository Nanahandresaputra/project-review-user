/** @format */

import React from "react";
import { Navigate } from "react-router-dom";
import Login from "../pages/login/login";

const PrivateRouter = ({ children }) => {
  let id = localStorage.getItem("auth");
  return id ? children : <Navigate to='/login' />;
};

export default PrivateRouter;
