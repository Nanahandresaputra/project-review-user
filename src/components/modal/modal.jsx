/** @format */

import React from "react";
import FormAddUser from "../../pages/tambah-user/formAddUser";

const Modal = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen px-5  z-30 bg-black-opacity'>
      <FormAddUser />
    </div>
  );
};

export default Modal;
