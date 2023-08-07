/** @format */

import { BiSolidUserCircle } from "react-icons/bi";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    !open ? setOpen(true) : setOpen(false);
  };

  return (
    <section className='navbar bg-sky-500 text-white flex justify-around px-5 fixed top-0'>
      <h1 className='text-lg font-medium md:text-xl lg:text-2xl'>
        Navbar testing
      </h1>
      <div className='relative flex flex-col items-center'>
        <BiSolidUserCircle
          className='text-4xl md:text-5xl cursor-pointer'
          onClick={handleOpen}
        />

        <div
          className={
            open
              ? "opacity-100 absolute top-10 md:top-12 lg:top-14 py-2 w-44 flex flex-col items-center bg-sky-500 transition md:text-lg"
              : "opacity-0  absolute top-10 md:top-12 lg:top-14 py-2 w-44 flex flex-col items-center bg-sky-500 transition md:text-lg"
          }
        >
          <p>Login</p>
          <p>Register</p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
