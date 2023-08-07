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
      <h1 className='text-lg font-medium'>Navbar testing</h1>
      <div className='relative flex flex-col items-center'>
        <BiSolidUserCircle
          className='text-4xl cursor-pointer'
          onClick={handleOpen}
        />

        <div
          className={
            open
              ? "opacity-100 absolute top-10 py-2 px-10 bg-sky-500"
              : "opacity-0 absolute top-10"
          }
        >
          <p>Login</p>
          <p>Register</p>
          <p>Add User</p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
