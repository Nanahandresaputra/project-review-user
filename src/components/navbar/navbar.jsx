/** @format */

import { BiSolidUserCircle } from "react-icons/bi";
import userData from "../../data-dummy/user-data/user";
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
    <section className='navbar bg-sky-500 text-white flex justify-around px-1 md:px-5 fixed top-0 z-20'>
      <div className='relative flex items-center space-x-0 md:space-x-5'>
        <TfiArrowCircleLeft
          className='hidden lg:block text-3xl hover:cursor-pointer active:scale-125'
          onClick={() => navigate(-1)}
        />
        <Link to='/' className=' font-medium md:text-xl lg:text-2xl'>
          PT CERBERUS SINERGI DATASISTEM
        </Link>
      </div>

      <div className='flex flex-col items-center'>
        <div
          className=' flex space-x-3 items-center  cursor-pointer'
          onClick={handleOpen}
        >
          {id ? (
            <img
              src={userData[id].foto}
              alt='foro user'
              className='w-12 h-12 md:w-14 md:h-14 rounded-full'
            />
          ) : (
            <BiSolidUserCircle className='text-4xl md:text-5xl' />
          )}

          <div className=' flex flex-col items-center'>
            <p className='hidden md:block font-medium md:text-xl lg:text-2xl'>
              {id ? userData[id].nama : "User"}
            </p>
          </div>
        </div>

        <div
          className={
            open
              ? " absolute md:top-16 top-14 py-2 w-44 flex flex-col items-center bg-sky-500 md:text-lg"
              : "hidden"
          }
        >
          <div className={id ? "hidden" : "flex flex-col items-center"}>
            <Link to='login'>Login</Link>
            <Link to='register'>Register</Link>
          </div>

          <div className={id ? "flex flex-col items-center" : "hidden"}>
            <Link to='profile'>Profile</Link>
            <Link to='login' onClick={() => localStorage.removeItem("auth")}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
