/** @format */

import React from "react";

const InputText = ({ type, label }) => {
  return (
    <label className='flex flex-col space-y-2 md:space-y-5'>
      <span className='md:text-xl'>{label}</span>
      <input
        type={type}
        placeholder={`masukan ${label}`}
        className='input input-bordered w-full md:text-xl'
      />
    </label>
  );
};

export default InputText;
