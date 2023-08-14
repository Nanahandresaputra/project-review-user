/** @format */

import { Navigate } from "react-router-dom";

const AuthPageRouter = ({ children }) => {
  let id = localStorage.getItem("auth");
  return id ? <Navigate to="/" /> : children;
};

export default AuthPageRouter;
