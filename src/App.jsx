/** @format */

import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Forum from "./pages/forum/forum";
import TambahUser from "./pages/tambah-user/tambahUser";
import Review from "./pages/review/review";
import Quesioner from "./pages/quesioner/quesioner";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Forum />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='review/:id' element={<Review />} />
        <Route path='tambah-user' element={<TambahUser />} />
        <Route path='quesioner/:id' element={<Quesioner />} />
      </Routes>
    </Router>
  );
}

export default App;
