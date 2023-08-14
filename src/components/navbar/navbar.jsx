/** @format */

import { BiSolidUserCircle } from "react-icons/bi";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TfiArrowCircleLeft } from "react-icons/tfi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  let id = localStorage.getItem("auth");

  const navigate = useNavigate();

  return (
    <section className="navbar bg-sky-500 text-white flex justify-around px-5 fixed top-0 z-20">
      <div className="flex items-center space-x-5">
        <TfiArrowCircleLeft className="hidden lg:block text-3xl hover:cursor-pointer active:scale-125 transition" onClick={() => navigate(-1)} />
        <Link to="/" className=" font-medium md:text-xl lg:text-2xl">
          PT CERBERUS SINERGI DATASISTEM
        </Link>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="flex space-x-3 items-center  cursor-pointer" onClick={handleOpen}>
          <BiSolidUserCircle className="text-4xl md:text-5xl" />
          <p className="hidden md:block font-medium md:text-xl lg:text-2xl">User</p>
        </div>

        <div
          className={
            open
              ? "opacity-100 absolute top-10 md:top-12 lg:top-14 py-2 w-44 flex flex-col items-center bg-sky-500 transition md:text-lg"
              : "opacity-0  absolute top-10 md:top-12 lg:top-14 py-2 w-44 flex flex-col items-center bg-sky-500 transition md:text-lg"
          }
        >
          <Link to="login" className={id ? "hidden" : "block"}>
            Login
          </Link>
          <Link to="register" className={id ? "hidden" : "block"}>
            Register
          </Link>
          <Link to="login" className={id ? "block" : "hidden"} onClick={() => localStorage.removeItem("auth")}>
            Logout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
