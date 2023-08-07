/** @format */

import React from "react";

const InputText = ({ type, label }) => {
  return (
    <label className='flex flex-col space-y-2'>
      <span className='md:text-lg'>{label}</span>
      <input
        type={type}
        placeholder={`masukan ${label}`}
        className='input input-bordered w-full'
      />
    </label>
  );
};

export default InputText;
