/** @format */

import React from "react";

const InputText = ({ type, label, register, name, errors, errorStyle }) => {
  return (
    <label className='flex flex-col space-y-2 md:space-y-5 w-full'>
      <span className='md:text-xl 2xl:text-xl'>
        {label}
        {/* <span className='text-red-500'>*</span> */}
      </span>
      <input
        type={type}
        placeholder={`masukan ${label || "pertanyaan"}`}
        className={
          "input input-bordered w-full md:text-xl 2xl:input-group-lg  2xl:text-xl" ||
          ""
        }
        {...register(name)}
      />
      <span className={errorStyle || ""}>{errors || ""}</span>
    </label>
  );
};

export default InputText;
