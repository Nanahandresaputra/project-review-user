/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forum from "../pages/forum/forum";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Review from "../pages/review/review";
import TambahUser from "../pages/tambah-user/tambahUser";
import Quesioner from "../pages/quesioner/quesioner";
import Navbar from "../components/navbar/navbar";
import PrivateRouter from "./privateRouter";
import Group from "../pages/group/group";
import AddForum from "../pages/add-forum/addForum";
import AuthPageRouter from "./authPageRouter";
import Profile from "../pages/profile/profile";

const Routers = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='forum/:id'
          element={
            <PrivateRouter>
              <Forum />
            </PrivateRouter>
          }
        />

        <Route
          path='login'
          element={
            <AuthPageRouter>
              <Login />
            </AuthPageRouter>
          }
        />
        <Route
          path='register'
          element={
            <AuthPageRouter>
              <Register />
            </AuthPageRouter>
          }
        />
        <Route
          path='forum/:id/review/:id'
          element={
            <PrivateRouter>
              <Review />
            </PrivateRouter>
          }
        />
        <Route
          path='tambah-user'
          element={
            <PrivateRouter>
              <TambahUser />
            </PrivateRouter>
          }
        />
        <Route
          path='forum/:id/review/:id/quesioner/:id'
          element={
            <PrivateRouter>
              <Quesioner />
            </PrivateRouter>
          }
        />
        <Route
          path='/'
          element={
            <PrivateRouter>
              <Group />
            </PrivateRouter>
          }
        />
        <Route
          path='tambah-forum'
          element={
            <PrivateRouter>
              <AddForum />
            </PrivateRouter>
          }
        />
        <Route
          path='profile'
          element={
            <PrivateRouter>
              <Profile />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routers;
