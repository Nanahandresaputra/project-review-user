/** @format */

import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Forum from "./pages/forum/forum";
import TambahUser from "./pages/tambah-user/tambahUser";
import Review from "./pages/review/review";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Forum />} />
        <Route path='tambah-user' element={<TambahUser />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='review' element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
