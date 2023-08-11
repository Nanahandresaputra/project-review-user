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

const Routers = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='forum'
          element={
            <PrivateRouter>
              <Forum />
            </PrivateRouter>
          }
        />

        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route
          path='review/:id'
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
          path='quesioner/:id'
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
      </Routes>
    </Router>
  );
};

export default Routers;
