/** @format */

import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  let id = localStorage.getItem("auth");
  return id ? children : <Navigate to="/login" />;
};

export default PrivateRouter;
